import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoHeader } from './ho-header';

describe('HoHeader', () => {
  let component: HoHeader;
  let fixture: ComponentFixture<HoHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
