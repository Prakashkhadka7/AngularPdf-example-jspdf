import { Component, OnInit } from '@angular/core';
import pdfmake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfmake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-using-pdfmake',
  templateUrl: './using-pdfmake.component.html',
  styleUrls: ['./using-pdfmake.component.scss']
})
export class UsingPdfmakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  generatePDF() {
    let data1= this.marksInfo;
    let i=0;
    let docDefinition = {
      watermark: {text: 'Eazy Boarding School',color:'navy',
    opacity:0.1,bold: true,italics:false},
    content: [
      {
        alignment: 'justify',
        columns: [
          {
            image: 'data:image/jpeg;base64,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',
            fit: [60, 60],
          },
          {
            stack: [
              {
                text: 'School Table',
                style: 'logo'
              },
              'Main Road, Gauradaha'
            ],
            alignment: 'center',
          },
          {
            stack: [
              // `Date : ${date| date}`,
                // `Date : ${date1.format('YYYY/MM/DD')}`
            ],
            alignment: 'right',
          }
        ]
      },
      {
        text: 'Exam',
        alignment: 'center',
        bold: true,
        fontSize: 16,
        margin: [2,6,2,2]
      },
      {
        margin: [1,20,2,5],
        style: 'table',
        table: {
          heights: [20],
          headerRows:2,
          widths:['auto',100,'auto','auto','auto','auto','auto','auto','auto',100],
          body: [
            [{text: '',colSpan:4},{},{},{},{text: 'Theory',colSpan:2},{},{text: 'Practical',colSpan:2},{},{text: '',colSpan:2},{}],
            [
              {text: 'SN',
               bold: true
              },
              {
                text: 'Subject Name',
                bold: true
              },
              {
                text: 'Result System',
                bold: true
              },
              {
                text: 'Evaluation',
                bold: true
              },
              {
                text: 'Full Marks',
                bold: true
              },
              {
                text: 'Pass Marks',
                bold: true
              },
              {
                text: 'Full Marks',
                bold: true
              },
              {
                text: 'Pass Marks',
                bold: true
              },
              {
                text: 'Total',
                bold: true
              },
              {
                text: 'Narration',
                bold: true
              }
            ],
            ...data1.map(item=> (
              i=i+1,
              [`${i}`,item.subjectName,item.resultSystem,item.evaluateForType,item.theoryFullMark,item.theoryPassMark,item.practicalFullMark,item.practicalPassMark,item.theoryFullMark+item.practicalFullMark]
            ))
          ]
        },
      }
    ],
    styles: {
      header: {
        fontSize: 18,
        bold:true
      },
      subheader: {
        bold: true
      },
      logo: {
        fontSize: 14,
        bold: true
      },
      table: {
        fontSize: 8
      }
    },
    defaultStyle: {
      columnGap: 20
    }
    };
    pdfmake.createPdf(docDefinition).open();
  }
}
