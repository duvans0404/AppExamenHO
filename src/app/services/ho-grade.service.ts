import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HoGradeI, HoGradeCreate, HoGradeUpdate } from '../models/ho-grade.model';

@Injectable({
  providedIn: 'root'
})
export class HoGradeService {
  private readonly STORAGE_KEY = 'ho_grades_data';
  private gradesSubject = new BehaviorSubject<HoGradeI[]>([]);
  public grades$ = this.gradesSubject.asObservable();

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    try {
      const storedData = localStorage.getItem(this.STORAGE_KEY);
      if (storedData) {
        const grades = JSON.parse(storedData);
        this.gradesSubject.next(grades);
      } else {
        // Initialize with default data
        const defaultGrades: HoGradeI[] = [
          {
            id: 1,
            name: 'Tenth Grade',
            number: 10,
            status: 'ACTIVE',
            createdAt: new Date('2024-01-15')
          },
          {
            id: 2,
            name: 'Eleventh Grade',
            number: 11,
            status: 'ACTIVE',
            createdAt: new Date('2024-01-16')
          }
        ];
        this.gradesSubject.next(defaultGrades);
        this.saveToStorage(defaultGrades);
      }
    } catch (error) {
      console.error('Error loading grades from storage:', error);
      this.gradesSubject.next([]);
    }
  }

  private saveToStorage(grades: HoGradeI[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(grades));
    } catch (error) {
      console.error('Error saving grades to storage:', error);
    }
  }

  getGrades(): Observable<HoGradeI[]> {
    return this.grades$;
  }

  addGrade(gradeData: HoGradeCreate): void {
    const currentGrades = this.gradesSubject.value;
    const newGrade: HoGradeI = {
      id: Math.max(...currentGrades.map(g => g.id), 0) + 1,
      ...gradeData,
      createdAt: new Date()
    };
    const updatedGrades = [...currentGrades, newGrade];
    this.gradesSubject.next(updatedGrades);
    this.saveToStorage(updatedGrades);
  }

  updateGrade(updatedGrade: HoGradeI): void {
    const currentGrades = this.gradesSubject.value;
    const index = currentGrades.findIndex(g => g.id === updatedGrade.id);
    if (index !== -1) {
      const updatedGrades = [...currentGrades];
      updatedGrades[index] = updatedGrade;
      this.gradesSubject.next(updatedGrades);
      this.saveToStorage(updatedGrades);
    }
  }

  deleteGrade(id: number): void {
    const currentGrades = this.gradesSubject.value;
    const updatedGrades = currentGrades.filter(g => g.id !== id);
    this.gradesSubject.next(updatedGrades);
    this.saveToStorage(updatedGrades);
  }

  getGradeById(id: number): HoGradeI | undefined {
    return this.gradesSubject.value.find(g => g.id === id);
  }
}
