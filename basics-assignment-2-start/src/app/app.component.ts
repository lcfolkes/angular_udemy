import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username = '';
  allowResetUsername = true;

  constructor() {
    this.allowResetUsername = false;
  }

  checkEmpty() {
    if (this.username !== '') {
      this.allowResetUsername = true;
    }
  }

  onResetUsername() {
    this.username = '';
    this.allowResetUsername = false;
  }
  ngOnInit(): void {
  }

}
