import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UykuPageRoutingModule } from './uyku-routing.module';

import { UykuPage } from './uyku.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UykuPageRoutingModule
  ],
  declarations: [UykuPage]
})
export class UykuPageModule {}
