import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private currentSectionSubject = new BehaviorSubject<string>('about');
  public currentSection$: Observable<string> = this.currentSectionSubject.asObservable();

  constructor() { }

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
