import { Component, OnInit } from '@angular/core';
import { Track } from '../Music/Music.page';

@Component({
  selector: 'app-jazz',
  templateUrl: './jazz.page.html',
  styleUrls: ['./jazz.page.scss'],
})
export class JazzPage implements OnInit {

  liste: Track[]=[
    {
      name :'1.I Love You Baby' ,
      path : '',
    },
    {
      name: '2.Hit The Road Jack',
      path : '',
    }
  
  ];

  constructor() { }

  ngOnInit() {
  }

}
