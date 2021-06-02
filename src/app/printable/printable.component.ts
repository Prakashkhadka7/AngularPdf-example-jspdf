import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-printable',
  templateUrl: './printable.component.html',
  styleUrls: ['./printable.component.scss']
})
export class PrintableComponent implements OnInit {
  @ViewChild('content') content!: ElementRef;
  marksheetInfo
  =[{
    "examName": "First Terminal",
    "rollNo": 12,
    "studentName": " Dilip Rai",
    "markSheetDetails": [{
      "subjectName": "COM NEPALI",
      "theoryObtainedMarks": 40,
      "practicalObtainedMarks": 60,
      "subjectTotalGrade": 100,
      "subjectTotalGradeMark": 500,
      "highestMarks": 140,
    },
  {
      "subjectName": "MATHEMATICS",
      "theoryObtainedMarks": 40,
      "practicalObtainedMarks": 60,
      "subjectTotalGrade": 100,
      "subjectTotalGradeMark": 500,
      "highestMarks": 140,
    },
    {
      "subjectName": "SCIENCE",
      "theoryObtainedMarks": 40,
      "practicalObtainedMarks": 60,
      "subjectTotalGrade": 100,
      "subjectTotalGradeMark": 500,
      "highestMarks": 140,
    },
  {
      "subjectName": "ENGLISH",
      "theoryObtainedMarks": 40,
      "practicalObtainedMarks": 60,
      "subjectTotalGrade": 100,
      "subjectTotalGradeMark": 500,
      "highestMarks": 140,
    },
    {
      "subjectName": "MATHEMATICS",
      "theoryObtainedMarks": 40,
      "practicalObtainedMarks": 60,
      "subjectTotalGrade": 100,
      "subjectTotalGradeMark": 500,
      "highestMarks": 140,
    },
    {
      "subjectName": "SCIENCE",
      "theoryObtainedMarks": 40,
      "practicalObtainedMarks": 60,
      "subjectTotalGrade": 100,
      "subjectTotalGradeMark": 500,
      "highestMarks": 140,
    },
  {
      "subjectName": "ENGLISH",
      "theoryObtainedMarks": 40,
      "practicalObtainedMarks": 60,
      "subjectTotalGrade": 100,
      "subjectTotalGradeMark": 500,
      "highestMarks": 140,
    },
    {
      "subjectName": "MATHEMATICS",
      "theoryObtainedMarks": 40,
      "practicalObtainedMarks": 60,
      "subjectTotalGrade": 100,
      "subjectTotalGradeMark": 500,
      "highestMarks": 140,
    },
    {
      "subjectName": "SCIENCE",
      "theoryObtainedMarks": 40,
      "practicalObtainedMarks": 60,
      "subjectTotalGrade": 100,
      "subjectTotalGradeMark": 500,
      "highestMarks": 140,
    },
  {
      "subjectName": "ENGLISH",
      "theoryObtainedMarks": 40,
      "practicalObtainedMarks": 60,
      "subjectTotalGrade": 100,
      "subjectTotalGradeMark": 500,
      "highestMarks": "",
    }],
    "totalObtain": 500,
    "fullMarks": 1000,
    "percentage": 60,
    "result": "passed",
    "rank": 1000,
    "outOf": 500,
    "totalGrade": 500,
    "totalGradeMarks": 5000
  }];
  constructor() { }

  ngOnInit(): void {
  }
  printDiv(divName: any) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    location.reload();

    document.body.innerHTML = originalContents;

  }
}
