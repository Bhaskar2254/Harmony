import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-header-banner',
  standalone: false,
  
  templateUrl: './header-banner.component.html',
  styleUrl: './header-banner.component.css'
})
export class HeaderBannerComponent {
  @Input() backgroundImage: string = '';
  @Input() title: string = 'Default Title';
  @Input() text: string = 'Default text content for the banner.';
}
