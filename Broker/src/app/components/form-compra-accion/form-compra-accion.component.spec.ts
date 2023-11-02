import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompraAccionComponent } from './form-compra-accion.component';

describe('FormCompraAccionComponent', () => {
  let component: FormCompraAccionComponent;
  let fixture: ComponentFixture<FormCompraAccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCompraAccionComponent]
    });
    fixture = TestBed.createComponent(FormCompraAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
