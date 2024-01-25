export interface Recipe {
  id: string;
  title: string;
  description?: string;
  ingredients?: string[];
  steps?: string[];
}