import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {
  transaction:{date:string,tdetails:string,withdrawal:number,deposite:number,rbal:number}[]=[]

  constructor() { 
    this.transaction=[
      {date:"01/19/2018",tdetails:"IIN/I-Debit/Citrus Pa/xxxxxx93711",withdrawal:5.000,deposite:5.000,rbal:5.000},
      {date:"01/19/2018",tdetails:"IIN/I-Debit/Citrus Pa/xxxxxx93711",withdrawal:5.000,deposite:5.000,rbal:5.000},
      {date:"01/19/2018",tdetails:"IIN/I-Debit/Citrus Pa/xxxxxx93711",withdrawal:5.000,deposite:5.000,rbal:5.000},
      {date:"01/19/2018",tdetails:"IIN/I-Debit/Citrus Pa/xxxxxx93711",withdrawal:5.000,deposite:5.000,rbal:5.000},
      {date:"01/19/2018",tdetails:"IIN/I-Debit/Citrus Pa/xxxxxx93711",withdrawal:5.000,deposite:5.000,rbal:5.000}
    ]
  }

  ngOnInit(): void {
  }

}
