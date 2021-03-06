import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hire-trailer';

  clients: any;

  rentals = [{
    client: "Tshego Sebata",
    date: "2019-07-02 15:44:10.830",
    trailer: "CP 55 VV GP"
  },
  {
    client: "shade Samba",
    date: "2019-07-02 15:44:10.830",
    trailer: "CP 55 VV GP"
  }];

  trailers = [{
    registration: "CP 55 VV GP",
    isRented: true,
    isBooked: false,
    clientRenting: "Tshego Sebata"
  },
  {
    registration: "CP 55 VV GP",
    isRented: false,
    isBooked: false,
    clientRenting: ""
  }]

  constructor(private app: AppService) {
    this.app.getList('home').subscribe(response => 
    {
      alert(JSON.stringify(response.clients))
      this.clients = response.clients;
    }, err => {
      console.log(err)
    });
  }
}
