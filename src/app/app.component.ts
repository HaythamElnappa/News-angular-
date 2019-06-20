import { Component, OnInit } from '@angular/core';
import { NewsService } from './news/news.service';
import { news } from './news/news.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'News';
  
  topNews:news[]
  featuredNews:news[]
  topNewsTitle:string="Top News"
  featuredNewsTitle:string = "selected for you"

  constructor(private _newsService : NewsService) { }

  ngOnInit() {
    this._newsService.getTop().subscribe(res=>{this.topNews = res as news[];})
    this._newsService.getFeaturedNews().subscribe(res=>{this.featuredNews = res as news[];})
  }
}
