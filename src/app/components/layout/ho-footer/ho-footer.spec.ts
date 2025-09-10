import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoFooter } from './ho-footer';

describe('HoFooter', () => {
  let component: HoFooter;
  let fixture: ComponentFixture<HoFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
