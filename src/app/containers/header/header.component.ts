import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, UpperCasePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public sections: string[] = ['à propos', 'compétences', 'projets', 'contact'];
  public icon!: string;

  ngOnInit() {
    const element = document.querySelector('body');
    if (element?.classList.contains('dark-mode')) {
      this.icon = 'light_mode';
    } else {
      this.icon = 'dark_mode';
    }
  }

  public toggleDarkMode(): void {
    console.log('test');
    const element = document.querySelector('body');
    if (element?.classList.contains('dark-mode')) {
      this.icon = 'light_mode';
      element?.classList.remove('dark-mode');
    } else {
      this.icon = 'dark_mode';
      element?.classList.toggle('dark-mode');
    }
  }
}
