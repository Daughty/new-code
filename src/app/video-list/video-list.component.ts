  import { Component, OnInit, OnDestroy } from '@angular/core';
  import { DomSanitizer }  from'@angular/platform-browser'
  import { ActivatedRoute } from '@angular/router'
  import { VideoService } from '../videos/videos.service';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService]
})
export class VideoListComponent implements OnInit ,OnDestroy{
     private req: any;
     private routeSub:any;
     private req1:any;
     title ="VideoList"
   
     videoList : [any];
     video:any;
     slug:string;
    
  constructor(private sanitizer: DomSanitizer ,private route:ActivatedRoute,private _video:VideoService) { }

  ngOnInit() {
     this.routeSub=this.route.params.subscribe(params=>{
       console.log(params)
       this.slug = params['slug']
       this.req1=this._video.list().subscribe(data=>{
         data.filter(item=>{
           if(item.slug == this.slug){
             this.video = item.videos
           }
         })
       })
       })
   	// this.req = this._video.list().subscribe(data=>{
     //this.videoList = data as [any];
   // })
  }
  ngOnDestroy(){
     this.req1.unsubscribe()
  }

  getEmbedUrl(item ,video)
  {
  	return 'https://www.youtube.com/embed/'+item.embed+'';
  }

}
