import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-cashsummary',
  templateUrl: './cashsummary.component.html',
  styleUrls: ['./cashsummary.component.css']
})
export class CashsummaryComponent implements OnInit {
  Months:{month:string}[]=[]
  chart:{}=[];

  constructor() {
    this.Months=[
      {month:"January"},
      {month:"February"},
      {month:"March"},
      {month:"April"},
      {month:"May"},
      {month:"June"},
      {month:"July"},
      {month:"August"},
      {month:"Septamber"},
      {month:"Octaber"},
      {month:"Novamber"},
      {month:"December"}
    ]
   }

  ngOnInit(): void {
    this.chart=new Chart('canvas',{
      type:'line',
      data:{
        
        labels:['','','','d','e','f','g','h'],
        datasets:[
         {
          label:'Values April',
          data:[20,40],
          backgroundColor:'orange',
          borderColor:'orange',
          fill:false,
          order:0
         },
         {
          label:'Values March',
          data:[37,20,40,],
          backgroundColor:'	#FFC0CB',
          borderColor:'	#FFC0CB',
          tension:0.5,
          fill:false,
          order:1
         },
         {
          data:[40,20,0,-20,-40,-60,-40,-20,],
          backgroundColor:'	orange',
          borderColor:'	orange',
          tension:0.4,
          fill:false
         },
         {
          data:[40,30,40],
          backgroundColor:'	#FFC0CB',
          borderColor:'	#FFC0CB',
          tension:0.4,
          fill:false
         },
         {
          data:[40,20,0,20,40],
          backgroundColor:'orange',
          borderColor:'	orange',
          tension:0.2,
          fill:false
         }
        ]
      },
      options:{
        // plugins: {
        //   title: {
        //       display: true,
        //       text: 'Line Chart'
        //   },
        //   },
        //   legend: {
        //     position: "top",
        //     align: "start"
        //   },
        //   responsive: false,
        //   scales: {
        //     yA: [{ 
        //       ticks: {
        //         padding: 20,
        //         precision: 0,
        //       }
        //       }],
  
        //   },
      }

    })
  }

}
