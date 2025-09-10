import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoStudentDelete } from './ho-student-delete';

describe('HoStudentDelete', () => {
  let component: HoStudentDelete;
  let fixture: ComponentFixture<HoStudentDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoStudentDelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoStudentDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});