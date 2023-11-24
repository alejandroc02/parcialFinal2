export class receta {
    id: number;
    name: string;
    description: string;
    difficulty: string;
    duration: number;
    ingredients: string[];
    category: string;
    image: string;
    stars: number;
    numberOfReviews: number;
    recipeAuthor: string;
  
    constructor(
      id: number,
      name: string,
      description: string,
      difficulty: string,
      duration: number,
      ingredients: string[],
      category: string,
      image: string,
      stars: number,
      numberOfReviews: number,
      recipeAuthor: string
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.difficulty = difficulty;
      this.duration = duration;
      this.ingredients = ingredients;
      this.category = category;
      this.image = image;
      this.stars = stars;
      this.numberOfReviews = numberOfReviews;
      this.recipeAuthor = recipeAuthor;
    }
  }