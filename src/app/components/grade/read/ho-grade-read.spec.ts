import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoGradeRead } from './ho-grade-read';

describe('HoGradeRead', () => {
  let component: HoGradeRead;
  let fixture: ComponentFixture<HoGradeRead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoGradeRead]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoGradeRead);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
