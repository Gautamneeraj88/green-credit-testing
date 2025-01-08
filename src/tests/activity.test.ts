import apiClient, { handleError } from '../utils/apiClient';
import { ENDPOINTS } from '../utils/config';

describe('Activity API Tests', () => {
  it('should create a new activity', async () => {
    const payload = {
      packageType: 'Package_123',
      activityName: 'Test Activity',
      activityCategory: 'Category_1',
      emissionFactor: 10,
      unit: 'kg',
    };

    try {
      const response = await apiClient.post(ENDPOINTS.CREATE_ACTIVITY, payload);
      expect(response.status).toBe(201);
      expect(response.data).toHaveProperty('success', true);
      expect(response.data).toHaveProperty('message', 'Activity Created Successfully');
    } catch (e) {
      const errorResponse = handleError(e);
      expect(errorResponse.success).toBe(false);
    }
  });

  it('should fetch all activities', async () => {
    try {
      const response = await apiClient.get(ENDPOINTS.GET_ACTIVITIES);
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('success', true);
      expect(Array.isArray(response.data.data)).toBe(true);
    } catch (e) {
      const errorResponse = handleError(e);
      expect(errorResponse.success).toBe(false);
    }
  });
});
