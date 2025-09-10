import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoSubjectRead } from './ho-subject-read';

describe('HoSubjectRead', () => {
  let component: HoSubjectRead;
  let fixture: ComponentFixture<HoSubjectRead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoSubjectRead]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoSubjectRead);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
import { HoSubjectRead } from './ho-subject-read';

describe('HoSubjectRead', () => {
  let component: HoSubjectRead;
  let fixture: ComponentFixture<HoSubjectRead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoSubjectRead]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoSubjectRead);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
