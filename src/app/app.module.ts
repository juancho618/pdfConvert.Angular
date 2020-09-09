import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DndUploadComponent } from './components/addons/dnd-upload/dnd-upload.component';
import { FileUploadComponent } from './components/addons/file-upload/file-upload.component';
import { FooterComponent } from './components/sections/footer/footer.component';
import { IndexComponent } from './components/pages/index/index.component';
import { UploadService } from './services/implementations/upload.service';
import { IUploadService } from './services/interfaces/upload.interface';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    DndUploadComponent,
    FileUploadComponent,
    FooterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    { provide: IUploadService, useClass: UploadService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
