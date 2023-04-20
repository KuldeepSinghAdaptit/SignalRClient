import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr"

@Injectable({
  providedIn: 'root'
})
export class SignalRClientService {
  private hubUrl:string ='';
  private hubConnection: signalR.HubConnection ;
  constructor() { }
  public startConnection = () => {
    this.hubUrl='https:/localhost:44380/notification';
    console.log('Notification'+this.hubUrl);
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .configureLogging(signalR.LogLevel.Debug)
                            .withUrl(this.hubUrl,{
                              skipNegotiation: true,
                              transport: signalR.HttpTransportType.WebSockets,
                            })
                            .build();

    this.hubConnection.start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));
};

public addTransferNotificationDataListener = () => {
  this.hubConnection.on('TransferNotificationData', (data) => {
    console.log(data);
    let obj=document.getElementById('divMsg');
    if(obj!=null)
    {
     let objTemp= document.getElementById('divMsg') as HTMLElement
      objTemp.innerHTML=data;
    }
  });
}
}
