import { Component, OnInit } from '@angular/core';
import { Track } from '../Music/Music.page';

@Component({
  selector: 'app-uyku',
  templateUrl: './uyku.page.html',
  styleUrls: ['./uyku.page.scss'],
})
export class UykuPage implements OnInit {

  liste: Track[]=[
    {
      name :'1.Derin Uyku' ,
      path : '',
    }
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
