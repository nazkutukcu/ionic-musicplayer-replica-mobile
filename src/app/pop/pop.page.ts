import { Component, OnInit } from '@angular/core';


export interface Track{
  name: string;
  path: string;
}
@Component({
  selector: 'app-pop',
  templateUrl: './pop.page.html',
  styleUrls: ['./pop.page.scss'],
})

export class PopPage implements OnInit {

  constructor() { }
  playlist: Track[]=[
    {
      name :'Do I Wanna Know' ,
      path : './assets/mp3/DoIWannaKnow.mp3',
    },
    {
      name: 'I Wanna Be Yours',
      path : './assets/mp3/IWannaBeYours.mp3',
    },
    {
      name: 'Knee Socks',
      path : './assets/mp3/KneeSocks.mp3',
    }

  ];

  ngOnInit() {
  }

}
