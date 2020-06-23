import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private router: Router){}
  
  go(){
    this.router.navigateByUrl('/pop');
  }
  
  go1(){
    this.router.navigateByUrl('/rock');
  }
  
  go2(){
    this.router.navigateByUrl('/indie');
  }
  
  go3(){
    this.router.navigateByUrl('/jazz');
  }
  
  go4(){
    this.router.navigateByUrl('/hiphop');
  }

  go5(){
    this.router.navigateByUrl('/uyku');
  }
  
}
