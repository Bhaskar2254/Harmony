import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import {HomeComponent} from './home/home.component';
import {ServicesComponent} from './services/services.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import { ClientsComponent } from './clients/clients.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TrainingComponent } from './training/training.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'client', component: ClientsComponent },
  {path: 'gallery', component:GalleryComponent},
  {path: 'training', component:TrainingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
