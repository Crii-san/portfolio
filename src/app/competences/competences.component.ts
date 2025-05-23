import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-competences',
  imports: [CardModule, CommonModule],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css'
})
export class CompetencesComponent {
  public competences: string[] = ['php', 'html', 'css', 'typescript'];
}
