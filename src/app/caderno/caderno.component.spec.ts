import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadernoComponent } from './caderno.component';

describe('CadernoComponent', () => {
  let component: CadernoComponent;
  let fixture: ComponentFixture<CadernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadernoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
