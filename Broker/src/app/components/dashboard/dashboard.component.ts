import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import jsonStock from "./jsonStocks/23-08-23.json";
import { DashboardService } from '../../services/dashboard.service';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/Interfaces/usuario';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {




    listCompras: Compra[] = []
    availableFunds: number = 0;
    totalFunds: number = 0;
    dailyGains: number = 0;
    isMobile: boolean = false;

    dineroDisponible: string = "";
    dineroDisponibleString: string = ""
    dineroDisponibloFloat: number = 0;


    mostrarMsgError: boolean = false;
    msgError: string = "";


    //Traerme el saldo del usuario y guardarlo en availableFunds y totalFunds. El valor 2000 es provisional.

    constructor(private dashbServ: DashboardService,
        private loginService: LoginService,
        private toastr: ToastrService) {

        this.TraerDineroDelCliente();
        this.traerCompras();
    }



    TraerDineroDelCliente() {

        this.loginService.getDineroDelUsuario().subscribe(
            (response) => {
                console.log("Respuesta exitosa", response);
                this.dineroDisponible = response.toString();
            },
            (error) => {

                this.mostrarMsgError = true;
                this.toastr.error(error.error, "error");
            }
        );
    }





    traerCompras() {
        this.dashbServ.GetComprasByID(this.loginService.getUserLogeadoId()).subscribe(
            (response: any) => {
                this.listCompras = response;
                this.listCompras.forEach((compra) => {
                    this.totalFunds += compra.precio;
                    console.log("precio", compra.precio);
                });
                // Convertir el dineroDisponible (string) a número
                this.dineroDisponibloFloat = parseFloat(this.dineroDisponible);
                // Sumar el totalFunds con dineroDisponibleFloat
                this.totalFunds += this.dineroDisponibloFloat;
                this.totalFunds.toFixed(2);
                console.log(this.dineroDisponible);
                console.log(this.totalFunds);
            },
            (error) => {
                console.log(error);
            }
        );
        this.checkScreenSize();
    }



    @HostListener("window:resize", ["$event"])
    onResize(event: any) {
        // Update the screen size whenever the window is resized
        this.checkScreenSize();
    }

    private checkScreenSize() {
        // Check the viewport width to determine if it's a mobile screen
        this.isMobile = window.innerWidth < 768;
    }
}


export class Compra {
    idCompra: number;
    simbolo: string;
    comision: number;
    cantidad: number;
    precio: number;
    fecha: Date;
    idclient: number;
}
