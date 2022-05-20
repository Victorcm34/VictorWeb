import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/AppSettings';
import { AppSettingsService } from '../../AppSettings.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  settings: AppSettings = new AppSettings;
  experience : any;

  constructor(private http: HttpClient, private settingsService: AppSettingsService) {
    this.settingsService.getSettings().subscribe(s => this.settings = s, () => null)
   }

  ngOnInit(): void {
    this.http.get(this.settings.backendUrl+'experience').subscribe(data => {
      this.experience = data
    });
  }

}
