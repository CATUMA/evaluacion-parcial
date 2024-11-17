import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaPrestamosComponent } from './empresa-prestamos.component';

describe('EmpresaPrestamosComponent', () => {
  let component: EmpresaPrestamosComponent;
  let fixture: ComponentFixture<EmpresaPrestamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpresaPrestamosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresaPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
