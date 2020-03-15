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
    password: '',
    mail: '',
  };
  private error: string;

  ngOnInit() {
  }

  onRecuperacion() {
    this.authService.Recuperacion(this.user.mail)
      .subscribe(
        data => {
          if (!data || data == null) {

            alert('Correo No encontrado');

          } else if (data) {
            alert('Revise su correo');
            this.router.navigate(['']);
          }
        }, error => console.log(error));
  }
}
