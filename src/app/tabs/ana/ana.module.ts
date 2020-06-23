import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnaPageRoutingModule } from './ana-routing.module';

import { AnaPage } from './ana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnaPageRoutingModule
  ],
  declarations: [AnaPage]
})
export class AnaPageModule {}
