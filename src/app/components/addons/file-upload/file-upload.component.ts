import { Component, OnInit, EventEmitter, Output, ViewChild, Input } from '@angular/core';
// import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { concat } from 'rxjs';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  ngOnInit() { }
}
