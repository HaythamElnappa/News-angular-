import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './detailsComponent/details.component';
import { MainComponent } from './mainComponent/main.component';
import { DepartmentNewsComponent } from './department-newsComponent/department-news.component';
import { HomeComponent } from './homeComponent/home.component';

const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path:'department-newsComponent/:id' , component:DepartmentNewsComponent},
  {path : 'detailsComponent/:id' , component:DetailsComponent},
  {path:'**' , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
