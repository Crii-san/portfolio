import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-burger-menu',
  imports: [NgFor],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.css'
})
export class BurgerMenuComponent {
  public sections: string[] = ['À propos', 'Compétences', 'Études', 'Expériences', 'Projets', 'Contact'];

  @Output() closeBurgerMenu: EventEmitter<boolean> = new EventEmitter();

  public onCloseBurgerMenu() : void {
    this.closeBurgerMenu.emit(true);
  }
}
