const mapping: Record<string, string> = {
  'diet-plans': 'diet_plan',
  'health-coaching-plans': 'health_coaching_plan',
  'nutrition-plans': 'nutrition_plan',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
