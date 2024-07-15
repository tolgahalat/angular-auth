import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private http: HttpClient) {
  }
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(),
      'password': new FormControl()
    })
  }

  onSubmit() {
    console.log(this.loginForm.value);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.loginForm.value.username + ':' + this.loginForm.value.password)
      })
    };

    this.http.post('http://localhost:8080/auth/welcome', httpOptions).subscribe(x => {
      console.log(x);
    });
  }

}
