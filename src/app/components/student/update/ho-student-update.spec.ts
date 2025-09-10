import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoStudentUpdate } from './ho-student-update';

describe('HoStudentUpdate', () => {
  let component: HoStudentUpdate;
  let fixture: ComponentFixture<HoStudentUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoStudentUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoStudentUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
