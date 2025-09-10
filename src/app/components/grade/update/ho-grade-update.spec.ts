import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoGradeUpdate } from './ho-grade-update';

describe('HoGradeUpdate', () => {
  let component: HoGradeUpdate;
  let fixture: ComponentFixture<HoGradeUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoGradeUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoGradeUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
