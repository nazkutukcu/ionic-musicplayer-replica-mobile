import { Component, OnInit } from '@angular/core';
import { Track } from '../Music/Music.page';

@Component({
  selector: 'app-indie',
  templateUrl: './indie.page.html',
  styleUrls: ['./indie.page.scss'],
})
export class IndiePage implements OnInit {

  liste: Track[]=[
    {
      name :'1.Do I Wanna Know' ,
      path : '',
    },
    {
      name: '2.I Wanna Be Yours',
      path : '',
    },
    {
      name: '3.Knee Socks',
      path : '',
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
