import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicPage } from './Music.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MusicPageRoutingModule } from './Music-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MusicPageRoutingModule
  ],
  declarations: [MusicPage]
})
export class MusicPageModule {}
