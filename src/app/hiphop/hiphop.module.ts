import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HiphopPageRoutingModule } from './hiphop-routing.module';

import { HiphopPage } from './hiphop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HiphopPageRoutingModule
  ],
  declarations: [HiphopPage]
})
export class HiphopPageModule {}
