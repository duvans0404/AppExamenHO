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
import { HoStudentService } from '../../../services/ho-student.service';
import { HoStudentI } from '../../../models/ho-student.model';

@Component({
  selector: 'app-ho-student-read',
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
  templateUrl: './ho-student-read.html',
  styleUrl: './ho-student-read.css'
})
export class HoStudentRead implements OnInit {
  students: HoStudentI[] = [];
  filteredStudents: HoStudentI[] = [];
  searchTerm = '';
  statusFilter = '';
  showFilters = false;

  constructor(
    private studentService: HoStudentService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
      this.filteredStudents = students;
    });
  }

  filterStudents(): void {
    this.filteredStudents = this.students.filter(student => {
      const matchesSearch = !this.searchTerm || 
        student.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        student.identification.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        student.phone.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = !this.statusFilter || student.status === this.statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.statusFilter = '';
    this.filteredStudents = this.students;
  }

  getStatusSeverity(status: string): string {
    return status === 'ACTIVE' ? 'success' : 'danger';
  }
}