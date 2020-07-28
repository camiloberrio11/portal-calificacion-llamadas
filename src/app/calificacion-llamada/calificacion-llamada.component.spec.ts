import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionLlamadaComponent } from './calificacion-llamada.component';

describe('CalificacionLlamadaComponent', () => {
  let component: CalificacionLlamadaComponent;
  let fixture: ComponentFixture<CalificacionLlamadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionLlamadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionLlamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
