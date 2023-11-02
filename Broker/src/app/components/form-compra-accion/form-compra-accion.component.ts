import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { EventListenerObject } from 'rxjs/internal/observable/fromEvent';
import { Puntas } from 'src/app/Interfaces/puntas';
import { Titulo } from 'src/app/Interfaces/titulo';
import { CompraDTO } from 'src/app/Interfaces/compra-dto';
import { CompraService } from 'src/app/services/compra.service';
import { DatePipe } from '@angular/common';
import { LoginService } from 'src/app/services/login.service';


import { ToastrService } from 'ngx-toastr';
import { empty } from 'rxjs';



@Component({
  selector: 'app-form-compra-accion',
  templateUrl: './form-compra-accion.component.html',
  styleUrls: ['./form-compra-accion.component.scss']
})
export class FormCompraAccionComponent implements OnInit {
  datos: any;
  puntas: Puntas = { cantidadCompra: 0, precioCompra: 0, precioVenta: 0, cantidadVenta: 0 };
  accionSelec: Titulo = { simbolo: "seleccionar", puntas: { cantidadCompra: 0, precioCompra: 0, precioVenta: 0, cantidadVenta: 0 }, ultimoPrecio: 0, variacionPorcentual: 0, apertura: 0, maximo: 0, minimo: 0, ultimoCierre: 0, volumen: 0, cantidadOperaciones: 0, fecha: "", tipoOpcion: null, precioEjercicio: null, fechaVencimiento: null, mercado: "", moneda: "", descripcion: "", plazo: "", laminaMinima: 0, lote: 0 };
  comisionEstablecida: number = 0.5;
  cantidadCompra: number = 0;
  compraPost: CompraDTO = { nombre: this.accionSelec.descripcion, simbolo:"simbolo vacio", comision: this.comisionEstablecida, cantidad: this.cantidadCompra, precio: this.accionSelec.ultimoPrecio, idCliente: 999314, fecha: "fechaDeHoy" }

  selectedSymbol: string = '0';


  monto: number = 0;
  precioFinalComision: number = 0;
  precioFinalCompra: number = 0;
  precioAccionSeleccionada: number = 0;

  compraForm: FormGroup;
  mostrarMsgError: boolean = false;
  msgError: string = "";

  constructor(
    private http: HttpClient,
    private compraService: CompraService,
    private datePipe: DatePipe,
    private loginService: LoginService,
    private toastr: ToastrService) {
  }
  ngOnInit(): void {
    this.http.get('assets/json/14-06-23.json').subscribe((data) => {
      this.datos = data;
    });
  }



  submitCompraForm() { // le va a faltar validaciones


    const fechaDeHoy = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

    if (fechaDeHoy) {
      this.compraPost.nombre = this.accionSelec.descripcion;
      if(this.accionSelec.simbolo =="seleccionar") //esta validacion no me gusta pero no la supe hacer con ts
      {this.toastr.info("Debe seleccionar un simbolo","error");}
      else
      {this.compraPost.simbolo = this.accionSelec.simbolo;}
     
      this.compraPost.comision = this.comisionEstablecida;

      if(this.cantidadCompra<=0)
      {this.toastr.info("Debe ingresar una cantidad","error");}
      else
      {this.compraPost.cantidad = this.cantidadCompra;}

      this.compraPost.precio = this.precioFinalComision;
      this.compraPost.idCliente = this.loginService.getUserLogeadoId();
      this.compraPost.fecha = fechaDeHoy;
    }


    this.compraService.registreCompra(this.compraPost).subscribe(
      (response) => {
        console.log("Respuesta exitosa", response);
      },
      (error) => {

        this.mostrarMsgError = true;
        this.toastr.error(error.error,"error");
      }
    );
  }
  miMetodo(event: EventListenerObject<Titulo[]>) {
    const selectedValue = event;
    for (const item of this.datos.titulos) {
      if (item === selectedValue) {
        this.accionSelec = item
        this.cantidadCompra = 0;
        this.precioFinalCompra = 0;
        return this.accionSelec;
      }
    }
    return this.accionSelec;
  }
  calcularPrecioFinal(cantidad: number) {
    this.precioFinalCompra = this.accionSelec.ultimoPrecio * cantidad;
    this.precioFinalComision = this.precioFinalCompra + ((this.precioFinalCompra / 100) * 0.5);
  }


}
