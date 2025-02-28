import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  downloadBrochure() {
    const brochureUrl = 'tvs.png'; // Update with actual file path
    window.open(brochureUrl, '_blank');
  }
}
