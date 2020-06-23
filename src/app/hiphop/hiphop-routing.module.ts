import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HiphopPage } from './hiphop.page';

const routes: Routes = [
  {
    path: '',
    component: HiphopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiphopPageRoutingModule {}
