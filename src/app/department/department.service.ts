import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { department } from './department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private _httpClient:HttpClient) { }


  getAll(){
    return this._httpClient.get(`${environment.URLapi}/News/Departments`);
  }

  


  getMenuItems(departments:department[]){
    return departments.filter(item=>item.ShowInMainMenu)
  }

}
