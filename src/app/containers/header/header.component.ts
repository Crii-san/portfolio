import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public sections: string[] = ['À propos', 'Compétences', 'Études', 'Expériences', 'Projets', 'Contact'];
  public mode!: string;

  ngOnInit() {
    const element = document.querySelector('body');
    if (element?.classList.contains('dark-mode')) {
      this.mode = 'light_mode';
    } else {
      this.mode = 'dark_mode';
    }
  }

  public toggleDarkMode(): void {
    const element = document.querySelector('body');
    if (element?.classList.contains('dark-mode')) {
      this.mode = 'dark_mode';
      element?.classList.remove('dark-mode');
    } else {
      this.mode = 'light_mode';
      element?.classList.toggle('dark-mode');
    }
  }
}
