import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCochesComponent } from './lista-coches.component';

describe('ListaCochesComponent', () => {
  let component: ListaCochesComponent;
  let fixture: ComponentFixture<ListaCochesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCochesComponent]
    });
    fixture = TestBed.createComponent(ListaCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
