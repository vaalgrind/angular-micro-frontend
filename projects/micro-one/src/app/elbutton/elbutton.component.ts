import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-elbutton',
  templateUrl: './elbutton.component.html',
  styleUrls: ['./elbutton.component.scss']
})
export class ElbuttonComponent implements OnInit {

  constructor(private shared: SharedService) { }

  ngOnInit() {
  }

  click(){
    this.shared.sharedVar$.next('maciek');
  }

}
