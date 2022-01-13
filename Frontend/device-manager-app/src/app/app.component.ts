import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'device-manager-app';
  devices: any;
  logInSuccess = false;
  constructor() { }
  ngOnInit() {
  }

}
