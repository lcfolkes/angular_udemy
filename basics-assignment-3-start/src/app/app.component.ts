import { Component, OnInit } from '@angular/core';
import {timestamp} from 'rxjs-compat/operator/timestamp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayDetails = false;
  log = [];
  constructor() {
  }

  onDisplayDetails() {
    this.displayDetails = true;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  ngOnInit(): void {
  }

}
