import { Component, OnInit } from '@angular/core';
import { Track } from '../tab1/tab1.page';

@Component({
  selector: 'app-hiphop',
  templateUrl: './hiphop.page.html',
  styleUrls: ['./hiphop.page.scss'],
})
export class HiphopPage implements OnInit {

  constructor() { }

  liste: Track[]=[
    {
      name :'1.Castle' ,
      path : '',
    }
 

  ];
  ngOnInit() {
  }

}
