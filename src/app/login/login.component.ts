import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  username: string="";
  password: string="";

  constructor(public authservice: AuthService, public router: Router) {}

  login() {
    const user = { username: this.username, password: this.password };
    this.authservice.loginClave(user).subscribe(
      data => {
        console.log(data);
        
        //this.userService.setToken(data.token);
        this.router.navigateByUrl("/");
      },
      error => {
        console.log(error);
      }
    );
    console.log(user);    
  }

}
