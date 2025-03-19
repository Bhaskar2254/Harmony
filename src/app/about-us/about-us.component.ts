import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-about-us',
  standalone: false,
  
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit{
  people = [
    { image: '/Suraj.png', name: 'Mr.Suraj Shinde', position: 'CEO', description: 'Suraj Shinde has over 10 years of experience in the Security industry, leading innovative projects and teams.' },
    { image: '/modi1.jpg', name: 'Mrs. Namrata Bakre', position: 'HR Manager', description: 'Mrs. Namrata, with over 4 years of experience leverages her expertise to develop effective financial strategies that drive the growth and contribution in creating impactful solutions our organization' },
    { image: '/modi2.jpg', name: 'Mr. Tukaram Ganjave', position: 'Admin Officer', description: 'Admin Officer description here.' },
    { image: '/modi2.jpg', name: 'Mr. Tushar Jadhav', position: 'Admin Officer', description: 'Admin Officer description here.' }
  ];


clients = [
  { name: 'Client 1', imgSrc: './Godrej_Shrewood.png' },
  { name: 'Client 2', imgSrc: './logo.jpg' },
  { name: 'Client 3', imgSrc: './Knight Frank.svg' },
  { name: 'Client 4', imgSrc: './Godrej_Properties.png' },
  { name: 'Client 5', imgSrc: './yamaha.png' },
  { name: 'Client 6', imgSrc: './tvs.png' },
  { name: 'Client 7', imgSrc: 'https://rachanalifestyle.com/wp-content/uploads/2018/10/rachana-lifestyle-logo-606.png' },
  { name: 'Client 8', imgSrc: '/modi1.jpg' },
  { name: 'Client 9', imgSrc: '/modi2.jpg' }
];
visibleClients = this.clients.slice(0, 4); // Initially show first 4 clients
currentIndex = 0;

constructor() {}

ngOnInit(): void {}

// Move to the next client (to the right)
nextClient(): void {
  this.currentIndex = (this.currentIndex + 1) % this.clients.length; // Ensure cyclic behavior
  this.updateVisibleClients();
}

// Move to the previous client (to the left)
prevClient(): void {
  this.currentIndex = (this.currentIndex - 1 + this.clients.length) % this.clients.length; // Ensure cyclic behavior
  this.updateVisibleClients();
}

// Update the visible clients based on the currentIndex
updateVisibleClients(): void {
  this.visibleClients = [
    this.clients[(this.currentIndex + 0) % this.clients.length],
    this.clients[(this.currentIndex + 1) % this.clients.length],
    this.clients[(this.currentIndex + 2) % this.clients.length],
    this.clients[(this.currentIndex + 3) % this.clients.length]
  ];
}
}