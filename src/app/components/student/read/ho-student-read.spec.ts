import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoStudentRead } from './ho-student-read';

describe('HoStudentRead', () => {
  let component: HoStudentRead;
  let fixture: ComponentFixture<HoStudentRead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoStudentRead]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoStudentRead);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
