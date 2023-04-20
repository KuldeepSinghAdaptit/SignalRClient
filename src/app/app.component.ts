import { Component } from '@angular/core';
import { SignalRClientService } from './signal-rclient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SignalRClient';
  constructor(private signalRClientService:SignalRClientService)
  {

  }

  ngOnInit(): void {
    this.signalRClientService.startConnection();
    this.signalRClientService.addTransferNotificationDataListener();
 
  }
}
