import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dnd-upload',
  templateUrl: './dnd-upload.component.html',
  styleUrls: ['./dnd-upload.component.scss']
})
export class DndUploadComponent implements OnInit {
  @Output() private selectedFile: EventEmitter<File> = new EventEmitter();

  @ViewChild('file')
  htmlFile: ElementRef;

  public currentFile: File = null;

  constructor() { }

  ngOnInit() {
  }

  public onFileChange(file: File) {
    console.log('currentfile', file);
    // if (this.fileValidation(file)) {
    //   this.currentFile = file;
    //   this.selectedFile.emit(file);

    //   this.clearInput();

    //   return;
    // }

    this.currentFile = file;
    this.selectedFile.emit(file);

    this.clearInput();
  }

  removeFile() {
    this.currentFile = null;
    this.selectedFile.emit(null);
  }

  fileValidation(file: File) {
    const isExcelFile = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    return isExcelFile;
  }

  clearInput() {
    this.htmlFile.nativeElement.value = '';
  }
}
