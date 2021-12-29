import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {
  Bill:{dob:string,bnumber:number,ddate:string,bamount:number,amountd:number,adjust:number,withhold:number,bal:number,amountp:string}[]=[]

  constructor() { 
    this.Bill=[
      {dob:"01/19/2018",bnumber:123456789,ddate:"01/19/2018",bamount:500,amountd:500,adjust:0,withhold:0,bal:0,amountp:"1000"},
      {dob:"01/19/2018",bnumber:123456789,ddate:"01/19/2018",bamount:500,amountd:500,adjust:0,withhold:0,bal:0,amountp:"1000"},
      {dob:"01/19/2018",bnumber:123456789,ddate:"01/19/2018",bamount:500,amountd:500,adjust:0,withhold:0,bal:0,amountp:"1000"},
      {dob:"01/19/2018",bnumber:123456789,ddate:"01/19/2018",bamount:500,amountd:500,adjust:0,withhold:0,bal:0,amountp:"1000"}
    ]
  }

  ngOnInit(): void {
  }

}
