import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCochesComponent } from './formulario-coches.component';

describe('FormularioCochesComponent', () => {
  let component: FormularioCochesComponent;
  let fixture: ComponentFixture<FormularioCochesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioCochesComponent]
    });
    fixture = TestBed.createComponent(FormularioCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
