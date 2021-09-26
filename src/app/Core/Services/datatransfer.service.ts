import { Injectable } from '@angular/core';
import {Observable, Subject } from 'rxjs'
import { JSONRESPONSE } from 'src/app/DTOs/JSONRESPONSE';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {

  private subject = new Subject<any>();

  sendMessage(message : JSONRESPONSE)
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
