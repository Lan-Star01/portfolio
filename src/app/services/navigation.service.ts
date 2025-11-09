import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private currentSectionSubject = new BehaviorSubject<string>('about');
  public currentSection$: Observable<string> = this.currentSectionSubject.asObservable();
  private sections = ['about', 'skills', 'experience', 'contact'];

  constructor() {
    this.initScrollListener();
  }

  private initScrollListener(): void {
    window.addEventListener('scroll', () => {
      this.updateActiveSection();
    });
  }

  private updateActiveSection(): void {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const sectionId of this.sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          if (this.currentSectionSubject.value !== sectionId) {
            this.currentSectionSubject.next(sectionId);
          }
          break;
        }
      }
    }
  }

  scrollToSection(sectionId: string): void {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        this.currentSectionSubject.next(sectionId);
      }, 400);
    }
  }

  getCurrentSection(): string {
    return this.currentSectionSubject.value;
  }
}
