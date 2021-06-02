import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintableComponent } from './printable/printable.component';
import { ExportAsPdfComponent } from './export-as-pdf/export-as-pdf.component';
import { UsingPdfmakeComponent } from './using-pdfmake/using-pdfmake.component';

@NgModule({
  declarations: [
    AppComponent,
    PrintableComponent,
    ExportAsPdfComponent,
    UsingPdfmakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
