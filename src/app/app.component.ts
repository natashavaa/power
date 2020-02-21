import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { AuthService } from './services/auth.service';
import { UserInterface } from './models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private user: UserInterface = {
    id: '',
    name: '',
    dni: '',
    age: 0,
    sex: '',
    mail: '',
    password: '',
    userType: '',
    username: '',
    phone: ''
  };
  private user2: UserInterface = {
    id: '',
    name: '',
    dni: '',
    age: 0,
    sex: '',
    mail: '',
    password: '',
    userType: '',
    username: '',
    phone: ''
  };
  mostrar: boolean ;
  constructor( public infoPaginaService: InfoPaginaService, private authService: AuthService) {

  }

  mostrarHF(): void {
      this.user2 = this.authService.getCurrentUser();
      this.mostrar =  true;
      this.ngOnInit();
  }

  getLogin() {

    this.user = this.authService.getCurrentUser();
    if (this.user) {
      console.log(this.user);
    }
  }

  ngOnInit(): void {
    this.getLogin();
    this.mostrarHF();
  }
}
