import { Component, OnInit } from '@angular/core';
import { CarouselModule, WavesModule ,MDBBootstrapModule } from 'angular-bootstrap-md';
import * as $ from "jquery";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  
  // images = [
  //     { img: "assets/cdackp1.jpg" }, //"src\assets\cdackp1.jpg"
  //     { img: "assets/cdackp3.jpg" },
  //     { img: "assets/cdackp4.jpg" }
  // ];
  // slideConfig = {  
  //   "slidesToShow": 3,  
  //   "slidesToScroll": 3,  
  //   "dots": true,  
  //   "infinite": true  
  // };  
  constructor(public carousel:CarouselModule,public wave:WavesModule,public mdb:MDBBootstrapModule) { }
  
  ngOnInit() {
    
  }

}
