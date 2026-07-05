import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Funstuff } from './funstuff';

describe('Funstuff', () => {
  let component: Funstuff;
  let fixture: ComponentFixture<Funstuff>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Funstuff]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Funstuff);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
