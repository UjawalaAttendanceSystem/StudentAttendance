import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-attendence-page',
  templateUrl: './graph-attendence-page.component.html',
  styleUrls: ['./graph-attendence-page.component.css']
})
export class GraphAttendencePageComponent implements OnInit {
  
  public bardataset=[{data:[80,60,50],label:localStorage.getItem('student_id')}];
  public barlabels=["NOV","DEC","JAN"];
  public baroptions ={
    title:{
      text:"Bar Chart",
      display:true
    },
    scales:{
      yAxes:[{
        ticks:{
          endAtHundred:true,
          beginAtZero:true
        }
      }]
    },
    scaleShowVerticalLines:false,
    responsive:true
  };
  public barlegend=true;
  public barcharttype='bar';

  constructor() { }

  ngOnInit() {
    
  }

}

