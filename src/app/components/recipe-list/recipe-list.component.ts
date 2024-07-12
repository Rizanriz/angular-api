// src/app/recipe-list/recipe-list.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  p:number = 1
  recipes: Recipe[] = [];
  
  searchKey:string = ""
  private subscription:any = Subscription;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    
    this.subscription = this.recipeService.getAllRecipes().subscribe(
      (res: Recipe[]) => {
        this.recipes = res;
        console.log(res);
        
      },
      (error) => {
        console.error('Error fetching recipes:', error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
