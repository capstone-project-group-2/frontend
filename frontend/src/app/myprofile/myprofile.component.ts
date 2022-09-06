import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  loggedinuser:any
  constructor( private route:Router) { }

  ngOnInit(): void {
  }
  
  loggedin(){
    
  }

}
