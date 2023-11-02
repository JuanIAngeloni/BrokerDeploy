import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private apiUrl = 'https://argbrokerapiappservice.azurewebsites.net/api/Compra/registro-compra'; 

  constructor(private http: HttpClient) {}

  registreCompra(userData: any) {
    console.log("Service",userData)
    return this.http.post(this.apiUrl, userData);
  }
}