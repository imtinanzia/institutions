interface Subject {
  name: string;
  academic_papers: number;
  students_total: number;
  student_rating: number;
}

interface Submission {
  id: string;
  institution_id: string;
  year: number;
  students_total: number;
  undergraduates_total: number;
  postgraduates_total: number;
  staff_total: number;
  academic_papers: number;
  institution_income: number;
  covid: number;
  subjects: Subject[];
}

export type { Submission, Subject };
