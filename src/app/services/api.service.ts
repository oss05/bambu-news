import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllNews(country: string) {
    const url = `${this.baseUrl}country=${country}&apiKey=a1eceddfc8c54da599014f86ad7043df`;
    return this.http.get(url);
  }

  getCategory(category: string) {
    const url = `${this.baseUrl}country="mx"&category=${category}&apiKey=a1eceddfc8c54da599014f86ad7043df`;
    return this.http.get(url);
  }

  getCountry(country: string) {
    const url = `${this.baseUrl}country=${country}&apiKey=a1eceddfc8c54da599014f86ad7043df`;
    return this.http.get(url);
  }


}
