import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public sections: string[] = ['À propos', 'Compétences', 'Études', 'Expériences', 'Projets', 'Contact'];
  public theme: string = 'light_mode';
  private selectorBody!: HTMLBodyElement;

  @Output() showBurgerMenuChange: EventEmitter<boolean> = new EventEmitter();
  @Input() showBurgerMenu: boolean = false;

  ngOnInit() {
    this.selectorBody = document.querySelector('body')!;
  }

  public onToggleDarkMode(): void {
    if (this.selectorBody.classList.contains('dark-mode')) {
      this.theme = 'dark_mode';
      this.selectorBody.classList.remove('dark-mode');
    } else {
      this.theme = 'light_mode';
      this.selectorBody.classList.toggle('dark-mode');
    }
  }

  public onToggleBurgerMenu(): void {
    this.showBurgerMenu = !this.showBurgerMenu;
    this.showBurgerMenuChange.emit(this.showBurgerMenu);
  }
}
