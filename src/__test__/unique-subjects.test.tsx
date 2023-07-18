import { extractUniqueSubjects } from '../utils';

describe('extractUniqueSubjects', () => {
  it('should extract unique subjects from submissions', () => {
    const submissions = [
      {
        id: '8F4B12A9-4D4C-C7FB-F9EC-EBDF75AB3933',
        subjects: [{ name: 'Chemistry' }, { name: 'Biology' }],
      },
      {
        id: '84CD666B-C267-2B5F-86A2-8C81EB83B855',
        subjects: [{ name: 'Chemistry' }, { name: 'Physics' }],
      },
      {
        id: '3A5EBCAC-3455-F4E5-C978-4A1CC1AA1D80',
        subjects: [
          { name: 'Maths' },
          { name: 'Chemistry' },
          { name: 'Biology' },
        ],
      },
    ];

    const uniqueSubjects = extractUniqueSubjects(submissions);

    expect(uniqueSubjects).toEqual([
      'Chemistry',
      'Biology',
      'Physics',
      'Maths',
    ]);
  });
});
