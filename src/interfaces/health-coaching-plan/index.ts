import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HealthCoachingPlanInterface {
  id?: string;
  name: string;
  description?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface HealthCoachingPlanGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
}
