import { Component, OnInit } from '@angular/core';
import { JSONRESPONSE } from './DTOs/JSONRESPONSE';
import { APIService } from './Core/Services/api.service'; 
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import { StoreListSingleton } from './Singletons/StoreListSingleton';
import { InputdatatransferService } from './Core/Services/inputdatatransfer.service';

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
  
  constructor(public apiserice : APIService, public httpClient : HttpClient, private message: InputdatatransferService)
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

  SearchQuery(query : any)
  {
    var searchquery : string = query.target.value;
      this.message.sendMessage(searchquery);
  }
}
