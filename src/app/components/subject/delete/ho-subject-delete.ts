import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HoSubjectService } from '../../../services/ho-subject.service';
import { HoSubjectI } from '../../../models/ho-subject.model';

@Component({
  selector: 'app-ho-subject-delete',
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CardModule,
    ConfirmDialogModule,
    ToastModule
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './ho-subject-delete.html',
  styleUrl: './ho-subject-delete.css'
})
export class HoSubjectDelete implements OnInit {
  subjectId: number | null = null;
  subject: HoSubjectI | undefined;

  constructor(
    private subjectService: HoSubjectService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

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
      if (!this.subject) {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Subject not found'
        });
        this.router.navigate(['/subjects']);
      }
    }
  }

  confirmDelete(): void {
    this.confirmationService.confirm({
      message: `
        <div style="text-align: center; padding: 1rem;">
          <div style="font-size: 3rem; color: #ef4444; margin-bottom: 1rem;">
            <i class="pi pi-exclamation-triangle"></i>
          </div>
          <h3 style="color: #1f2937; margin-bottom: 1rem; font-size: 1.25rem; font-weight: 600;">
            ¿Estás seguro de eliminar esta asignatura?
          </h3>
          <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.5rem; padding: 1rem; margin: 1rem 0;">
            <p style="color: #dc2626; font-weight: 500; margin: 0;">
              <strong>${this.subject?.name}</strong>
            </p>
            <p style="color: #6b7280; font-size: 0.875rem; margin: 0.5rem 0 0 0;">
              ID: ${this.subject?.id} | Grado: ${this.subject?.grade}
            </p>
          </div>
          <p style="color: #6b7280; font-size: 0.875rem; margin: 0;">
            Esta acción no se puede deshacer y se eliminarán todos los datos relacionados.
          </p>
        </div>
      `,
      header: '⚠️ Confirmar Eliminación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí, Eliminar',
      rejectLabel: 'Cancelar',
      acceptButtonStyleClass: 'p-button-danger p-button-raised',
      rejectButtonStyleClass: 'p-button-secondary p-button-outlined',
      accept: () => {
        this.deleteSubject();
      }
    });
  }

  deleteSubject(): void {
    if (this.subjectId) {
      this.subjectService.deleteSubject(this.subjectId);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Subject deleted successfully'
      });
      
      setTimeout(() => {
        this.router.navigate(['/subjects']);
      }, 1000);
    }
  }

  cancel(): void {
    this.router.navigate(['/subjects']);
  }
}
