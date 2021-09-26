import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JSONRESPONSE } from '../DTOs/JSONRESPONSE';
import { finalize } from 'rxjs/operators'
import { StoreListSingleton } from './../Singletons/StoreListSingleton'
import { BehaviorSubject } from 'rxjs';
import { DatatransferService } from '../Core/Services/datatransfer.service';

function getRandomInt(max : number) {
  return Math.floor(Math.random() * max);
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  JSONPOSTS! : JSONRESPONSE[];
  ListSingleton! : StoreListSingleton;

  constructor(public httpClient : HttpClient, private message: DatatransferService) { 
    this.ListSingleton = StoreListSingleton.GetSingleton;
    let test = this.httpClient.get<any>("https://jsonplaceholder.typicode.com/photos");
    test.pipe( finalize(() => {
      
      this.JSONPOSTS.forEach(element => {
        let RNDNMBR = getRandomInt(4);
        if (RNDNMBR === 0)
        {
          element.genre = "Hip-Hop",
          element.songname = "ASAP Rocky"
          element.shownthumbnaulurl = "https://i.imgur.com/WHCLvMB.jpeg"
        }
        else
        if (RNDNMBR === 1)
        {
          element.genre = "Hip-Hop",
          element.songname = "Migos"
          element.shownthumbnaulurl = "https://media.pitchfork.com/photos/60c75eba0adf322603a001ab/1:1/w_600/Migos:%20Culture%20III.jpeg"
        }
        else
        if (RNDNMBR === 2)
        {
          element.genre = "Rap",
          element.songname = "Vinnie Paz"
          element.shownthumbnaulurl = "https://e.snmc.io/i/1200/s/9bd551bec8c54573ae62751c9f2c6413/3065554"
        }
        else
        if (RNDNMBR === 3)
        {
          element.genre = "Rock"
          element.songname = "Avenged Sevenfold"
          element.shownthumbnaulurl = "https://media.s-bol.com/y0QPoroQo3P/550x550.jpg"
        }
      });
    })).subscribe(
    response =>{
      this.JSONPOSTS = response;
    }
    
  );
  }

  ngOnInit(): void {
  }

  public AddToList(Id : number)
  {
    let JSONTOADD! : JSONRESPONSE;
    this.JSONPOSTS.forEach(element => {
      if (element.id === Id)
      {
        JSONTOADD = element;
      }
    });
    this.message.sendMessage(JSONTOADD);
  }

}
