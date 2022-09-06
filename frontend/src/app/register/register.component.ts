import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private ds: UserService, private router: Router) { }

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.email]],
    // phone:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(10),Validators.minLength(10)]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z 0-9]*')]],
    // cpassword:['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]]
  })



  ngOnInit(): void {
  }

  // data={
  //   username:'',
  //   email:'',
  //   password:''
  // }

  register() {
    var username = this.registerForm.value.username
    var email = this.registerForm.value.email
    var password = this.registerForm.value.password
    // var name = this.registerForm.value.uname
    // var name = this.registerForm.value.uname
    if (this.registerForm.valid) {
      this.ds.submit(username, email, password).subscribe((result:any) => {
        if(result){
          alert("register sucess")
          this.router.navigateByUrl("/login")
        }
      },
      result => {
        alert("invalid password")
      }
      )
    }

    else {
        alert("invalid form")
      }
    }


  }
