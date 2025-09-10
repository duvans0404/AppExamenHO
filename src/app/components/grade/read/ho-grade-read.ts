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
import { HoGradeService } from '../../../services/ho-grade.service';
import { HoGradeI } from '../../../models/ho-grade.model';

@Component({
  selector: 'app-ho-grade-read',
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
  templateUrl: './ho-grade-read.html',
  styleUrl: './ho-grade-read.css'
})
export class HoGradeRead implements OnInit {
  grades: HoGradeI[] = [];
  filteredGrades: HoGradeI[] = [];
  searchTerm = '';
  statusFilter = '';
  showFilters = false;

  constructor(
    private gradeService: HoGradeService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.gradeService.getGrades().subscribe(grades => {
      this.grades = grades;
      this.filteredGrades = grades;
    });
  }

  filterGrades(): void {
    this.filteredGrades = this.grades.filter(grade => {
      const matchesSearch = !this.searchTerm || 
        grade.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        grade.number.toString().includes(this.searchTerm);
      
      const matchesStatus = !this.statusFilter || grade.status === this.statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.statusFilter = '';
    this.filteredGrades = this.grades;
  }

  getStatusSeverity(status: string): string {
    return status === 'ACTIVE' ? 'success' : 'danger';
  }
}
