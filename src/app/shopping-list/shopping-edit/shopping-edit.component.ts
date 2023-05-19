import { Ingredient } from './../../shared/ingredient.model';
import { Component, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef
  @ViewChild('amountInput') amountInputRef
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value
    const ingAmount = this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredient(ingName, ingAmount)
    this.ingredientAdded.emit(newIngredient)
  }
}
