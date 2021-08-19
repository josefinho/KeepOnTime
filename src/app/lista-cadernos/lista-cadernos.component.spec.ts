import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCadernosComponent } from './lista-cadernos.component';

describe('ListaCadernosComponent', () => {
  let component: ListaCadernosComponent;
  let fixture: ComponentFixture<ListaCadernosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCadernosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCadernosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
