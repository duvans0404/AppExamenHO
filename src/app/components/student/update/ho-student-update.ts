import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HoStudentService } from '../../../services/ho-student.service';
import { HoStudentI } from '../../../models/ho-student.model';

@Component({
  selector: 'app-ho-student-update',
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    InputNumberModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './ho-student-update.html',
  styleUrl: './ho-student-update.css'
})
export class HoStudentUpdate implements OnInit {
  form: FormGroup;
  studentId: number | null = null;
  student: HoStudentI | undefined;

  statusOptions = [
    { label: 'Active', value: 'ACTIVE' },
    { label: 'Inactive', value: 'INACTIVE' }
  ];

  constructor(
    private fb: FormBuilder,
    private studentService: HoStudentService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      identification: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      status: ['ACTIVE', Validators.required],
      birthDate: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]],
      grade: [10, [Validators.required, Validators.min(1), Validators.max(12)]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.studentId = +params['id'];
        this.loadStudent();
      }
    });
  }

  loadStudent(): void {
    if (this.studentId) {
      this.student = this.studentService.getStudentById(this.studentId);
      if (this.student) {
        this.form.patchValue(this.student);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Student not found'
        });
        this.router.navigate(['/students']);
      }
    }
  }

  submit(): void {
    if (this.form.valid && this.studentId) {
      const formData = this.form.value;
      const updatedStudent: HoStudentI = {
        id: this.studentId,
        ...formData,
        createdAt: this.student?.createdAt || new Date()
      };
      
      this.studentService.updateStudent(updatedStudent);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Student updated successfully'
      });
      
      setTimeout(() => {
        this.router.navigate(['/students']);
      }, 1000);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill in all required fields correctly'
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/students']);
  }
}
