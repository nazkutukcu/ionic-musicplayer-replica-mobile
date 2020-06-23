import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YeniPageRoutingModule } from './yeni-routing.module';

import { YeniPage } from './yeni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YeniPageRoutingModule
  ],
  declarations: [YeniPage]
})
export class YeniPageModule {}
