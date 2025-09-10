export interface HoSubjectI {
  id: number;
  name: string;
  status: 'ACTIVE' | 'INACTIVE';
  grade: string;
  createdAt: Date;
}

export interface HoSubjectCreate {
  name: string;
  status: 'ACTIVE' | 'INACTIVE';
  grade: string;
}

export interface HoSubjectUpdate {
  name: string;
  status: 'ACTIVE' | 'INACTIVE';
  grade: string;
}
