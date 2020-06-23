import { Component, ViewChild } from '@angular/core' ;
import {Howl} from 'howler' ;

import { IonRange } from '@ionic/angular';


export interface Track{
  name: string;
  path: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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
    },
    {
      name:'Bohemian Rhapsody',
      path:'./assets/mp3/bohemian-rhapsody.mp3',
    },
    {
      name:'Zombie',
      path:'./assets/mp3/zombie.mp3',
    },
    {
      name:'I Love You Baby',
      path:'./assets/mp3/ILoveYouBaby.mp3',
    },
    {
      name:'Hit The Road Jack',
      path:'./assets/mp3/HitTheRoadJack.mp3',
    },
    {
      name:'Castle',
      path:'./assets/mp3/Castle.mp3',
    },
    {
      name:'Derin Uyku',
      path:'./assets/mp3/DerinUyku.mp3',
    },
    {
      name:'Break My Heart',
      path:'./assets/mp3/BreakMyHeart.mp3',
    },
    {
      name:'Rain On Me',
      path:'./assets/mp3/RainOnMe.mp3',
    },
    {
      name:'Watermelon Sugar',
      path:'./assets/mp3/WatermelonSugar.mp3',
    },
    {
      name:'Rockstar',
      path:'./assets/mp3/Rockstar.mp3',
    }

  ];
 activeTrack : Track = null;
 player : Howl = null;
 isPlaying = false;
 progress=0;
 @ViewChild('range',{ static:false}) range : IonRange;
  constructor() {}
 
start (track : Track){
  if(this.player){
    this.player.stop();
  }
 this.player = new Howl({
  src : [track.path],
  onplay:() => {
  console.log('onplay');
   this.isPlaying = true;
   this.activeTrack=track;
   this.updateProgress();
  },
  onend : () => {
    console.log('onend');

  }
 });
 this.player.play();
  }

togglePlayer(pause){
 this.isPlaying = !pause ;
 if(pause){
   this.player.pause();
 }else{
   this.player.play();
 }

}
 next(){
 let index= this.playlist.indexOf(this.activeTrack);
if(index != this.playlist.length-1){
  this.start(this.playlist[index+1]);
} else{
  this.start(this.playlist[0]);
}
 }
 prev(){
let index = this.playlist.indexOf(this.activeTrack);
if(index>0){
  this.start(this.playlist[index-1]);
}else{
  this.start(this.playlist[this.playlist.length-1]);
}


 }
seek(){
  let newValue = +this.range.value;
  let duration = this.player.duration();
  this.player.seek(duration * (newValue / 100 ));

}
updateProgress(){
  let seek = this.player.seek();
  this.progress = (seek / this.player.duration()) * 100 || 0;
  setTimeout(() => {
    this.updateProgress();

  },1000)
  
}
}
