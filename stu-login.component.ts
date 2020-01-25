import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService } from '../attservice.service';
import { StudentLogin } from '../Attendance';




@Component({
  selector: 'app-stu-login',
  templateUrl: './stu-login.component.html',
  styleUrls: ['./stu-login.component.css']
})
export class StuLoginComponent implements OnInit {

  public studentloginarr=[];
  public stuId:number;
  public pass:string;
  public stuObj:StudentLogin;
  public check:boolean;
  public flag:boolean;
  public loginmsg:string;
  
   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
     this.ser.logincheckser().subscribe(data =>this.studentloginarr=data);
    
    
   }
  constructor(private router:Router, private ser:AttendanceService) { 
       //this.stuObj = new StudentLogin(this.stuId,this.pass);
  }
  
  logincheck(url:string)
   {
    this.stuObj = new StudentLogin({ Num: this.stuId, pass: this.pass });
    console.log(this.stuObj.id);
      console.log(this.stuObj.password)
      console.log(this.studentloginarr)
    for(var i=0;i<this.studentloginarr.length;i++)
    {
      if(this.studentloginarr[i].id==this.stuObj.id)
      {
        console.log("user name matched");
          if(this.studentloginarr[i].password == this.stuObj.password)
           { 
             this.check=true;
             let idkey = 'student_id';
             console.log( String(this.stuObj.id));
             localStorage.setItem(idkey, String(this.stuObj.id));
           }
           else{
             console.log("Im in password failed to match section");
              this.check=false;
              this.flag=true;
            } 
      }
    }
    //this.check? alert("login successful"):alert("login unsuccessful");
    
    if(this.check)
      {
        this.router.navigate([url]).then( (e) => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
          });
      }
    else{
           if(this.flag)
               this.loginmsg="Incorrect Password";
           else
            this.loginmsg="Invalid Account";  
     }
  }
}
