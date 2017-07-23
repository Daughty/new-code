import { Directive, Component, OnInit,OnDestroy } from '@angular/core';
import { VideoService } from '../videos/videos.service';
import{ trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
 

@Component({
  selector: 'app-cse-courses',
  templateUrl: './cse-courses.component.html',
  styleUrls: ['./cse-courses.component.css'],
  providers:[VideoService],

})
export class CseCoursesComponent implements OnInit,OnDestroy {
  private req: any;
  title:'Courses';
  courseList:[any];
 
  constructor(private _video:VideoService) { }

  ngOnInit() {
     this.req = this._video.list1().subscribe(data=>{
     this.courseList = data as [any];
     

     })
  }
   ngOnDestroy(){
     this.req.unsubscribe()
  }
 // course(event:MouseEvent,image:any){
  	      //image.setAttribute("href","videos")

  		
  	//}

}
