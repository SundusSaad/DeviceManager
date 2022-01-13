import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  users: any;
  constructor(private router:Router, private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.getUsers();
  }

  checkoutForm = this.formBuilder.group({
    name: '',
    password: ''
  });

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/employee').subscribe(response =>{
      this.users = response;
    }, error =>{
      console.log(error);
    })
  }
 
  login()
  {

    this.router.navigateByUrl('testdevice');
  }

}
