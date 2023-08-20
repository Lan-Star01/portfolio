import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  scrollToSection(sectionId: string): void {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({behavior:'smooth'});
          }, 400)
        }
      else {
      console.error('Element not found:', sectionId);
    }
  }
  
}
