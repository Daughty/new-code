import { Injectable } from '@angular/core';
import { Http }      from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endpoint = 'assets/json/videos.json'
const endpoint1 = 'assets/json/courses.json'
@Injectable()
export class VideoService {

  constructor(private http:Http) { }

  list(){
  	return this.http.get(endpoint)
	  		.map(response=>response.json())
	  		.catch(this.handleError)
  }
  list1(){
  	return this.http.get(endpoint1)
	  		.map(response=>response.json())
	  		.catch(this.handleError)
  }

search(query){
	return this.http.get(endpoint)
	           .map(response=>{
	           			let data = []
	           			let req = response.json().filter(item=>{
	           				if(item.name.indexOf(query)>=0){
	           					data.push(item)
	           				}
	           			})
	           
	           	return data
	           })
	          .catch(this.handleError)
}

  private handleError(error:any,caught:any) :any {
  	console.log(error,caught)
  }

}
