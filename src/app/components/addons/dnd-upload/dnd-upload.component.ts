import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dnd-upload',
  templateUrl: './dnd-upload.component.html',
  styleUrls: ['./dnd-upload.component.scss']
})
export class DndUploadComponent implements OnInit {
  @Output() private selectedFile: EventEmitter<File> = new EventEmitter();
  public currentFile: File = null;

  constructor() { }

  ngOnInit() {
  }

  public onFileChange(file: File) {
    console.log('currentfile', file);
    if (this.fileValidation(file)) {
      this.currentFile = file;
      this.selectedFile.emit(file);
      return;
    }

    console.error('Error');
  }

  public removeFile() {
    this.currentFile = null;
    this.selectedFile.emit(null);
  }

  public fileValidation(file: File) {
    const isExcelFile = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    return isExcelFile;
  }
}
