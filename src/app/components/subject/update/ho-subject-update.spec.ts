import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoSubjectUpdate } from './ho-subject-update';

describe('HoSubjectUpdate', () => {
  let component: HoSubjectUpdate;
  let fixture: ComponentFixture<HoSubjectUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoSubjectUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoSubjectUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});