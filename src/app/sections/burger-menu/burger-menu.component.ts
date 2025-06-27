import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { section } from '../../containers/header/header.component';

@Component({
  selector: 'app-burger-menu',
  imports: [NgFor],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.css'
})
export class BurgerMenuComponent {
  public sections: section[] = [
    {
      name :'À propos',
      link: 'presentation'
    }, 
    {
      name :'Compétences',
      link: 'competences'
    },
    {
      name :'Études',
      link: 'etudes'
    },
    {
      name :'Expériences',
      link: 'experiences'
    },
    {
      name :'Projets',
      link: 'projets'
    },
    {
      name :'Contact',
      link: 'contact'
    }
  ]

  @Output() closeBurgerMenu: EventEmitter<boolean> = new EventEmitter();

  public onCloseBurgerMenu() : void {
    this.closeBurgerMenu.emit(true);
  }

  public scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.onCloseBurgerMenu(); // ferme le menu
  }

}
