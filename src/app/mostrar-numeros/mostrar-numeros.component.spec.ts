import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarNumerosComponent } from './mostrar-numeros.component';

describe('MostrarNumerosComponent', () => {
  let component: MostrarNumerosComponent;
  let fixture: ComponentFixture<MostrarNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarNumerosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
