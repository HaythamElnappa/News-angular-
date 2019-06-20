import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department/department.service';
import { department } from 'src/app/department/department.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  departments:department[];
  constructor(private _departmentService:DepartmentService) {}


  ngOnInit() {
    this._departmentService.getAll().subscribe(res=>{
      console.log(this._departmentService.getMenuItems(res as department[]))
      this.departments= this._departmentService.getMenuItems(res as department[]);
    })
  }

  

}
