import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Section {
  name: string,
  link: string
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public sections: Section[] = [
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

  public icon: string = 'pi pi-moon';
  private selectorBody!: HTMLBodyElement;

  @Output() showBurgerMenuChange: EventEmitter<boolean> = new EventEmitter();
  @Input() showBurgerMenu: boolean = false;

  ngOnInit() {
    this.selectorBody = document.querySelector('body')!;
  }

  public onToggleDarkMode(): void {
    if (this.selectorBody.classList.contains('dark-mode')) {
      this.icon = 'pi pi-moon';
      this.selectorBody.classList.remove('dark-mode');
    } else {
      this.icon = 'pi pi-sun';
      this.selectorBody.classList.toggle('dark-mode');
    }
  }

  public onToggleBurgerMenu(): void {
    this.showBurgerMenu = !this.showBurgerMenu;
    this.showBurgerMenuChange.emit(this.showBurgerMenu);
  }
}
