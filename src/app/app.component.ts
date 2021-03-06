import { Component, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked {
  public path
  public subPath
  title = 'renta';

  ngAfterContentChecked() {  
    let arr = (window.location.href.split('/'))
    this.path = arr[arr.length - 1] 
    this.subPath = arr[arr.length - 2]
  }
}
