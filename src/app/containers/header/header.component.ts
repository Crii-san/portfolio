import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public sections: string[] = ['à propos', 'compétences', 'projets', 'contact'];
  public icon!: string;

  ngOnInit() {
    const element = document.querySelector('html');
    if (element?.classList.contains('my-app-dark')) {
      this.icon = 'pi pi-sun';
    } else {
      this.icon = 'pi pi-moon';
    }
  }

  public toggleDarkMode(): void {
    const element = document.querySelector('html');
    if (element?.classList.contains('my-app-dark')) {
      this.icon = 'pi pi-moon';
      element?.classList.remove('my-app-dark');
    } else {
      this.icon = 'pi pi-sun';
      element?.classList.toggle('my-app-dark');
    }
  }
}
