import apiClient, { handleError } from '../utils/apiClient';
import { ENDPOINTS } from '../utils/config';

describe('Part API Tests', () => {
  it('should create a new part', async () => {
    const payload = {
      partType: 'Part_1',
      partName: 'Part Name',
      scope: 'scope_1',
      emissionFactor: 5,
      unit: 'kg',
    };

    try {
      const response = await apiClient.post(ENDPOINTS.CREATE_PART, payload);
      expect(response.status).toBe(201);
      expect(response.data).toHaveProperty('success', true);
      expect(response.data).toHaveProperty('message', 'Part Created Successfully');
    } catch (e) {
      const errorResponse = handleError(e);
      expect(errorResponse.success).toBe(false);
    }
  });

  it('should fetch all parts', async () => {
    try {
      const response = await apiClient.get(ENDPOINTS.GET_PARTS);
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('success', true);
      expect(Array.isArray(response.data.data)).toBe(true);
    } catch (e) {
      const errorResponse = handleError(e);
      expect(errorResponse.success).toBe(false);
    }
  });
});
