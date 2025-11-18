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
      description: 'Property listing and management platform currently in development. Features advanced filtering by region, price, area, and bedrooms, agent profiles, seamless CRUD operations, and persistent data handling across sessions.',
      image: 'assets/img/coming-soon.jpg'
    },
  ];
}
