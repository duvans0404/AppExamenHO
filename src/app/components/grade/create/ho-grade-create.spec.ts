import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoGradeCreate } from './ho-grade-create';

describe('HoGradeCreate', () => {
  let component: HoGradeCreate;
  let fixture: ComponentFixture<HoGradeCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoGradeCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoGradeCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
