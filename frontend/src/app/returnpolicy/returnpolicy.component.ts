import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-returnpolicy',
  templateUrl: './returnpolicy.component.html',
  styleUrls: ['./returnpolicy.component.css']
})
export class ReturnpolicyComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

}
