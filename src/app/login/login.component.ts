import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  user_name: any;
  user_password: any;

  login(){
    if (this.user_name === "student" && this.user_password == "stud123"){ // static credentials for student page
      this.router.navigate(['/stud-home']);
    }else if (this.user_name === "prof" && this.user_password == "prof123"){ // static credentials for professor's page
      this.router.navigate(['/prof-home']);
    }else if (this.user_name === "admin" && this.user_password == "admin123") { // static credentials for admin's page
      this.router.navigate(['/admin-home']);
    }
  }
}
