import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen: boolean = false;

  // Method to toggle the state of the menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Listen for window resize event to reset menu state
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Close the menu when resizing to laptop or desktop view (above 768px)
    if (window.innerWidth > 768) {
      this.isMenuOpen = false;
    }
  }
}
