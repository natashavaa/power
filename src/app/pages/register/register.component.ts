import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user.interface';
import { AppComponent } from '../../app.component';
import { DataApiService } from '../../services/data-api.service';



export interface Especialidad {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  constructor( private router: Router, private authService: AuthService, private app: AppComponent, private dataApi: DataApiService) {

  }
  Cpassword: string;
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
  private userEncontrado: UserInterface = {
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

  selectedValue: string;
  step = 0;

  especialidades: Especialidad[] = [
    {value: 'o-O', viewValue: 'Odontologia'},
    {value: 'Or-1', viewValue: 'Ortodoncia'},
  ];

  onRegister(): void {
      if (Object.is(this.user.password, this.Cpassword)) {
        if (this.user.dni) {
          this.dataApi.getUserByDni(this.user.dni).subscribe((userE: UserInterface) => {
            this.userEncontrado = userE;
            if (!this.userEncontrado) {
              this.authService.registerUser(
                this.user.name,
                this.user.phone,
                this.user.password,
                this.user.dni,
                this.user.age,
                this.user.sex,
                this.user.mail,
                this.user.userType,
                this.user.username
              ).subscribe(user => {
                this.authService.setUser(user);
                let token = this.user.id;
                this.authService.setToken(token);
                this.app.mostrar = false;
                alert('El usuario doctor ha sido agregado correctamente.');
                this.router.navigate(['accesodenegado']);
               } );
            } else {
             alert('Cedula Registrada');
            }
         });

      }
      } else {
        alert('contraseñas no coinciden');
      }
      }

  guardar(formulario: NgForm) {
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  home(): void {
    this.router.navigate(['pantallahome']);
}
}
