import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news/news.service';
import { ActivatedRoute } from '@angular/router';
import { news } from '../news/news.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  
  constructor(private _newsService:NewsService, private _activatedRoute:ActivatedRoute) { 

  }
  id:number=0;

  news= new news();

  getdetails(id:number){
    this._newsService.getDetails(this.id).subscribe(
      res=>{
       this.news = res as news;
    });
  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(res=>{
      this.id = +res.get("id")
      this._newsService.getDetails(this.id).subscribe(res=>{this.news = res as news;})
      this.getdetails(this.id);
    });
    }

}
