import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']})

export class AppComponent {

  user: any = {};

  constructor(private http: HttpClient) {}
  submit(user){
    console.log(user);
    console.log(this.user);
    const body = { username: user.name, password: user.password };
    this.http.post('http://localhost:8080/request', body).subscribe(
    );
  }
}
