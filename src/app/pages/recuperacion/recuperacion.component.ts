import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user.interface';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.component.html',
  styleUrls: ['./recuperacion.component.css']
})
export class RecuperacionComponent implements OnInit {

  hide = true;

  constructor(private router: Router, private authService: AuthService) { }
  private user: UserInterface = {
    username: '',
    password: ''
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

          } else if (Object.is(data.username, 'admin')) {
            this.router.navigate(['pantallaNOhome']);
          } else {
            this.router.navigate(['pantallahome']);
          }
        }, error => console.log(error));
  }
}