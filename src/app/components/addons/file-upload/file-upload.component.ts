import { Component, OnInit, EventEmitter, Output, ViewChild, Input } from '@angular/core';
// import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { concat } from 'rxjs';
import { FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  public availableMethods = [
    {
      name: 'join-pdf',
      value: 'Unir PDFs',
      description: 'Une PDFs y ponlos en el orden que prefieras. ¡Rápido y fácil!'
    },
    {
      name: 'office-to-pdf',
      value: 'Convertir OFFICE a PDF',
      description: 'Convierte tus documentos y archivos de Office a PDF con la máxima calidad y exactamente igual que el archivo DOC o DOCX original.'
    },
    {
      name: 'unlock-pdf',
      value: 'Unlock a PDF',
      description: 'Unlock any PDF'
    }
  ];

  public currentPage = {
    name: '',
    description: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    const currentPage = this.activatedRoute.snapshot.queryParamMap.get('page');

    if (!currentPage) {
      this.router.navigate(['']);
    }

    const itemFound = this.availableMethods.filter(x => x.name === currentPage)[0];

    if (!itemFound) {
      this.router.navigate(['']);
    }

    this.setJumbotronInfo(itemFound);
  }

  setJumbotronInfo(item: any) {
    this.currentPage.name = item.value;
    this.currentPage.description = item.description;
  }
}
