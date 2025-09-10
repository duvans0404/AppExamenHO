import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HoSubjectService } from '../../../services/ho-subject.service';

@Component({
  selector: 'app-ho-subject-create',
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './ho-subject-create.html',
  styleUrl: './ho-subject-create.css'
})
export class HoSubjectCreate implements OnInit {
  form: FormGroup;

  statusOptions = [
    { label: 'Active', value: 'ACTIVE' },
    { label: 'Inactive', value: 'INACTIVE' }
  ];

  gradeOptions = [
    { label: 'Tenth Grade', value: 'Tenth Grade' },
    { label: 'Eleventh Grade', value: 'Eleventh Grade' },
    { label: 'Twelfth Grade', value: 'Twelfth Grade' }
  ];

  constructor(
    private fb: FormBuilder,
    private subjectService: HoSubjectService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      status: ['ACTIVE', Validators.required],
      grade: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Component initialization
  }

  submit(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      this.subjectService.addSubject(formData);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Subject created successfully'
      });
      
      setTimeout(() => {
        this.router.navigate(['/subjects']);
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
    this.router.navigate(['/subjects']);
  }
}