import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-todays-attendence-page',
  templateUrl: './todays-attendence-page.component.html',
  styleUrls: ['./todays-attendence-page.component.css']
})
export class TodaysAttendencePageComponent implements OnInit {
  
  public x;
  constructor() { }
  
  ngOnInit() {
  }
     fun1()
    {
        console.log(1,this.x,typeof(this.x));
    }
}
