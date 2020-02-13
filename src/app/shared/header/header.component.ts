import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _servicio: InfoPaginaService,
               private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  buscarProducto( termino: string ) {

    if ( termino.length < 1 ) {
      return;
    }

    this.router.navigate(['/search', termino]);

  }
  logoutUser(): void {
     this.authService.logoutUser();
     this.router.navigate['login'];
  }

}
