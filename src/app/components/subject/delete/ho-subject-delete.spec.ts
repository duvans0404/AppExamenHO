import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoSubjectDelete } from './ho-subject-delete';

describe('HoSubjectDelete', () => {
  let component: HoSubjectDelete;
  let fixture: ComponentFixture<HoSubjectDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoSubjectDelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoSubjectDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});