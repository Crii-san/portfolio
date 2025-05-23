import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public sections: string[] = ['à propos', 'compétences', 'projets', 'contact']
}
