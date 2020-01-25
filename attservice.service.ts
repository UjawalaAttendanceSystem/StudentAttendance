import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentLogin, StudentDetails, AttArray } from './Attendance';
declare const myFun:any;
@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  
  private _url1:string ="/assets/data/studentlogin.json";
  private _url2:string ="/assets/data/studentdetails.json";
  private _url3:string ="/assets/data/attendanceArr.json";

  constructor(private http:HttpClient) { }

  logincheckser():Observable<any>{
    
      return this.http.get(this._url1);
  }

  getStudentDetails():Observable<StudentDetails[]>
  {
    return this.http.get<StudentDetails[]>(this._url2);
  }

 getAttendance():Observable<AttArray[]>
 {
   return this.http.get<AttArray[]>(this._url3);
 }
}
