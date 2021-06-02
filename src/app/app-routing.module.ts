import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExportAsPdfComponent } from './export-as-pdf/export-as-pdf.component';

const routes: Routes = [
    { path: '', redirectTo: 'export', pathMatch: 'full' },
  {path:'export',component:ExportAsPdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
