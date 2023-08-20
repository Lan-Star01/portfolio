import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isHeaderSticky = false;
  currentSection: string = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  scrollToSection(sectionId: string): void {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({behavior:'smooth'});
          }, 400)
          this.currentSection = sectionId;
        }
      else {
      console.error('Element not found:', sectionId);
    }
  }




}
