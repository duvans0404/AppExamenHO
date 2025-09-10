export interface HoGradeI {
  id: number;
  name: string;
  number: number;
  status: 'ACTIVE' | 'INACTIVE';
  createdAt: Date;
}

export interface HoGradeCreate {
  name: string;
  number: number;
  status: 'ACTIVE' | 'INACTIVE';
}

export interface HoGradeUpdate {
  name: string;
  number: number;
  status: 'ACTIVE' | 'INACTIVE';
}

