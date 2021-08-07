import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonLayoutRoutingModule } from './common-layout-routing.module';
import { HomeComponent } from './home/home.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CommonLayoutComponent } from './common-layout.component';


@NgModule({
  declarations: [
    HomeComponent,
    ArticleDetailComponent,
    CommonLayoutComponent,
  ],
  imports: [
    CommonModule,
    CommonLayoutRoutingModule
  ],
  exports: [
  ]
})
export class CommonLayoutModule { }
