export interface HoStudentI {
  id: number;
  identification: string;
  name: string;
  phone: string;
  status: 'ACTIVE' | 'INACTIVE';
  birthDate: string;
  grade: number;
  createdAt: Date;
}

export interface HoStudentCreate {
  identification: string;
  name: string;
  phone: string;
  status: 'ACTIVE' | 'INACTIVE';
  birthDate: string;
  grade: number;
}

export interface HoStudentUpdate {
  identification: string;
  name: string;
  phone: string;
  status: 'ACTIVE' | 'INACTIVE';
  birthDate: string;
  grade: number;
}

