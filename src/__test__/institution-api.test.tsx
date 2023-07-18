import { institutionApi } from '../__fakeapi__';

describe('InstitutionApi', () => {
  it('should fetch institutions successfully', async () => {
    const institutions = await institutionApi.getInstitution();

    expect(Array.isArray(institutions)).toBe(true);
    expect(institutions.length).toBeGreaterThan(0);

    const firstInstitution = institutions[0];
    expect(firstInstitution).toHaveProperty(
      'name',
      'Prestigious Science University'
    );
    expect(firstInstitution).toHaveProperty(
      'address',
      'P.O. Box 114, 6922 Volutpat. Ave'
    );
    expect(firstInstitution).toHaveProperty('country', 'Jordan');
    expect(firstInstitution).toHaveProperty(
      'region',
      'Metropolitana de Santiago'
    );
    expect(firstInstitution).toHaveProperty(
      'id',
      'EA8BBED7-4106-94AF-48DD-A1414E386AFB'
    );
  });
});
