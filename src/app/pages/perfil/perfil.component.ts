import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../helpers/must-match.validator';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

editForm: FormGroup;
submitted = false;
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
constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService, private app: AppComponent) { }

ngOnInit() {
    this.app.mostrar = true;
    this.user = this.authService.getCurrentUser();
}

// convenience getter for easy access to form fields
onUpdate(): void {
  this.authService.updateUser(
    this.user.id,
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
    this.router.navigate(['pantallahome']);
   } );
  }

}
