import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaDniComponent } from './persona-dni.component';

describe('PersonaDniComponent', () => {
  let component: PersonaDniComponent;
  let fixture: ComponentFixture<PersonaDniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaDniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaDniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
