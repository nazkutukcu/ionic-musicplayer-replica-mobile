import { Component, OnInit } from '@angular/core';
import { Track } from '../Music/Music.page';

@Component({
  selector: 'app-rock',
  templateUrl: './rock.page.html',
  styleUrls: ['./rock.page.scss'],
})
export class RockPage implements OnInit {

  liste: Track[]=[
    {
      name :'1.Bohemian Rhapsody' ,
      path : '',
    },
    {
      name: '2.Zombie',
      path : '',
    }
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
