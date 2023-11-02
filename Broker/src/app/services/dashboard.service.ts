import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'https://argbrokerapiappservice.azurewebsites.net/api/Compra/ComprasByClient'; // URL del endpoint de consulta de compras por cliente

  constructor(private http: HttpClient) {}

  // Método para realizar la solicitud de consulta de compras por cliente
  GetComprasByID(userId: number) {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url);
  }
}
