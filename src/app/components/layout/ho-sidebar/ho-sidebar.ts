import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HoStudentService } from '../../../services/ho-student.service';
import { HoGradeService } from '../../../services/ho-grade.service';
import { HoSubjectService } from '../../../services/ho-subject.service';
import { HoStudentI } from '../../../models/ho-student.model';
import { HoGradeI } from '../../../models/ho-grade.model';
import { HoSubjectI } from '../../../models/ho-subject.model';

@Component({
  selector: 'app-ho-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './ho-sidebar.html',
  styleUrl: './ho-sidebar.css'
})
export class HoSidebar implements OnInit {
  studentsCount = 0;
  gradesCount = 0;
  subjectsCount = 0;

  constructor(
    private studentService: HoStudentService,
    private gradeService: HoGradeService,
    private subjectService: HoSubjectService
  ) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((students: HoStudentI[]) => {
      this.studentsCount = students.length;
    });

    this.gradeService.getGrades().subscribe((grades: HoGradeI[]) => {
      this.gradesCount = grades.length;
    });

    this.subjectService.getSubjects().subscribe((subjects: HoSubjectI[]) => {
      this.subjectsCount = subjects.length;
    });
  }
}
