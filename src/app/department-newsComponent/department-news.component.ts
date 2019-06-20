import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news/news.service';
import { ActivatedRoute } from '@angular/router';
import { news } from '../news/news.model';

@Component({
  selector: 'app-department-news',
  templateUrl: './department-news.component.html',
  styleUrls: ['./department-news.component.css']
})
export class DepartmentNewsComponent implements OnInit {

  id:number;
  news:news[]
  constructor(private _newsService:NewsService,private _activatedRout:ActivatedRoute) { }

  ngOnInit() {
    this._activatedRout.paramMap.subscribe(res=>{
      this.id = +res.get("id");
      this._newsService.getDepartmentNews(this.id).subscribe(res=>{
        this.news = res as news[]
        console.log(this.news)
      })
    })
  }

}
