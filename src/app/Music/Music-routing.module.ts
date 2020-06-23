import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicPage } from './Music.page';

const routes: Routes = [
  {
    path: '',
    component: MusicPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicPageRoutingModule {}
