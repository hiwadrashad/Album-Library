import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { JSONRESPONSE } from './DTOs/JSONRESPONSE';

@Injectable({
  providedIn: 'root'
})
export class APIService {

responses! : JSONRESPONSE[];

  constructor(public httpClient : HttpClient) { }

  AssignResponses(){
     this.httpClient.get<any>("https://jsonplaceholder.typicode.com/photos").subscribe(
      response =>{
        this.responses = response;
      }
    );
  }

  GetResponses(): JSONRESPONSE[]
  {
      return this.responses;
  }


}
