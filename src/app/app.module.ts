import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { MainComponent } from './mainComponent/main.component';
import { AsideComponent } from './Shared/aside/aside.component';
import { HomeComponent } from './homeComponent/home.component';
import { DetailsComponent } from './detailsComponent/details.component';
import { DepartmentNewsComponent } from './department-newsComponent/department-news.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AsideComponent,
    HomeComponent,
    DetailsComponent,
    DepartmentNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
