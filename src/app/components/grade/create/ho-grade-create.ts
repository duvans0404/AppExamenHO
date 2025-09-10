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
import { HoGradeService } from '../../../services/ho-grade.service';

@Component({
  selector: 'app-ho-grade-create',
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
  templateUrl: './ho-grade-create.html',
  styleUrl: './ho-grade-create.css'
})
export class HoGradeCreate implements OnInit {
  form: FormGroup;

  statusOptions = [
    { label: 'Active', value: 'ACTIVE' },
    { label: 'Inactive', value: 'INACTIVE' }
  ];

  constructor(
    private fb: FormBuilder,
    private gradeService: HoGradeService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      number: [1, [Validators.required, Validators.min(1), Validators.max(12)]],
      status: ['ACTIVE', Validators.required]
    });
  }

  ngOnInit(): void {
    // Component initialization
  }

  submit(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      this.gradeService.addGrade(formData);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Grade created successfully'
      });
      
      setTimeout(() => {
        this.router.navigate(['/grades']);
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
    this.router.navigate(['/grades']);
  }
}
