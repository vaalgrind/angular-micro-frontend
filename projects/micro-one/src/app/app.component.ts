import { Component } from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { first } from 'rxjs/operators';
import { SharedService } from './shared.service';
@Component({
  selector: 'app-micro-one',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private sharedService: SharedService){
    this.sharedService.sharedVar$.subscribe(el =>{
      console.log(el);
      this.title = el;
    })
  }
  observable: Observable<any> = new Observable();
  title = 'Micro-one-1';
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;
  private ontest(){
    of('x');
  }
}
