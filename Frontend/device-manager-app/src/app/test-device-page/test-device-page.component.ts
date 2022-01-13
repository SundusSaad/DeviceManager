import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-device-page',
  templateUrl: './test-device-page.component.html',
  styleUrls: ['./test-device-page.component.css']
})
export class TestDevicePageComponent implements OnInit {
  

  constructor(private http: HttpClient) { }
  devices: any;
  mitarbeiter = "bob";
  showDetials = false;
  selectedDevice: any;
  selectedTask: any;
  ngOnInit(){
    this.getDevices();
    
  }


  getDevices(){
    this.http.get('https://localhost:5001/api/device').subscribe(response =>{
      this.devices = response;
    }, error =>{
      console.log(error);
    })
  }

  onSaveClick(){

  }

  onRentClick(){
    this.showDetials = true;
  }

}
