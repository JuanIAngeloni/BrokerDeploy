import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../Interfaces/usuario';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://argbrokerapiappservice.azurewebsites.net/api/Usuario/usuario/login';
  private apiUrlDineroByUser = 'https://argbrokerapiappservice.azurewebsites.net/api/Cliente/dineroByClient';
  private usuarioLogeadoSubject = new BehaviorSubject<Usuario | null>(null);

  constructor(private http: HttpClient) { }

  login(loginData: any) {
    return this.http.post(this.apiUrl, loginData).pipe(
      map((response: any) => {
        return {
          idUsuario : response.idUsuario, 
          nombre: response.nombre,
          apellido: response.apellido,
          dni: response.dni,
          correo: response.correo,
          nacimiento: response.nacimiento,
          contraseña: response.contraseña,
          telefono: response.telefono
        };
      }),
      tap((usuario: Usuario) => {
        this.usuarioLogeadoSubject.next(usuario);
      })
    );
  }
  getUserLogeadoId(){
    if(this.usuarioLogeadoSubject.value !=null){
   return this.usuarioLogeadoSubject.value.idUsuario;
    }
    return 0
  }
  get usuarioLogeado$() {
    return this.usuarioLogeadoSubject.asObservable();
  }
  getDineroDelUsuario(){
    const url = `${this.apiUrlDineroByUser}/${this.getUserLogeadoId()}`;
    return this.http.get(url);

    
}
  
  limpiarUsuarioLogeado() {
    this.usuarioLogeadoSubject.next(null);
  }
}
