import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from'@angular/http';
import {FormsModule} from '@angular/forms';

//third-party imports

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CseCoursesComponent } from './cse-courses/cse-courses.component';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing';
import { HomeComponent } from './home/home.component';
import { SafePipe } from './utility/safe.pipe';
import { SearchComponent } from './search/search.component';

import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailComponent,
    SafePipe,
    HomeComponent,
    CseCoursesComponent,
    SearchComponent,
    SearchDetailComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
