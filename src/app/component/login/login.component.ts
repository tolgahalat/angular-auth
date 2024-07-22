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

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'Basic ' + btoa(this.loginForm.value.username + ':' + this.loginForm.value.password)
    //   })
    // };

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Test': this.loginForm.value.username,
    "tolga": this.loginForm.value.password,
          'Authorization': 'Basic ' + btoa(this.loginForm.value.username + ':' + this.loginForm.value.password)});
    let options = { headers: headers };

    this.http.post('http://localhost:8080/auth/admin/adminProfile', {}, options).subscribe(x => {
      console.log(x);
    });
  }

}
