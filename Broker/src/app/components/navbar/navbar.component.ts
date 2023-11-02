import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  mostrarBotones: boolean = true;
  usuarioLogeadoSubscription: Subscription;

  constructor(private router: Router,private loginService: LoginService) {
    this.usuarioLogeadoSubscription = this.loginService.usuarioLogeado$.subscribe((usuario) => {
      this.mostrarBotones = !!usuario;
    });
  }

  cerrarSesion() {
    // Limpia la información del usuario logeado
    this.loginService.limpiarUsuarioLogeado();

    // Redirige al usuario a la pantalla de inicio de sesión
    this.router.navigate(['/login']);
  }
  ngOnDestroy() {
    this.usuarioLogeadoSubscription.unsubscribe();
  }
}
