import { submissionApi } from '../__fakeapi__';

describe('SubmissionsApi', () => {
  it('should fetch submissions successfully', async () => {
    const submissions = await submissionApi.getSubmissions();

    expect(Array.isArray(submissions)).toBe(true);
    expect(submissions.length).toBeGreaterThan(0);

    const firstSubmission = submissions[0];
    expect(firstSubmission).toHaveProperty(
      'id',
      '8F4B12A9-4D4C-C7FB-F9EC-EBDF75AB3933'
    );
    expect(firstSubmission).toHaveProperty(
      'institution_id',
      'EA8BBED7-4106-94AF-48DD-A1414E386AFB'
    );
    expect(firstSubmission).toHaveProperty('year', 2017);
    expect(firstSubmission).toHaveProperty('students_total', 6043);
    expect(firstSubmission).toHaveProperty('undergraduates_total', 5672);
    expect(firstSubmission).toHaveProperty('postgraduates_total', 371);
    expect(firstSubmission).toHaveProperty('staff_total', 77);
    expect(firstSubmission).toHaveProperty('academic_papers', 7880);
    expect(firstSubmission).toHaveProperty('institution_income', 1738388);
    expect(firstSubmission).toHaveProperty('covid', 532);
    expect(firstSubmission).toHaveProperty('subjects');
    expect(Array.isArray(firstSubmission.subjects)).toBe(true);
    expect(firstSubmission.subjects.length).toBeGreaterThan(0);

    const firstSubject = firstSubmission.subjects[0];
    expect(firstSubject).toHaveProperty('name', 'Chemistry');
    expect(firstSubject).toHaveProperty('academic_papers', 3267);
    expect(firstSubject).toHaveProperty('students_total', 2598);
    expect(firstSubject).toHaveProperty('student_rating', 4.1);

    // Add more assertions for other submissions and subjects if needed
  });
});
