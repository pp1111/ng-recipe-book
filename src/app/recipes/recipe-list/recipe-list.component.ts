import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Air Max', 'Dummy', 'http://pm1.narvii.com/5807/1a65f5532dc4ea1628db6d04144c0178fb44a717_hq.jpg', []),
    new Recipe('Dummy', 'Dummy', 'http://images3.nike.com/is/image/DotCom/PDP_HERO_ZOOM/849559_001_C_PREM/air-max-2017-mens-running-shoe.jpg', []),
  ];
  @Output() recipeSelected = new EventEmitter();
  constructor() { }

  ngOnInit () {
  }

  onSelected (recipe: Recipe) {
  	this.recipeSelected.emit(recipe);
  }
}
