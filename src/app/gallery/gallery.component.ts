import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: false,
  
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images = [
    { src: '/Gallery/fire1.jpg', alt: 'Watchman on duty at the main gate.' },
    { src: '/Gallery/fire2.jpg', alt: 'Training session on surveillance techniques.' },
    { src: '/Gallery/fire3.jpg', alt: 'Watchman on duty at the main gate.' },
    { src: '/Gallery/fire4.jpg', alt: 'Training session on surveillance techniques.' },
    { src: '/Gallery/fire5.jpg', alt: 'Watchman on duty at the main gate.' },
    { src: '/Gallery/fire6.jpg', alt: 'Training session on surveillance techniques.' },
    { src: '/Gallery/fire7.jpg', alt: 'Training session on surveillance techniques.' }
   
  ];
}
