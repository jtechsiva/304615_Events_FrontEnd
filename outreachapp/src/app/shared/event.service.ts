import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  noAuthHeader = {headers: new HttpHeaders({'NoAuth' : 'True' })};

  constructor(private httpClient: HttpClient) { }

  // Http Requests
  // Add New User
  addEvent(body){
    return this.httpClient.post(environment.apiBaseUrl +'/addEvent', body, this.noAuthHeader );
  }

   // Get the User List from User collections 
   getProjects(){
    return this.httpClient.get(environment.apiBaseUrl +'/getProjects');
  }

   // Get the User List from User collections 
   getEvents(){
    // return this.httpClient.get(environment.apiBaseUrl +'/getEvents');
    return this.httpClient.get(environment.apiBaseUrl +'/procEventDet');
  }

  getEvent(eventId: string){
    return this.httpClient.get(environment.apiBaseUrl +'/getEvent/' + eventId);
  }

  updateEventDet(eventId: string, body: any){
    console.log("updateEventDet - Inside");
    return this.httpClient.post(environment.apiBaseUrl +'/updateEvent/' + eventId, body, this.noAuthHeader);
  }

  
  deleteEventDet(eventId: string){
    console.log("deleteEventDet - Inside");
    return this.httpClient.delete(environment.apiBaseUrl +'/deleteEvent/' + eventId);
  }

  registerUser(eventId: string){
    console.log("registerUser - Inside");
    return this.httpClient.post(environment.apiBaseUrl +'/regUser/' + eventId,  this.noAuthHeader);
  }

}
