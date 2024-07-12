  // src/app/recipe.model.ts
  export interface Recipe {
      id: number;
      name: string;
      image: string;
      cookTimeMinutes: number;
      rating: number;
      mealType: string[];
    }
    