import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../generator.service';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent implements OnInit {

  allUser:any=[];

  constructor(private gs:GeneratorService) { }

  ngOnInit(): void {
    this.gs.getUser().subscribe((res:any)=>{
       this.allUser=res;
       console.log("alluser",this.allUser);
       
    })
  }

}
