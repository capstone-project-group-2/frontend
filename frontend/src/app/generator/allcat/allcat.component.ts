import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../generator.service';

@Component({
  selector: 'app-allcat',
  templateUrl: './allcat.component.html',
  styleUrls: ['./allcat.component.css']
})
export class AllcatComponent implements OnInit {

  getCategory=[];
  constructor(private gs:GeneratorService) { }

  ngOnInit(): void {
    this.gs.getCat().subscribe((res:any)=>{
      this.getCategory=res;
      console.log("cat",this.getCategory);
      
    })
  }

}
