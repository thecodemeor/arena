import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SafariGateComponent } from './games/safari-gate/safari-gate.component';

const routes: Routes = [
  { path: '', redirectTo: 'safari-gate', pathMatch: 'full' },
  { path: 'safari-gate', component: SafariGateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
