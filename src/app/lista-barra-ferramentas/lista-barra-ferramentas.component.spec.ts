import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBarraFerramentasComponent } from './lista-barra-ferramentas.component';

describe('ListaBarraFerramentasComponent', () => {
  let component: ListaBarraFerramentasComponent;
  let fixture: ComponentFixture<ListaBarraFerramentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBarraFerramentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBarraFerramentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
