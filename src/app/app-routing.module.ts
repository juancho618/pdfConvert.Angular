import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './components/addons/file-upload/file-upload.component';
import { IndexComponent } from './components/pages/index/index.component';


const routes: Routes = [
  { path: 'upload', component: FileUploadComponent },
  { path: '', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
