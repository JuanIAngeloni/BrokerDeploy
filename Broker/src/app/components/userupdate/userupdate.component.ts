import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service'; // Importa el servicio

@Component({
  selector: 'app-register',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.scss']
})
export class UserupdateComponent {
  mostrarMsgError: boolean = false;
  msgError: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registerService: RegisterService 
  ) {}

  registerForm = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    correo: ['', [Validators.required, Validators.email]],
    contraseña: ['', [Validators.required, Validators.minLength(6)]],
    telefono: [''] // Valor por defecto para el campo de teléfono
  });

  submitForm() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;

      this.registerService.registerUser(formData).subscribe(
        (response) => {

          this.router.navigate(['/login']);

        },
        (error) => {
          this.mostrarMsgError = true;
          this.msgError = 'Error al registrar: ' + error.message;
        }
      );
    }
  }
}
