import { Component, OnInit, EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FileUploadItem } from 'src/app/models/files/fileUploadItem';
import { concat } from 'rxjs';
import { IHttpFileUploadService } from 'src/app/services/interfaces/IHttpFileUploadService';
import { FormArray, FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Output() private selectedFile: EventEmitter<File> = new EventEmitter();
  @ViewChild(MatPaginator, { static: true, read: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true, read: true }) sort: MatSort;
  @Input() companyId: string;
  @Input() documents: FormArray;

  public listFilesUpload: File[] = []; //Could be deleted
  public listUploadedDocument: FileUploadItem[] = [];
  public currentFile: File = null;
  public dataSource: MatTableDataSource<string>;
  public displayedColumns: string[] = ['Name', 'Progress', 'Actions'];

  constructor(
    private _uploadService: IHttpFileUploadService
  ) { }

  ngOnInit() { }

  public onFileChange(files: File[]) {
    this.listFilesUpload = files;
    console.log('currentfile', this.listFilesUpload);

    for (let i = 0; i < files.length; i++) {
      const currentFile = this.listFilesUpload[i];

      if (this.fileValidation(currentFile)) {
        const isNameInList = this.listUploadedDocument.filter(file => file.Name == currentFile.name).length > 0;

        if (!isNameInList) {
          const currentDateName = this.generateFileName(currentFile.name);
          this.listUploadedDocument.push(new FileUploadItem(currentFile.name, currentDateName,currentFile.type, currentFile.size.toString(), files[i]));

          this.documents.push(new FormControl({
            name: currentFile.name,
            datetimeName: currentDateName,
            mimeType: currentFile.type,
            extension: currentFile.name.split('.').pop(),
            size: currentFile.size,
          }));
        }
      } else {
        console.log('Hue');
        return;
      }
    }

    this.updateDocumentList();
  }

  public generateFileName(name: string): string {
    return `${moment().format('YYYY_MM_DD_HH_mm_ss')}_${name}`;
  }

  public fileValidation(file: File) {
    // // return file.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    return true;
  }

  public updateDocumentList(): void {
    const listFileName = this.listUploadedDocument.map(file => file.Name);
    this.dataSource = new MatTableDataSource(listFileName);
    this.dataSource.paginator = this.paginator;
  }

  public removeFile(index: number): void {
    this.listUploadedDocument.splice(index, 1);
    this.updateDocumentList();
  }

  public uploadDocuments(): void {
    console.log(this.listFilesUpload);

    let resquestListResult = [];
    let documentUploadQueue = this.listUploadedDocument.map(fileToUpload => {
      return this._uploadService.uploadFiles(fileToUpload, this.companyId)
    });
    
    const observableList = concat(...documentUploadQueue);

    observableList.subscribe(results => {
      if (typeof (results) == 'object' && results.Status) {
        console.log('inside', results)
        resquestListResult.push(results);
      }
      console.log('final results', resquestListResult);

      if (resquestListResult.length == documentUploadQueue.length) {
        const errorList = resquestListResult.filter(response => response.Status == 500);
        console.log('errorList:', errorList);
      }
    });
  }
}
