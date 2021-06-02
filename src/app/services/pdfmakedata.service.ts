import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pdfdata } from '../models/pdfData';
import { catchError, retry } from 'rxjs/operators';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfmakedataService {
base_Url = 'http://localhost:3000';
httpOptions =  {
 headers : new HttpHeaders({
   'Content-Type': 'application/json'
  })
}
  constructor(private http: HttpClient) { }
  getAllItems(){
    return this.http.get<Pdfdata>(this.base_Url+ '/pdfdata/')
    .pipe(
      retry(1),
      catchError(this.errorHandlerss)
    )
  }
  errorHandlerss(error){
    let errorMessage ='';
    if(error.error instanceof ErrorEvent){
      errorMessage= error.error.message;
    }
    else {
      errorMessage = `Error Code:${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
return throwError(errorMessage);
  }
}
