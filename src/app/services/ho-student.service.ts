import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HoStudentI, HoStudentCreate, HoStudentUpdate } from '../models/ho-student.model';

@Injectable({
  providedIn: 'root'
})
export class HoStudentService {
  private readonly STORAGE_KEY = 'ho_students_data';
  private studentsSubject = new BehaviorSubject<HoStudentI[]>([]);
  public students$ = this.studentsSubject.asObservable();

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    try {
      const storedData = localStorage.getItem(this.STORAGE_KEY);
      if (storedData) {
        const students = JSON.parse(storedData);
        this.studentsSubject.next(students);
      } else {
        // Initialize with default data
        const defaultStudents: HoStudentI[] = [
          {
            id: 1,
            identification: '12345678',
            name: 'John Doe',
            phone: '3001234567',
            status: 'ACTIVE',
            birthDate: '15/03/2000',
            grade: 10,
            createdAt: new Date('2024-01-15')
          },
          {
            id: 2,
            identification: '87654321',
            name: 'Jane Smith',
            phone: '3007654321',
            status: 'ACTIVE',
            birthDate: '22/07/2001',
            grade: 11,
            createdAt: new Date('2024-01-16')
          }
        ];
        this.studentsSubject.next(defaultStudents);
        this.saveToStorage(defaultStudents);
      }
    } catch (error) {
      console.error('Error loading students from storage:', error);
      this.studentsSubject.next([]);
    }
  }

  private saveToStorage(students: HoStudentI[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(students));
    } catch (error) {
      console.error('Error saving students to storage:', error);
    }
  }

  getStudents(): Observable<HoStudentI[]> {
    return this.students$;
  }

  addStudent(studentData: HoStudentCreate): void {
    const currentStudents = this.studentsSubject.value;
    const newStudent: HoStudentI = {
      id: Math.max(...currentStudents.map(s => s.id), 0) + 1,
      ...studentData,
      createdAt: new Date()
    };
    const updatedStudents = [...currentStudents, newStudent];
    this.studentsSubject.next(updatedStudents);
    this.saveToStorage(updatedStudents);
  }

  updateStudent(updatedStudent: HoStudentI): void {
    const currentStudents = this.studentsSubject.value;
    const index = currentStudents.findIndex(s => s.id === updatedStudent.id);
    if (index !== -1) {
      const updatedStudents = [...currentStudents];
      updatedStudents[index] = updatedStudent;
      this.studentsSubject.next(updatedStudents);
      this.saveToStorage(updatedStudents);
    }
  }

  deleteStudent(id: number): void {
    const currentStudents = this.studentsSubject.value;
    const updatedStudents = currentStudents.filter(s => s.id !== id);
    this.studentsSubject.next(updatedStudents);
    this.saveToStorage(updatedStudents);
  }

  getStudentById(id: number): HoStudentI | undefined {
    return this.studentsSubject.value.find(s => s.id === id);
  }
}
