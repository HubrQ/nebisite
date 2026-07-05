import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personalcard } from './personalcard';

describe('Personalcard', () => {
  let component: Personalcard;
  let fixture: ComponentFixture<Personalcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personalcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Personalcard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
