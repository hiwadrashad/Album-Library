import { Injectable } from '@angular/core';
import {Observable, Subject } from 'rxjs'
import { JSONRESPONSE } from 'src/app/DTOs/JSONRESPONSE';

@Injectable({
  providedIn: 'root'
})
export class InputdatatransferService {


  private subject = new Subject<any>();

  sendMessage(message : string)
  {
    this.subject.next(message);
  }

  clearMessages()
  {
    this.subject.next();
  }

  getMessage(): Observable<any>
  {
    return this.subject.asObservable();
  }

  constructor() { }
}
