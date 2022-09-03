import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  registerForm= this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(10),Validators.minLength(10)]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]],
    cpassword:['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]]
  })

  

  ngOnInit(): void {
  }

  register(){
    
  }


}
