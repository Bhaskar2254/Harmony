import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      title: 'Why choose us to train your security personnel?',
      description: 'This is the description for Service 1.',
      imageUrl: 'watch1.jpg',
    },
    {
      title: 'Security Guard Basic Training Programme',
      description: 'Security Guard Basic Training Programme',
      imageUrl: 'watch2.jpg',
    },
    {
      title: 'Service 3',
      description: 'This is the description for Service 3.',
      imageUrl: 'watch3.jpg',
    }
  ];
}
