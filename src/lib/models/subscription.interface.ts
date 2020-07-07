import { IPlan } from './plan.interface';

export interface ISubscription {
  id: string,
  name: string,
  plans: IPlan;
  features: string;
}
