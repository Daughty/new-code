import { NgModule }        from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CseCoursesComponent } from './cse-courses/cse-courses.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';

import { HomeComponent } from './home/home.component';
import { VideoListComponent } from'./video-list/video-list.component';
import { VideoDetailComponent } from'./video-detail/video-detail.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';

const appRoutes: Routes = [
   
   {
 	path:"",
 	component: HomeComponent,
 },
 {
 	path:"Computer",
 	component:CseCoursesComponent,
 },
  {
 	path:"videos",
 	component: VideoListComponent,
 },
 {
 	path:"search",
 	component: SearchDetailComponent,
 },
 {
 	path:"videos/:slug",
 	component: VideoListComponent,
 },
 {
 	path:"Computer/:slug",
 	component:VideoListComponent,
 },
 {
 	path:"Sign up",
 	component:RegisterComponent,
 },
 {
 	path:"Sign In",
 	component:SignInComponent ,
 }
 
 

 
]

@NgModule({
	imports:[
      RouterModule.forRoot(
	       appRoutes
	  )
	],
	exports: [
        RouterModule
	 ]
})
export class AppRoutingModule { }

