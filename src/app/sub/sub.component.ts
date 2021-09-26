import { Component, OnInit } from '@angular/core';
import { JSONRESPONSE } from '../DTOs/JSONRESPONSE';
import { StoreListSingleton } from '../Singletons/StoreListSingleton';
import { BehaviorSubject } from 'rxjs';
import { MainComponent } from '../main/main.component';
import { DatatransferService } from '../Core/Services/datatransfer.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent implements OnInit {


  Value : JSONRESPONSE[] = [];

  public JSONObject! : JSONRESPONSE;
   constructor(private message: DatatransferService) { 
  }

  ngOnInit(): void {
    this.message.getMessage().subscribe(messageobject => {
      if (messageobject)
      {
        if(this.Value.filter(a => a.id === messageobject.id).length === 0)
        {
        this.Value.push(messageobject);
        }
        
      }
    })
 }

}
