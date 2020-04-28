import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'gotam'
  password = ''
  isValidLogin = false;
  errorMessage ='Invalid User creditial';
  constructor(private router: Router) { }

  ngOnInit() {

  }

  handleLogin() {

    if (this.username === 'sunil' && this.password === 'sunil') {
      this.isValidLogin = false;
      this.router.navigate(['/welcome',this.username]);
      
    }
    else {
      this.isValidLogin = true;
    
    }

    // console.log(this.username);
    // console.log(this.password);
  }

}
