import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

export interface Section {
  name: string,
  link: string,
  icon: string
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public sections: Section[] = [
    {
      name :'Accueil',
      link: '#home',
      icon: 'pi pi-home'
    },
    {
      name :'À propos',
      link: '#presentation',
      icon: 'pi pi-user'
    }, 
    {
      name :'Compétences',
      link: '#competences',
      icon: 'pi pi-wrench'
    },
    {
      name :'Études',
      link: '#etudes',
      icon: 'pi pi-book'
    },
    {
      name :'Expériences',
      link: '#experiences',
      icon: 'pi pi-briefcase'
    },
    {
      name :'Projets',
      link: '#projets',
      icon: 'pi pi-code'
    },
    {
      name :'Contact',
      link: '#contact',
      icon: 'pi pi-phone'
    }
  ]

  public iconName: string = 'pi pi-moon';
  private selectorBody!: HTMLBodyElement;

  @Output() showBurgerMenuChange: EventEmitter<boolean> = new EventEmitter();
  @Input() showBurgerMenu: boolean = false;

  ngOnInit() {
    this.selectorBody = document.querySelector('body')!;
  }

  public onToggleDarkMode(): void {
    if (this.selectorBody.classList.contains('dark-mode')) {
      this.iconName = 'pi pi-moon';
      this.selectorBody.classList.remove('dark-mode');
    } else {
      this.iconName = 'pi pi-sun';
      this.selectorBody.classList.toggle('dark-mode');
    }
  }

  public onToggleBurgerMenu(): void {
    this.showBurgerMenu = !this.showBurgerMenu;
    this.showBurgerMenuChange.emit(this.showBurgerMenu);
  }
}
