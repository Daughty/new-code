  import { Component, OnInit, OnDestroy } from '@angular/core';
  import { DomSanitizer }  from'@angular/platform-browser'
  import { ActivatedRoute } from '@angular/router'
  import { VideoService } from '../videos/videos.service';
  import { YoutubePlayerModule } from 'ng2-youtube-player';
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
     title :string
     desc:string;
     img:[any];
     count:[number];
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
             this.desc = item.desc
             this.img = item.image
             this.title = item.name
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

  //savePlayer (player) {
    //this.player = player;
    //console.log('player instance', player)
    //}
  //onStateChange(event){
    //console.log('player state', event.data);
  //}

  }


