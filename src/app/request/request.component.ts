
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {Component, OnInit} from '@angular/core';
import {Authorized} from './authorized';


@Component({
  selector: '',
  templateUrl: './request.component.html',
  styleUrls: []})

export class RequestComponent implements OnInit{

  user: Authorized;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('//localhost:8080/users').subscribe((data: Authorized) =>  this.user = data);
  }

}
