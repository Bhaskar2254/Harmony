import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-service',
  standalone: false,
  
  templateUrl: './security-service.component.html',
  styleUrl: './security-service.component.css'
})
export class SecurityServiceComponent {
  services = [
    '24/7 Surveillance',
    'Static guarding and control room monitoring',
    'Security Guards',
    'First Aid Medical Support',
    'Cybersecurity Solutions',
    'Emergency Response',
    'Risk Assessment/analysis',
    'VIP Protection',
    'Facility Management',
    'Consultation and Training'
  ];
}
