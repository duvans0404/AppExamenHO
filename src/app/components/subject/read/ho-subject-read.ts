import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { MessageService } from 'primeng/api';
import { HoSubjectService } from '../../../services/ho-subject.service';
import { HoSubjectI } from '../../../models/ho-subject.model';

@Component({
  selector: 'app-ho-subject-read',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    ToastModule,
    TooltipModule
  ],
  providers: [MessageService],
  templateUrl: './ho-subject-read.html',
  styleUrl: './ho-subject-read.css'
})
export class HoSubjectRead implements OnInit {
  subjects: HoSubjectI[] = [];
  filteredSubjects: HoSubjectI[] = [];
  searchTerm = '';
  statusFilter = '';
  gradeFilter = '';
  showFilters = false;

  constructor(
    private subjectService: HoSubjectService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe(subjects => {
      this.subjects = subjects;
      this.filteredSubjects = subjects;
    });
  }

  filterSubjects(): void {
    this.filteredSubjects = this.subjects.filter(subject => {
      const matchesSearch = !this.searchTerm || 
        subject.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        subject.grade.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = !this.statusFilter || subject.status === this.statusFilter;
      const matchesGrade = !this.gradeFilter || subject.grade === this.gradeFilter;
      
      return matchesSearch && matchesStatus && matchesGrade;
    });
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.statusFilter = '';
    this.gradeFilter = '';
    this.filteredSubjects = this.subjects;
  }

  getStatusSeverity(status: string): string {
    return status === 'ACTIVE' ? 'success' : 'danger';
  }

  getUniqueGrades(): string[] {
    return [...new Set(this.subjects.map(s => s.grade))];
  }

  getGradeOptions(): any[] {
    return [
      { label: 'All', value: '' },
      ...this.getUniqueGrades().map(grade => ({ label: grade, value: grade }))
    ];
  }
}