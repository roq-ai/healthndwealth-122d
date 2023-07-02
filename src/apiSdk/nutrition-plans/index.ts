import axios from 'axios';
import queryString from 'query-string';
import { NutritionPlanInterface, NutritionPlanGetQueryInterface } from 'interfaces/nutrition-plan';
import { GetQueryInterface } from '../../interfaces';

export const getNutritionPlans = async (query?: NutritionPlanGetQueryInterface) => {
  const response = await axios.get(`/api/nutrition-plans${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createNutritionPlan = async (nutritionPlan: NutritionPlanInterface) => {
  const response = await axios.post('/api/nutrition-plans', nutritionPlan);
  return response.data;
};

export const updateNutritionPlanById = async (id: string, nutritionPlan: NutritionPlanInterface) => {
  const response = await axios.put(`/api/nutrition-plans/${id}`, nutritionPlan);
  return response.data;
};

export const getNutritionPlanById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/nutrition-plans/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteNutritionPlanById = async (id: string) => {
  const response = await axios.delete(`/api/nutrition-plans/${id}`);
  return response.data;
};
