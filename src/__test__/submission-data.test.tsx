import React from 'react';
import { render, screen } from '@testing-library/react';
import { SubmissionData } from '../components';
import { Institution, Submission } from '../types';

describe('SubmissionData', () => {
  const institutions: Institution[] = [
    {
      name: 'Prestigious Science University',
      address: 'P.O. Box 114, 6922 Volutpat. Ave',
      country: 'Jordan',
      region: 'Metropolitana de Santiago',
      id: 'EA8BBED7-4106-94AF-48DD-A1414E386AFB',
    },
    {
      name: 'Top University of Mathematics',
      address: '380-7690 Sem Rd.',
      country: 'Heard Island and Mcdonald Islands',
      region: 'LAL',
      id: 'DEA4606B-4A21-D497-40E9-A5FB7589B536',
    },
    {
      name: 'Technology Institute',
      address: 'P.O. Box 550, 4768 Consequat Street',
      country: 'Trinidad and Tobago',
      region: 'Sicilia',
      id: '8C8A804F-7A43-5840-4296-8A0117325921',
    },
  ];

  const submissions: Submission[] = [
    {
      id: '8F4B12A9-4D4C-C7FB-F9EC-EBDF75AB3933',
      institution_id: 'EA8BBED7-4106-94AF-48DD-A1414E386AFB',
      year: 2017,
      students_total: 6043,
      undergraduates_total: 5672,
      postgraduates_total: 371,
      staff_total: 77,
      academic_papers: 7880,
      institution_income: 1738388,
      covid: 532,
      subjects: [
        {
          name: 'Chemistry',
          academic_papers: 3267,
          students_total: 2598,
          student_rating: 4.1,
        },
        {
          name: 'Biology',
          academic_papers: 2342,
          students_total: 1873,
          student_rating: 3.9,
        },
      ],
    },
    {
      id: '84CD666B-C267-2B5F-86A2-8C81EB83B855',
      institution_id: 'EA8BBED7-4106-94AF-48DD-A1414E386AFB',
      year: 2019,
      students_total: 7424,
      undergraduates_total: 6945,
      postgraduates_total: 479,
      staff_total: 90,
      academic_papers: 4671,
      institution_income: 13201844,
      covid: 53,
      subjects: [
        {
          name: 'Chemistry',
          academic_papers: 2732,
          students_total: 2752,
          student_rating: 4.1,
        },
        {
          name: 'Biology',
          academic_papers: 1743,
          students_total: 2029,
          student_rating: 4.0,
        },
      ],
    },
    {
      id: '3A5EBCAC-3455-F4E5-C978-4A1CC1AA1D80',
      institution_id: 'DEA4606B-4A21-D497-40E9-A5FB7589B536',
      year: 2017,
      students_total: 7994,
      undergraduates_total: 7212,
      postgraduates_total: 782,
      staff_total: 158,
      academic_papers: 6852,
      institution_income: 87167524,
      covid: 150,
      subjects: [
        {
          name: 'Maths',
          academic_papers: 6852,
          students_total: 7994,
          student_rating: 4.4,
        },
      ],
    },
    {
      id: '3A5EBCAC-3455-F4E5-C978-4A1CC1AA1D80',
      institution_id: 'DEA4606B-4A21-D497-40E9-A5FB7589B536',
      year: 2018,
      students_total: 8122,
      undergraduates_total: 7345,
      postgraduates_total: 785,
      staff_total: 162,
      academic_papers: 4932,
      institution_income: 37347888,
      covid: 870,
      subjects: [
        {
          name: 'Maths',
          academic_papers: 4932,
          students_total: 8122,
          student_rating: 4.4,
        },
      ],
    },
    {
      id: '3A5EBCAC-3455-F4E5-C978-4A1CC1AA1D80',
      institution_id: 'DEA4606B-4A21-D497-40E9-A5FB7589B536',
      year: 2019,
      students_total: 9087,
      undergraduates_total: 7921,
      postgraduates_total: 1137,
      staff_total: 178,
      academic_papers: 5883,
      institution_income: 15018544,
      covid: 345,
      subjects: [
        {
          name: 'Maths',
          academic_papers: 5136,
          students_total: 8122,
          student_rating: 4.4,
        },
        {
          name: 'Chemistry',
          academic_papers: 653,
          students_total: 1320,
          student_rating: 3.7,
        },
      ],
    },
    {
      id: '739F3B90-E501-7517-5C0E-2CD91402464F',
      institution_id: '8C8A804F-7A43-5840-4296-8A0117325921',
      year: 2017,
      students_total: 8844,
      undergraduates_total: 8193,
      postgraduates_total: 783,
      staff_total: 101,
      academic_papers: 6924,
      institution_income: 47502707,
      covid: 280,
      subjects: [
        {
          name: 'Maths',
          academic_papers: 5136,
          students_total: 5122,
          student_rating: 4.1,
        },
        {
          name: 'Chemistry',
          academic_papers: 1653,
          students_total: 1320,
          student_rating: 4.2,
        },
        {
          name: 'Biology',
          academic_papers: 1743,
          students_total: 2029,
          student_rating: 4.4,
        },
      ],
    },
    {
      id: 'FBE010A3-84AE-911C-D6E1-BBC360908E25',
      institution_id: '8C8A804F-7A43-5840-4296-8A0117325921',
      year: 2018,
      students_total: 8994,
      undergraduates_total: 8232,
      postgraduates_total: 777,
      staff_total: 111,
      academic_papers: 6778,
      institution_income: 91534309,
      covid: 540,
      subjects: [
        {
          name: 'Maths',
          academic_papers: 5242,
          students_total: 5122,
          student_rating: 4.2,
        },
        {
          name: 'Chemistry',
          academic_papers: 1191,
          students_total: 1320,
          student_rating: 4.1,
        },
        {
          name: 'Biology',
          academic_papers: 1929,
          students_total: 2221,
          student_rating: 4.4,
        },
      ],
    },
  ];

  test('renders table headers', () => {
    render(
      <SubmissionData submissions={submissions} institutions={institutions} />
    );
    expect(screen.getByText('Institution')).toBeInTheDocument();
    expect(screen.getByText('Year')).toBeInTheDocument();
    expect(screen.getByText('Students Total')).toBeInTheDocument();
    expect(screen.getByText('Undergraduates Total')).toBeInTheDocument();
    expect(screen.getByText('Postgraduates Total')).toBeInTheDocument();
    expect(screen.getByText('Staff Total')).toBeInTheDocument();
    expect(screen.getByText('Academic Papers')).toBeInTheDocument();
  });
});
