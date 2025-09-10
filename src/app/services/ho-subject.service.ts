import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HoSubjectI, HoSubjectCreate, HoSubjectUpdate } from '../models/ho-subject.model';

@Injectable({
  providedIn: 'root'
})
export class HoSubjectService {
  private readonly STORAGE_KEY = 'ho_subjects_data';
  private subjectsSubject = new BehaviorSubject<HoSubjectI[]>([]);
  public subjects$ = this.subjectsSubject.asObservable();

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    try {
      const storedData = localStorage.getItem(this.STORAGE_KEY);
      if (storedData) {
        const subjects = JSON.parse(storedData);
        this.subjectsSubject.next(subjects);
      } else {
        // Initialize with default data
        const defaultSubjects: HoSubjectI[] = [
          {
            id: 1,
            name: 'Mathematics',
            status: 'ACTIVE',
            grade: 'Tenth Grade',
            createdAt: new Date('2024-01-15')
          },
          {
            id: 2,
            name: 'English',
            status: 'ACTIVE',
            grade: 'Tenth Grade',
            createdAt: new Date('2024-01-16')
          },
          {
            id: 3,
            name: 'Science',
            status: 'ACTIVE',
            grade: 'Eleventh Grade',
            createdAt: new Date('2024-01-17')
          }
        ];
        this.subjectsSubject.next(defaultSubjects);
        this.saveToStorage(defaultSubjects);
      }
    } catch (error) {
      console.error('Error loading subjects from storage:', error);
      this.subjectsSubject.next([]);
    }
  }

  private saveToStorage(subjects: HoSubjectI[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(subjects));
    } catch (error) {
      console.error('Error saving subjects to storage:', error);
    }
  }

  getSubjects(): Observable<HoSubjectI[]> {
    return this.subjects$;
  }

  addSubject(subjectData: HoSubjectCreate): void {
    const currentSubjects = this.subjectsSubject.value;
    const newSubject: HoSubjectI = {
      id: Math.max(...currentSubjects.map(s => s.id), 0) + 1,
      ...subjectData,
      createdAt: new Date()
    };
    const updatedSubjects = [...currentSubjects, newSubject];
    this.subjectsSubject.next(updatedSubjects);
    this.saveToStorage(updatedSubjects);
  }

  updateSubject(updatedSubject: HoSubjectI): void {
    const currentSubjects = this.subjectsSubject.value;
    const index = currentSubjects.findIndex(s => s.id === updatedSubject.id);
    if (index !== -1) {
      const updatedSubjects = [...currentSubjects];
      updatedSubjects[index] = updatedSubject;
      this.subjectsSubject.next(updatedSubjects);
      this.saveToStorage(updatedSubjects);
    }
  }

  deleteSubject(id: number): void {
    const currentSubjects = this.subjectsSubject.value;
    const updatedSubjects = currentSubjects.filter(s => s.id !== id);
    this.subjectsSubject.next(updatedSubjects);
    this.saveToStorage(updatedSubjects);
  }

  getSubjectById(id: number): HoSubjectI | undefined {
    return this.subjectsSubject.value.find(s => s.id === id);
  }
}
