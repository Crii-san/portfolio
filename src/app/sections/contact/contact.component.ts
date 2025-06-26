import { NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

interface Contact {
  type: string,
  link: string,
  croppedLink: string,
  icon: string
}

@Component({
  selector: 'app-contact',
  imports: [NgFor, UpperCasePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public contactModes: Contact[] = [
    {
      type: 'linkedin',
      link: 'https://www.linkedin.com/in/christelle-souka/',
      croppedLink: 'linkedin.com/in/christelle-souka/',
      icon: 'assets/contact/linkedin.webp'
    },
    {
      type: 'email',
      link: 'mailto:soukachristelle@gmail.com',
      croppedLink: 'soukachristelle@gmail.com',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png'
    },
    {
      type: 'github',
      link: 'https://github.com/Crii-san',
      croppedLink: 'github.com/Crii-san',
      icon: 'assets/contact/github.png'
    }
  ];
}