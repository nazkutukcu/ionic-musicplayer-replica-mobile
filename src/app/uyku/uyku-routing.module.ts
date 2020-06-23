import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UykuPage } from './uyku.page';

const routes: Routes = [
  {
    path: '',
    component: UykuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UykuPageRoutingModule {}
