import { Component, OnInit } from '@angular/core';
import { Track } from '../tab1/tab1.page';

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
