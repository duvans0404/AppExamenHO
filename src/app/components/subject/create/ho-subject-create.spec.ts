import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoSubjectCreate } from './ho-subject-create';

describe('HoSubjectCreate', () => {
  let component: HoSubjectCreate;
  let fixture: ComponentFixture<HoSubjectCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoSubjectCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoSubjectCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});