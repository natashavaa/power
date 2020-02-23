import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-noacceso',
  templateUrl: './pantalla-noacceso.component.html',
  styleUrls: ['./pantalla-noacceso.component.css']
})
export class PantallaNOaccesoComponent implements OnInit {

  constructor(private auth: AuthService, private app: AppComponent,private router: Router) { }

  ngOnInit() {
    this.app.mostrar = false;
  }
  logoutUser(): void {
    this.auth.logoutUser();
    this.router.navigate(['login']);
 }
}
