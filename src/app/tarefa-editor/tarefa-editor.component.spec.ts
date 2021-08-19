import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaEditorComponent } from './tarefa-editor.component';

describe('TarefaEditorComponent', () => {
  let component: TarefaEditorComponent;
  let fixture: ComponentFixture<TarefaEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefaEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
