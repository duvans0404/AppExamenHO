import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoGradeDelete } from './ho-grade-delete';

describe('HoGradeDelete', () => {
  let component: HoGradeDelete;
  let fixture: ComponentFixture<HoGradeDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoGradeDelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoGradeDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
