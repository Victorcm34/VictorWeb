import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './src/menu/menu.component';
import { MainComponent } from './src/main/main.component';
import { ExperienceComponent } from './src/main/experience/experience.component';
import { AboutmeComponent } from './src/main/aboutme/aboutme.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './src/main/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    ExperienceComponent,
    AboutmeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
