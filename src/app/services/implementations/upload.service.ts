import { Injectable } from '@angular/core';
import { IUploadService } from '../interfaces/upload.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService implements IUploadService {
  constructor(private http: HttpClient) { }

  public uploadFiles(pdf: any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', pdf.file, pdf.name);

    return this.http.post<any>(`${environment.apiURL}/pdf/upload`, formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          pdf.progress = progress;
          return { status: 'progress', message: progress };

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    }));
  }

  public mergePdfs(listPdfs: any): Observable<any> {
    return this.http.post<any>(`${environment.apiURL}/pdf/merge`, { fileList: listPdfs })
      .pipe(map((response: any) => {
        if (response.status === 200) {
          return response.data;
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: response.errors.join(', ')
          });
        }
      }));
  }
}
