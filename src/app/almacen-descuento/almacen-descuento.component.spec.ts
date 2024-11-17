import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenDescuentoComponent } from './almacen-descuento.component';

describe('AlmacenDescuentoComponent', () => {
  let component: AlmacenDescuentoComponent;
  let fixture: ComponentFixture<AlmacenDescuentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlmacenDescuentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmacenDescuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
