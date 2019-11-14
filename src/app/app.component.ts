import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { SharedService } from 'projects/micro-one/src/app/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'micro-front';
  choosenMicro = null;
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
  @ViewChild('divRef', { static: true }) divRef;
  constructor(private sanitizer: DomSanitizer, private sharedService: SharedService) {
    console.log(window)
    console.log(this.sharedService)
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      // resolve if already loaded
      if (document.querySelectorAll(`script[src='${name}']`).length !== 0) {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      } else {
        // load script
        const script: any = document.createElement('script');
        script.type = 'text/javascript';
        script.src = name;
        // cross browser handling of onLoaded event
        if (script.readyState) {  // IE
          script.onreadystatechange = () => {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
              script.onreadystatechange = null;
              resolve({ script: name, loaded: true, status: 'Loaded' });
            }
          };
        } else {  // Others
          script.onload = () => {
            resolve({ script: name, loaded: true, status: 'Loaded' });
          };
        }
        script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
        // finally append the script tag in the DOM
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }

  public toggleMicroOne() {
    this.loadScript('elements/micro-one.js').then((info) => {
      for (let i = 0; i < this.divRef.nativeElement.children.length; i++) {
        this.divRef.nativeElement.children[i].remove();
      }
      const microone = document.createElement('micro-one') as any;
      microone.test = 'Hello, world!';
      //microone.service = this.dummyService;  // <-- ERROR: TypeScript knows this should be a string.
      //microone.data = this.data;
      this.divRef.nativeElement.appendChild(microone);
      this.choosenMicro = 'one';

      const button = document.createElement('button-el') as any;
      //microone.service = this.dummyService;  // <-- ERROR: TypeScript knows this should be a string.
      //microone.data = this.data;
      this.divRef.nativeElement.appendChild(button);
      this.choosenMicro = 'one';
      console.log(window['ng']);
      console.log(this.sharedService);
      this.sharedService.sharedVar$.next('jeden')
    });
  }

  public toggleMicroTwo() {

  }

}
