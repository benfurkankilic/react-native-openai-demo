import { Recipe } from "../../types/Recipe.type";

export type TaskScreenUIProps = {
  recipe?: Recipe;
  value: string;
  onChangeText: (text: string) => void;
  onPressCreate: () => void;
}