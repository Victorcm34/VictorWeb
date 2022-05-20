import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { AppSettings } from "../AppSettings";

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  getSettings(): Observable<AppSettings>{
    let settings = new AppSettings();
    return of<AppSettings>(settings);
  }
}
