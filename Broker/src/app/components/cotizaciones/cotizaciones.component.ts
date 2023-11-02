import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.scss']
})
export class CotizacionesComponent implements OnInit {

  datos: any; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/json/14-06-23.json').subscribe((data) => {
      this.datos = data;
    });
  }
}
