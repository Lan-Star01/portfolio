import { Component } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  projects: Project[] = [
    {
      id: '01',
      title: 'RedSeam - E-Commerce Clothing Store',
      description: "A full-featured e-commerce web application for clothing shopping built with Angular and Firebase. Integrates with a real REST API for dynamic product data. Features include user authentication, product catalog with pagination, detailed product pages with color and size selection, shopping cart sidebar, and a comprehensive checkout form. Users can browse products, add items to cart, and complete purchases seamlessly.",
      image: 'assets/img/redseam.png',
      link: 'https://redseam-clothing-app.netlify.app/'
    },
    {
      id: '02',
      title: 'Coming Soon',
      description: 'This project is currently in development. Stay tuned for updates on this exciting new web application that will showcase modern development practices and innovative features.',
      image: 'assets/img/coming-soon.jpg'
    },
    {
      id: '03',
      title: 'Coming Soon',
      description: 'Another exciting project is on the way! This space will be updated soon with details about a new web application demonstrating advanced frontend development techniques.',
      image: 'assets/img/coming-soon.jpg'
    }
  ];
}
