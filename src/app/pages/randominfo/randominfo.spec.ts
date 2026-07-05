import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Randominfo } from './randominfo';

describe('Randominfo', () => {
  let component: Randominfo;
  let fixture: ComponentFixture<Randominfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Randominfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Randominfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
