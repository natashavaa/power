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
  mostrar: Boolean;
  constructor( public infoPaginaService: InfoPaginaService, private authService: AuthService) {

  }

  mostrarHF(): boolean {
      this.user2 = this.authService.getCurrentUser();
      if (!this.user2.id) {
        return false;
      } else {
        return true;
      }
  }

  getLogin() {

    this.user = this.authService.getCurrentUser();
    if(this.user){
      console.log(this.user);
    }
  }

  ngOnInit(): void {
    this.getLogin();
  }
}
