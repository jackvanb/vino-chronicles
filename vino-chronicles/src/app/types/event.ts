import { Wine } from './wine';

export interface Event {
  title: string;
  address: string;
  description: string;
  wineList: Wine[];
}
