import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  // Student routes
  { path: 'students', loadComponent: () => import('./components/student/read/ho-student-read').then(m => m.HoStudentRead) },
  { path: 'students/create', loadComponent: () => import('./components/student/create/ho-student-create').then(m => m.HoStudentCreate) },
  { path: 'students/update/:id', loadComponent: () => import('./components/student/update/ho-student-update').then(m => m.HoStudentUpdate) },
  { path: 'students/delete/:id', loadComponent: () => import('./components/student/delete/ho-student-delete').then(m => m.HoStudentDelete) },
  // Subject routes
  { path: 'subjects', loadComponent: () => import('./components/subject/read/ho-subject-read').then(m => m.HoSubjectRead) },
  { path: 'subjects/create', loadComponent: () => import('./components/subject/create/ho-subject-create').then(m => m.HoSubjectCreate) },
  { path: 'subjects/update/:id', loadComponent: () => import('./components/subject/update/ho-subject-update').then(m => m.HoSubjectUpdate) },
  { path: 'subjects/delete/:id', loadComponent: () => import('./components/subject/delete/ho-subject-delete').then(m => m.HoSubjectDelete) },
  // Grade routes
  { path: 'grades', loadComponent: () => import('./components/grade/read/ho-grade-read').then(m => m.HoGradeRead) },
  { path: 'grades/create', loadComponent: () => import('./components/grade/create/ho-grade-create').then(m => m.HoGradeCreate) },
  { path: 'grades/update/:id', loadComponent: () => import('./components/grade/update/ho-grade-update').then(m => m.HoGradeUpdate) },
  { path: 'grades/delete/:id', loadComponent: () => import('./components/grade/delete/ho-grade-delete').then(m => m.HoGradeDelete) },
  { path: '**', redirectTo: '/students' }
];
