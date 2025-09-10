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
import { HoGradeService } from '../../../services/ho-grade.service';
import { HoGradeI } from '../../../models/ho-grade.model';

@Component({
  selector: 'app-ho-grade-update',
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
  templateUrl: './ho-grade-update.html',
  styleUrl: './ho-grade-update.css'
})
export class HoGradeUpdate implements OnInit {
  form: FormGroup;
  gradeId: number | null = null;
  grade: HoGradeI | undefined;

  statusOptions = [
    { label: 'Active', value: 'ACTIVE' },
    { label: 'Inactive', value: 'INACTIVE' }
  ];

  constructor(
    private fb: FormBuilder,
    private gradeService: HoGradeService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      number: [1, [Validators.required, Validators.min(1), Validators.max(12)]],
      status: ['ACTIVE', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.gradeId = +params['id'];
        this.loadGrade();
      }
    });
  }

  loadGrade(): void {
    if (this.gradeId) {
      this.grade = this.gradeService.getGradeById(this.gradeId);
      if (this.grade) {
        this.form.patchValue(this.grade);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Grade not found'
        });
        this.router.navigate(['/grades']);
      }
    }
  }

  submit(): void {
    if (this.form.valid && this.gradeId) {
      const formData = this.form.value;
      const updatedGrade: HoGradeI = {
        id: this.gradeId,
        ...formData,
        createdAt: this.grade?.createdAt || new Date()
      };
      
      this.gradeService.updateGrade(updatedGrade);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Grade updated successfully'
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
