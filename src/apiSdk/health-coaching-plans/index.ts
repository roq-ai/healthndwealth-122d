import axios from 'axios';
import queryString from 'query-string';
import { HealthCoachingPlanInterface, HealthCoachingPlanGetQueryInterface } from 'interfaces/health-coaching-plan';
import { GetQueryInterface } from '../../interfaces';

export const getHealthCoachingPlans = async (query?: HealthCoachingPlanGetQueryInterface) => {
  const response = await axios.get(`/api/health-coaching-plans${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createHealthCoachingPlan = async (healthCoachingPlan: HealthCoachingPlanInterface) => {
  const response = await axios.post('/api/health-coaching-plans', healthCoachingPlan);
  return response.data;
};

export const updateHealthCoachingPlanById = async (id: string, healthCoachingPlan: HealthCoachingPlanInterface) => {
  const response = await axios.put(`/api/health-coaching-plans/${id}`, healthCoachingPlan);
  return response.data;
};

export const getHealthCoachingPlanById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/health-coaching-plans/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteHealthCoachingPlanById = async (id: string) => {
  const response = await axios.delete(`/api/health-coaching-plans/${id}`);
  return response.data;
};
