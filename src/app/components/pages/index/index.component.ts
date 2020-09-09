import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public listTools = [
    {
      id: 'join-pdf',
      title: 'Unir PDF',
      description: 'Une PDFs y ponlos en el orden que prefieras. ¡Rápido y fácil!',
      color: 'warning--alt',
      icon: 'copy',
      isVisible: true
    },
    {
      id: 'split-pdf',
      title: 'Dividir PDF',
      description: 'Extrae una o varias páginas de tu PDF o convierte cada página del PDF en un archivo PDF independiente.',
      color: 'success',
      icon: 'expand-arrows-alt',
      isVisible: false
    },
    {
      id: 'compress-pdf',
      title: 'Comprimir PDF',
      description: 'Consigue que tu documento PDF pese menos y, al mismo tiempo, mantener la máxima calidad posible.',
      color: 'success--dark',
      icon: 'file',
      isVisible: false
    },
    {
      id: 'unlock-pdf',
      title: 'Desbloquear PDF',
      description: 'Quita la contraseña de los PDF y los desbloquea, así podrás usarlos para lo que quieras.',
      color: 'success--dark',
      icon: 'lock-open',
      isVisible: true
    },
    {
      id: 'lock-pdf',
      title: 'Proteger PDF',
      description: 'Protege PDF con contraseña. Encripta archivos PDF para evitar accesos no autorizados.',
      color: 'info--dark',
      icon: 'lock',
      isVisible: true
    },
    {
      id: 'watermark-pdf',
      title: 'Marca de Agua',
      description: 'Elige una imagen o texto para insertarlo encima de un PDF. Elige posición, transparencia y tipografía.',
      color: 'danger',
      icon: 'stamp',
      isVisible: false
    },
    {
      id: 'numberpages-pdf',
      title: 'Números de Página',
      description: 'Añade números de página a un PDF. Escoge posición, dimensiones, formato y tipografía.',
      color: 'pink--dark',
      icon: 'sort-numeric-down',
      isVisible: false
    },
    {
      id: 'office-to-pdf',
      title: 'Office a PDF',
      description: 'Con nuestras herramientas podrás convertir un sin fin de formatos de office a PDF.',
      color: 'info',
      icon: 'boxes',
      isVisible: false
    },
    {
      id: 'img-to-pdf',
      title: 'Imagen a PDF',
      description: 'Convierte tus imágenes JPG a PDF. Ajusta la orientación y los márgenes.',
      color: 'warning',
      icon: 'images',
      isVisible: true
    },
    {
      id: 'jpg-to-pdf',
      title: 'PDF a JPG',
      description: 'Extrae todas las imágenes que están dentro de un PDF o convierte cada página en una imagen JPG.',
      color: 'teal',
      icon: 'file-pdf',
      isVisible: false
    },
    {
      id: 'html-to-pdf',
      title: 'HTML a PDF',
      description: 'Convierte páginas web de HTML a PDF. Copia y pega la dirección de la página que quieres convertir a PDF.',
      color: 'blue--dark',
      icon: 'code',
      isVisible: true
    },
    {
      id: 'pdf-to-word',
      title: 'PDF a Word',
      description: 'Convierte fácilmente tus archivos PDF a DOCX de WORD editables.',
      color: 'blue--dark',
      icon: 'file-word',
      isVisible: false
    },
    {
      id: 'pdf-to-ppt',
      title: 'PDF a Powerpoint',
      description: 'Convierte tus archivos PDF a presentaciones PPTX de POWERPOINT',
      color: 'orange',
      icon: 'file-powerpoint',
      isVisible: false
    },
    {
      id: 'pdf-to-ppt',
      title: 'PDF a Excel',
      description: 'Extrae directamente datos de PDF a Excel en pocos segundos',
      color: 'success',
      icon: 'file-excel',
      isVisible: false
    },
    {
      id: 'word-to-pdf',
      title: 'Word a PDF',
      description: 'Convierte de manera sencilla tus archivos de WORD a PDF',
      color: 'blue',
      icon: 'file-word',
      isVisible: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
