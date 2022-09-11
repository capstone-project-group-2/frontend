import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneratorService } from '../generator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private gs:GeneratorService,private router:Router ) { }

  reportLogin = this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]]
  })

  ngOnInit(): void {
  }

  // log(){

  
  //   var username=this.reportLogin.value.username;
  //   var password=this.reportLogin.value.password;
    
  //   // if(this.reportLogin.valid){
      
  //   // }

  //   // this.router.navigateByUrl("/dash")

  // }

}
