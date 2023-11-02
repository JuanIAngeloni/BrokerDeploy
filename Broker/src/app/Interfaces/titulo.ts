import { Puntas } from "./puntas";

export class Titulo {
    simbolo: string;
    puntas: Puntas;
    ultimoPrecio: number;
    variacionPorcentual: number;
    apertura: number;
    maximo: number;
    minimo: number;
    ultimoCierre: number;
    volumen: number;
    cantidadOperaciones: number;
    fecha: string;
    tipoOpcion: string | null;
    precioEjercicio: number | null;
    fechaVencimiento: string | null;
    mercado: string;
    moneda: string;
    descripcion: string;
    plazo: string;
    laminaMinima: number;
    lote: number;
}
