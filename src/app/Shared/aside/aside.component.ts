import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../../news/news.service';
import { news } from '../../news/news.model';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  @Input() topNews:news[];
  @Input() title:string;

  constructor(private _newsService : NewsService) { }

  ngOnInit() {
    // this._newsService.getTop().subscribe(res=>{
    //   this.topNews = res as news[];
    //})
  }

}
