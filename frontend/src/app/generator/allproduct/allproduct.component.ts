import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../generator.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

  getdata:any=[];

  constructor(private gs:GeneratorService) { }

  ngOnInit(): void {
     this.gs.getProduct().subscribe((res)=>{
      this.getdata=res;
     })
  }

}
