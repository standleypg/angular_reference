import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuardGuard } from './guards/app-guard.guard';
import { ChildAComponent } from './pages/child-a/child-a.component';
import { ChildBComponent } from './pages/child-b/child-b.component';
import { MissingPageComponent } from './pages/missing-page/missing-page.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';

const routes: Routes = [
  {
    path: 'page1/:id',
    component: Page1Component,
    children: [
      { path: 'child-a', component: ChildAComponent },
      { path: 'child-b', component: ChildBComponent },
    ],
  },
  { path: 'page2', component: Page2Component, canActivate: [AppGuardGuard] },
  { path: '**', component: MissingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
