import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-termscondition',
  templateUrl: './termscondition.component.html',
  styleUrls: ['./termscondition.component.css']
})
export class TermsconditionComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

}
