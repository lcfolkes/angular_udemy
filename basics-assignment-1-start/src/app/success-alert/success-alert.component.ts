import {Component, OnInit} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-success-alert',
  template: `
  <p>This is a warning, you are in danger!</p>
  `,
  styles: [
    `p{
      padding: 20px;
      background-color: mediumseagreen;
      border: 1px solid green;
    }`
  ]
  }
)
export class SuccessAlertComponent{

}
