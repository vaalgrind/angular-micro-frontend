import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sharedVar$: BehaviorSubject<any>= new BehaviorSubject<any>('test');
  constructor() { }
}
