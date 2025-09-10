import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoSidebar } from './ho-sidebar';

describe('HoSidebar', () => {
  let component: HoSidebar;
  let fixture: ComponentFixture<HoSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
