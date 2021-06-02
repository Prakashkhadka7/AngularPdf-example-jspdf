import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-export-as-pdf',
  templateUrl: './export-as-pdf.component.html',
  styleUrls: ['./export-as-pdf.component.scss']
})
export class ExportAsPdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getPDF() {
    html2canvas(document.querySelector('#content')).then(function(
      canvas
    ) {
      canvas.getContext('2d');
      var HTML_Width = canvas.width;
      var HTML_Height = canvas.height;
      var top_left_margin = 15;
      var PDF_Width = HTML_Width + top_left_margin * 2;
      var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
      var canvas_image_width = HTML_Width;
      var canvas_image_height = HTML_Height;

      var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
      console.log(canvas.height + '  ' + canvas.width);

      var imgData = canvas.toDataURL('image/jpeg', 1.0);
      var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
      pdf.addImage(
        imgData,
        'JPG',
        0,
        0,
        canvas_image_width,
        canvas_image_height
      );
      console.log(totalPDFPages);
      for (var i = 1; i <= totalPDFPages; i++) {
        pdf.addPage();
        let margin = -(PDF_Height * i) + top_left_margin * 4 ;
        // if (i>1) {
          margin = margin - 55;
        // }
        console.log(top_left_margin);
        console.log(margin);
        // console.log(-(PDF_Height * i) + top_left_margin * 4);

        pdf.addImage(
          imgData,
          'JPG',
          0,
          margin,
          canvas_image_width,
          canvas_image_height
        );
        }

      pdf.save('HTML-Document.pdf');
    });
  }
}
