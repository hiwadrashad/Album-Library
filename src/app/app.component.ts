import { Component, OnInit } from '@angular/core';
import { JSONRESPONSE } from './DTOs/JSONRESPONSE';
import { APIService } from './Core/Services/api.service'; 
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import { StoreListSingleton } from './Singletons/StoreListSingleton';

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'PhotoLibrary';
  JSONPOSTS! : JSONRESPONSE[];
  JSONSAVELIST! : JSONRESPONSE[];
  
  constructor(public apiserice : APIService, public httpClient : HttpClient)
  {     
    let test = this.httpClient.get<any>("https://jsonplaceholder.typicode.com/photos");
    test.subscribe(
    response =>{
      this.JSONPOSTS = response;
    }
    
  );
  }

  ngOnInit(): void {
  }

  AddToList(ItemId : number)
  {
  }
}
