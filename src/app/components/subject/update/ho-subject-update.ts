import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HoSubjectService } from '../../../services/ho-subject.service';
import { HoSubjectI } from '../../../models/ho-subject.model';

@Component({
  selector: 'app-ho-subject-update',
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
  templateUrl: './ho-subject-update.html',
  styleUrl: './ho-subject-update.css'
})
export class HoSubjectUpdate implements OnInit {
  form: FormGroup;
  subjectId: number | null = null;
  subject: HoSubjectI | undefined;

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
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      status: ['ACTIVE', Validators.required],
      grade: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.subjectId = +params['id'];
        this.loadSubject();
      }
    });
  }

  loadSubject(): void {
    if (this.subjectId) {
      this.subject = this.subjectService.getSubjectById(this.subjectId);
      if (this.subject) {
        this.form.patchValue(this.subject);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Subject not found'
        });
        this.router.navigate(['/subjects']);
      }
    }
  }

  submit(): void {
    if (this.form.valid && this.subjectId) {
      const formData = this.form.value;
      const updatedSubject: HoSubjectI = {
        id: this.subjectId,
        ...formData,
        createdAt: this.subject?.createdAt || new Date()
      };
      
      this.subjectService.updateSubject(updatedSubject);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Subject updated successfully'
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