import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'div[CustomInput2]'
})
export class CustomInput2Directive {

  constructor(private readonly elRef: ElementRef, private readonly renderer: Renderer2) { }

  @HostListener('click', ['$event'])
  onChangeInput(event: Event): void {
    // Lógica de la segunda directiva
    const precioMercado = this.elRef.nativeElement.querySelector('#flexRadioDefault1')
    const precioLimite = this.elRef.nativeElement.querySelector('#flexRadioDefault2')
    const modalidadInput = this.elRef.nativeElement.querySelector('#modalidadInput')

    if (precioMercado.checked){
      this.renderer.setProperty(modalidadInput, 'disabled', true)
    }else{
    this.renderer.setProperty(modalidadInput,'disabled',false)
    }
  }
}