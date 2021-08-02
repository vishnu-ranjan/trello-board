import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTabComponent } from './modules/home/components/home-tab/home-tab.component';
import { ListItemsComponent } from './modules/home/list/list-items/list-items.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home/board'
  },
  {
    path: 'home',
    component: HomeTabComponent,
    children: [{
      path: 'board',
      component: ListItemsComponent,
    }]
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
