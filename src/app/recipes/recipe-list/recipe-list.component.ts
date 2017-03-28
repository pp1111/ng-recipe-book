import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter();
  recipe = new Recipe('Dummy', 'Dummy', 'http://thumbs1.ebaystatic.com/d/l225/m/mmO4j9mo_hxxVRI9oarv-Hw.jpg');
  constructor() { }

  ngOnInit () {
  }

  onSelected (recipe: Recipe) {
  	this.recipeSelected.emit(recipe);
  }
}
