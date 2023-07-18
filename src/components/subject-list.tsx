import React from 'react';
import { Submission } from '../types';
import { extractUniqueSubjects } from '../utils';

interface SubjectListProps {
  submissions: Submission[];
}

const SubjectList: React.FC<SubjectListProps> = ({ submissions }) => {
  const subjects = extractUniqueSubjects(submissions);

  return (
    <div data-testid="subject-list">
      <ul className="list-disc pl-6">
        {subjects?.map((subject: string) => (
          <li key={subject} className="mb-2">
            {subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectList;
