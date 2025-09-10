import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HoStudentService } from '../../../services/ho-student.service';

@Component({
  selector: 'app-ho-student-create',
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
  templateUrl: './ho-student-create.html',
  styleUrl: './ho-student-create.css'
})
export class HoStudentCreate implements OnInit {
  form: FormGroup;

  statusOptions = [
    { label: 'Active', value: 'ACTIVE' },
    { label: 'Inactive', value: 'INACTIVE' }
  ];

  constructor(
    private fb: FormBuilder,
    private studentService: HoStudentService,
    private messageService: MessageService,
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
    // Component initialization
  }

  submit(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      this.studentService.addStudent(formData);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Student created successfully'
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