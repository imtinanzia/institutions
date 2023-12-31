import type { Institution } from '../types';

class InstitutioApi {
  getInstitution(): Promise<Institution[]> {
    const institution: Institution[] = [
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

    return Promise.resolve(institution);
  }
}

export const institutionApi = new InstitutioApi();
