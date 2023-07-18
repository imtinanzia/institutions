import React, { useState, useEffect, useCallback } from 'react';
import { SubmissionData, SubjectList } from './components';
import { Institution, Submission } from './types';
import { submissionApi, institutionApi } from './__fakeapi__';
import { useMounted } from './hooks';

const App: React.FC = () => {
  const mounted = useMounted();

  const [submissions, setSubmission] = useState<Submission[]>([]);
  const [institutions, setInstitutions] = useState<Institution[]>([]);

  const getData = useCallback(async () => {
    try {
      const submissionResponse = await submissionApi.getSubmissions();
      const institutionResponse = await institutionApi.getInstitution();

      if (mounted.current) {
        setSubmission(submissionResponse);
        setInstitutions(institutionResponse);
      }
    } catch (err) {
      console.error(err);
    }
  }, [mounted]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Submission Data</h1>
      <SubmissionData submissions={submissions} institutions={institutions} />
      <h1 className="text-2xl font-bold my-4">Subject List</h1>
      <SubjectList submissions={submissions} />
    </div>
  );
};

export default App;
