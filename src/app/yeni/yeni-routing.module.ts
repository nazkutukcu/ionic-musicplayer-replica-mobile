import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YeniPage } from './yeni.page';

const routes: Routes = [
  {
    path: '',
    component: YeniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YeniPageRoutingModule {}
