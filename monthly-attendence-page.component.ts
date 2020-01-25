import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attservice.service';
import { MatSelectModule } from '@angular/material/select';
import * as $ from "jquery";
import { AttArray } from '../Attendance';

export interface Months {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-monthly-attendence-page',
  templateUrl: './monthly-attendence-page.component.html',
  styleUrls: ['./monthly-attendence-page.component.css']
})
export class MonthlyAttendencePageComponent implements OnInit {

  public attarray=[];
  public myId;
  public Month: Months[] = [
    {value: 1, viewValue: 'Jan'},
    {value: 2, viewValue: 'Feb'},
    {value: 3, viewValue: 'Mar'},
    {value: 4, viewValue: 'Apr'},
    {value: 5, viewValue: 'May'},
    {value: 6, viewValue: 'June'},
    {value: 7, viewValue: 'July'},
    {value: 8, viewValue: 'Aug'},
    {value: 9, viewValue: 'Sept'},
    {value: 10, viewValue: 'Oct'},
    {value: 11, viewValue: 'Nov'},
    {value: 12, viewValue: 'Dec'}
  ];
  constructor(private sel:MatSelectModule,private ser:AttendanceService) {
    this.myId=localStorage.getItem('student_id');
   }

  async ngOnInit() {
    var data = await  this.ser.getAttendance().toPromise();
      //console.log(1,data);
      for(var i=0;i< data.length;i++)
       {
        if(data[i].id==this.myId)
          {
           this.attarray=data[i].attArr;
           break;
          }
       }   
     console.log(this.attarray);
        // console.log("updating the attendence into table")
        // var markup = "<tr><td>"+data[0].attArr[0].date+"</td><td>" +data[0].attArr[0].First_Punch+ "</td><td>" +data[0].attArr[0].Second_Punch+ "</td><td>"+data[0].attArr[0].Third_Punch+"</td><td>"+data[0].attArr[0].Fourth_Punch+"</td><td>"+data[0].attArr[0].Present_Absent+"</td></tr>";
        // var flag:boolean =  $("#attendence_tables_tbody").append(markup);
        //  console.log(flag);
   //console.log(2,this.attarray);  
    // var att_data='';
    // $.each(data,function(key,value){
    //   console.log("1.data",data);
    //   console.log("2.value : Date :",data[0].attArr[0].date,"first punch",data[0].attArr[0].First_Punch,"@nd punch",data[0].attArr[0].Third_Punch,"3rd Punch",data[0].attArr[0].Fourth_Punch);
    //   att_data+='<tr>';
    //   att_data+= '<td>'+data[0].attArr[0].date+'</td>';
    //   att_data+= '<td>'+data[0].attArr[0].First_Punch+'</td>';
    //   att_data+= '<td>'+data[0].attArr[0].Second_Punch+'</td>';
    //   att_data+= '<td>'+data[0].attArr[0].Third_Punch+'</td>';
    //   att_data+= '<td>'+data[0].attArr[0].Fourth_Punch+'</td>';
    //   att_data+='</tr>';
    // });
    // $('#attendence_tables').append(att_data);

  }
  

}
