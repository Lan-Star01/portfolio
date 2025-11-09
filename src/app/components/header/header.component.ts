import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentSection: string = '';
  isMenuOpen: boolean = false;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.currentSection$.subscribe(section => {
      this.currentSection = section;
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
  }

  scrollToSection(sectionId: string): void {
    this.navigationService.scrollToSection(sectionId);
    this.isMenuOpen = false;
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  }
}
