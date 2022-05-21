import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  about : any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/api/about').subscribe(data => {
      this.about = data
    });
  }

}
