import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

interface Contact {
  type: string,
  link: string,
  croppedLink: string,
  icon: string
}

@Component({
  selector: 'app-contact',
  imports: [NgFor, ButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public contactModes: Contact[] = [
    {
      type: 'LinkedIn',
      link: 'https://www.linkedin.com/in/christelle-souka/',
      croppedLink: 'linkedin.com/in/christelle-souka/',
      icon: 'pi pi-linkedin'
    },
    {
      type: 'Email',
      link: 'mailto:soukachristelle@gmail.com',
      croppedLink: 'soukachristelle@gmail.com',
      icon: 'pi pi-envelope'
    },
    {
      type: 'GitHub',
      link: 'https://github.com/Crii-san',
      croppedLink: 'github.com/Crii-san',
      icon: 'pi pi-github'
    }
  ];
}