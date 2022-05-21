import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './src/main/aboutme/aboutme.component';
import { ExperienceComponent } from './src/main/experience/experience.component';
import { HomeComponent } from './src/main/home/home.component';

const routes: Routes = [
  {path: 'menu/experience', component: ExperienceComponent},
  {path: 'menu/aboutme', component: AboutmeComponent},
  {path: 'menu/home', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
