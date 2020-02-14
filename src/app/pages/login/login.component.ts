import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user.interface';
import { AppComponent } from '../../app.component';
import { app } from 'firebase';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor(private router: Router, private authService: AuthService, private app: AppComponent) { }
  private user: UserInterface = {
    username : '',
    password : ''
  };
  private error: string;

  ngOnInit() {
  }

  onLoginUser() {
      this.authService.loginuser(this.user.username, this.user.password)
      .subscribe(
        data => {
          this.authService.setUser(data);
          if (!data || data == null) {
           alert('Credenciales Incorrectas');
          } else
           if (Object.is(data.username, 'admin')) {
             this.app.mostrar = true;
             this.router.navigate(['pantallaNOhome']);
          } else {
            this.app.mostrar = true;
            this.router.navigate(['pantallahome']);
          }
         }, error => console.log(error) );
  }
  }
