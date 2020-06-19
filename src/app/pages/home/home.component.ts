import { Component, OnInit } from '@angular/core';

// Services
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles = [];
  categories = [
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology'
  ]
  countries = [
    {
      name: 'Mexico',
      code: 'mx'
    },
    {
      name: 'United States',
      code: 'us'
    },
    {
      name: 'Argentina',
      code: 'ar'
    },
    {
      name: 'Colombia',
      code: 'co'
    },
    {
      name: 'Venezuela',
      code: 've'
    },
  ]

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getAllNews('mx');
  }

  getAllNews(country: string) {
    this.api.getAllNews(country).subscribe((news: any) => {
      const { articles } = news;
      this.articles = articles;
    });
  }

  getCategory(category: string) {
    this.api.getCategory(category).subscribe((news: any) => {
      const { articles } = news;
      this.articles = articles;
    });
  }

  getCountry(country: string) {
    this.api.getCountry(country).subscribe((news: any) => {
      const { articles } = news;
      this.articles = articles;
    });
  }
}
