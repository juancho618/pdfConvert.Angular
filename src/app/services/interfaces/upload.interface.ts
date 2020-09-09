import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class IUploadService {
    abstract uploadFiles(pdf: any): Observable<any>;
    abstract mergePdfs(listPdfs: any): Observable<any>;
}
