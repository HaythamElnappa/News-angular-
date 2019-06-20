import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news/news.service';
import { news } from '../news/news.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news:news[]
  constructor(private _newsService:NewsService) { }

  ngOnInit() {
    this._newsService.getDepartmentNews(61).subscribe(res=>{
      this.news = res as news[]
    })
  }

}
