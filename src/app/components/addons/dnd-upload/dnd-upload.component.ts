import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, Input } from '@angular/core';
import { IUploadService } from 'src/app/services/interfaces/upload.interface';
import { concat } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { FileUploadItem } from 'src/app/models/fileUploadItem.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dnd-upload',
  templateUrl: './dnd-upload.component.html',
  styleUrls: ['./dnd-upload.component.scss']
})
export class DndUploadComponent implements OnInit {
  @ViewChild('file')
  htmlFile: ElementRef;

  public currentFile: File = null;
  public dataSource: MatTableDataSource<string>;
  public displayedColumns: string[] = ['Name', 'Progress', 'Actions'];

  public listFilesUpload: File[] = []; // Could be deleted
  public listUploadedDocument: FileUploadItem[] = [];

  public serverFiles = [];

  constructor(
    private uploadService: IUploadService
  ) { }

  ngOnInit() {
  }

  uploadDocuments(): void {
    const resquestListResult = [];
    const documentUploadQueue = this.listUploadedDocument.map(fileToUpload => {
      return this.uploadService.uploadFiles(fileToUpload);
    });

    const observableList = concat(...documentUploadQueue);

    observableList.subscribe((results: any) => {
      if (typeof (results) === 'object' && results.status === 200) {
        resquestListResult.push(results);
        this.serverFiles.push(results.data.name);
      }

      if (resquestListResult.length === documentUploadQueue.length) {
        console.table(this.serverFiles);
        this.uploadService.mergePdfs(this.serverFiles).subscribe((response) => {
          console.log(response);
        });
      }
    });
  }

  public updateDocumentList(): void {
    const listFileName = Array.from(this.listFilesUpload).map(file => file.name);
    this.dataSource = new MatTableDataSource(listFileName);
  }

  removeFile(index: number): void {
    this.listUploadedDocument.splice(index, 1);
    this.updateDocumentList();
  }

  public onFileChange(files: File[]) {
    if (!files) {
      return;
    }

    const fileInList = this.listUploadedDocument.filter(file => file.name === files[0].name).length > 0;

    if (fileInList) {
      Swal.fire({
        title: 'Error',
        text: 'The current file is already uploaded in the table',
        icon: 'warning'
      });

      return;
    }

    Array.from(files).map((file: any) => {
      this.listFilesUpload.push(file);
    });

    for (let i = 0; i < files.length; i++) {
      const currentFile = this.listFilesUpload[i];

      if (this.fileValidation(currentFile)) {
        const isNameInList = this.listUploadedDocument.filter(file => file.name === currentFile.name).length > 0;

        if (!isNameInList) {
          const currentDateName = this.generateFileName(currentFile.name);
          this.listUploadedDocument.push(
            new FileUploadItem(currentFile.name, currentDateName, currentFile.type, currentFile.size.toString(), files[i])
          );
        }
      } else {
        Swal.fire({
          title: 'Error',
          text: 'An error ocurred trying to upload files other than pdf',
          icon: 'warning'
        });

        return;
      }
    }

    this.updateDocumentList();
  }

  public generateFileName(name: string): string {
    return `${Date.now()}_${name}`;
  }

  // removeFile() {
  //   this.currentFile = null;
  //   this.selectedFile.emit(null);
  // }

  fileValidation(file: File) {
    const isExcelFile = file.type === 'application/pdf';
    return isExcelFile;
  }

  clearInput() {
    this.htmlFile.nativeElement.value = '';
  }
}
