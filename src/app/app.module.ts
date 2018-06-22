import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from'@angular/http';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {MatButtonModule,MatCardModule} from '@angular/material';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'

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
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailComponent,
    SafePipe,
    HomeComponent,
    CseCoursesComponent,
    SearchComponent,
    SearchDetailComponent,
    RegisterComponent,
    SignInComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    
    
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
