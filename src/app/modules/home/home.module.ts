import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { ListItemsComponent } from './list/list-items/list-items.component';
import { HomeTabComponent } from './components/home-tab/home-tab.component';
import { ListFormComponent } from './list/list-form/list-form.component';
import { FormsModule } from '@angular/forms';
import { CardFormComponent } from './list/card-form/card-form.component';
import { OrderByPipe } from './pipes/order-by-pipe';

@NgModule({
  declarations: [
    ListItemsComponent,
    HomeTabComponent,
    ListFormComponent,
    CardFormComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class HomeModule { }
