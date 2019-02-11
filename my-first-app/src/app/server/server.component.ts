import {Component} from '@angular/core';

// @ts-ignore
@Component( {
  selector: 'app-server',
  templateUrl: './server.component.html'
} )
export class ServerComponent{
  serverID: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }

}
