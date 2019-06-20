import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _httpClient:HttpClient) { }

  getTop(){
    return this._httpClient.get(`${environment.URLapi}/News/TopNews`);
  }

  getDetails(id:number){
    return this._httpClient.get(`${environment.URLapi}/News/item/${id}`);
  }

  getDepartmentNews(id:number){
    return this._httpClient.get(`${environment.URLapi}/News/Department/${id}`);
  }

  getFeaturedNews(){
    return this._httpClient.get(`${environment.URLapi}/News/FeaturedNews`);
  }

}
