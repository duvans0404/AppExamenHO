import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoStudentCreate } from './ho-student-create';

describe('HoStudentCreate', () => {
  let component: HoStudentCreate;
  let fixture: ComponentFixture<HoStudentCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoStudentCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoStudentCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});