import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SubmissionData component', () => {
  render(<App />);

  // Check if SubmissionData component is rendered
  const submissionDataElement = screen.getByTestId('submission-data');
  expect(submissionDataElement).toBeInTheDocument();

  // Check if table headers are present
  expect(screen.getByText('Institution')).toBeInTheDocument();
  expect(screen.getByText('Year')).toBeInTheDocument();
  expect(screen.getByText('Students Total')).toBeInTheDocument();
  expect(screen.getByText('Undergraduates Total')).toBeInTheDocument();
  expect(screen.getByText('Postgraduates Total')).toBeInTheDocument();
  expect(screen.getByText('Staff Total')).toBeInTheDocument();
  expect(screen.getByText('Academic Papers')).toBeInTheDocument();
});

test('renders SubjectList component', () => {
  render(<App />);

  // Check if SubjectList component is rendered
  const subjectListElement = screen.getByTestId('subject-list');
  expect(subjectListElement).toBeInTheDocument();

  // Add specific assertions for SubjectList component if needed
});
