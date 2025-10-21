import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { NgFor } from '@angular/common';
import { section } from '../header.component';

@Component({
  selector: 'app-burger-menu',
  imports: [NgFor],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.css'
})
export class BurgerMenuComponent implements AfterViewInit, OnInit, OnDestroy {

  @Input() showBurgerMenu: boolean = false;
  
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Ajout de la classe pour déclencher l'ouverture avec animation
    requestAnimationFrame(() => {
      this.renderer.addClass(this.el.nativeElement, 'open');
    });
  }
  
  ngOnInit() {
    document.body.classList.add('no-scroll');
  }

  ngOnDestroy() {
    document.body.classList.remove('no-scroll');
  }


  public sections: section[] = [
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

  @Output() closeBurgerMenu: EventEmitter<boolean> = new EventEmitter();

  public onCloseBurgerMenu(): void {
    const element = this.el.nativeElement;

    this.renderer.removeClass(element, 'open');
    this.renderer.addClass(element, 'close');

    // Écoute la fin de la transition pour enlever la classe .close
    const onTransitionEnd = () => {
      this.renderer.removeClass(element, 'close');
      element.removeEventListener('transitionend', onTransitionEnd);
      this.closeBurgerMenu.emit(true);  // émission ici après fermeture visuelle
    };

    element.addEventListener('transitionend', onTransitionEnd);
  }


  public scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.onCloseBurgerMenu();
  }

}
