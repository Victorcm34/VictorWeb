import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience : any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/api/experience').subscribe(data => {
      this.experience = data
    });
  }

}
