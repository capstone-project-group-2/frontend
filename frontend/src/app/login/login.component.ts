import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  })

  constructor(private fb: FormBuilder, private http: HttpClient, private ds: UserService) { }

  ngOnInit(): void {
  }

  login() {
    var username = this.loginForm.value.username;
    var password = this.loginForm.value.password;
    if (this.loginForm.valid) {
      this.ds.login(username, password).subscribe((result: any) => {
        if (result.status == "success") {
          alert("login succcess");
        }
        else{
          alert("invalid password")
        }
      },
      // (result) => {
      //   alert("invalid password")
      // }
      )

    } else {
      alert("invalid form")
    }
  }
}
