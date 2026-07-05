import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumRandomizer } from './album-randomizer';

describe('AlbumRandomizer', () => {
  let component: AlbumRandomizer;
  let fixture: ComponentFixture<AlbumRandomizer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumRandomizer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumRandomizer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
