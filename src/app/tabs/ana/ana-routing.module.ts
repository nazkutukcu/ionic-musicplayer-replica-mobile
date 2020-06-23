import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnaPage } from './ana.page';

const routes: Routes = [
  {
    path: '',
    component: AnaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnaPageRoutingModule {}
