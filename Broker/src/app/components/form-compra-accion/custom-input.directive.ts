import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'div[CustomInput]'
})
export class CustomInputDirective {


  constructor(private readonly elRef: ElementRef, private readonly renderer: Renderer2) { }

  @HostListener('click', ['$event'])
  onChangeInput(event: Event): void {
    const cantidadLabel = this.elRef.nativeElement.querySelector('#cantidadLabel') as HTMLInputElement;
    const montoLabel = this.elRef.nativeElement.querySelector('#montoLabel') as HTMLInputElement;
    const cantidadInput = this.elRef.nativeElement.querySelector('#cantidadInput') as HTMLInputElement;
    const montoInput = this.elRef.nativeElement.querySelector('#montoInput') as HTMLInputElement;

    if (cantidadLabel && montoLabel && cantidadInput && montoInput) {
      if (cantidadLabel.checked) {
        // Habilitar cantidadInput y deshabilitar montoInput
        this.renderer.setProperty(cantidadInput, 'disabled', false);
        this.renderer.setProperty(montoInput, 'disabled', true);
      } else if (montoLabel.checked) {
        // Habilitar montoInput y deshabilitar cantidadInput
        this.renderer.setProperty(cantidadInput, 'disabled', true);
        this.renderer.setProperty(montoInput, 'disabled', false);
      }
    }

}
}










