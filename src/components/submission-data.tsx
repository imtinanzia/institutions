import React from 'react';
import { Institution, Submission } from '../types';

interface SubmissionDataProps {
  submissions: Submission[];
  institutions: Institution[];
}

const SubmissionData: React.FC<SubmissionDataProps> = ({
  submissions,
  institutions,
}) => {
  return (
    <div data-testid="submission-data">
      <table className="table-auto w-full border-collapse text-left">
        <thead>
          <tr>
            <th className="p-4 font-bold bg-gray-200 border-b">Institution</th>
            <th className="p-4 font-bold bg-gray-200 border-b">Year</th>
            <th className="p-4 font-bold bg-gray-200 border-b">
              Students Total
            </th>
            <th className="p-4 font-bold bg-gray-200 border-b">
              Undergraduates Total
            </th>
            <th className="p-4 font-bold bg-gray-200 border-b">
              Postgraduates Total
            </th>
            <th className="p-4 font-bold bg-gray-200 border-b">Staff Total</th>
            <th className="p-4 font-bold bg-gray-200 border-b">
              Academic Papers
            </th>
            <th className="p-4 font-bold bg-gray-200 border-b">Country</th>
            <th className="p-4 font-bold bg-gray-200 border-b">Covid Cases</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission: Submission) => {
            const institution = institutions.find(
              (inst) => inst.id === submission.institution_id
            );
            return (
              <tr key={submission.id} className="border-b">
                <td className="p-4">{institution?.name}</td>
                <td className="p-4">{submission.year}</td>
                <td className="p-4">{submission.students_total}</td>
                <td className="p-4">{submission.undergraduates_total}</td>
                <td className="p-4">{submission.postgraduates_total}</td>
                <td className="p-4">{submission.staff_total}</td>
                <td className="p-4">{submission.academic_papers}</td>
                <td className="p-4">{institution?.country}</td>
                <td className="p-4">{submission?.covid}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionData;
