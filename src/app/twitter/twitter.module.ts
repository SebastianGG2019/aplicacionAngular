import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwitterRoutingModule } from './twitter-routing.module';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { TwitterComponent } from './twitter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TwitterComponent
  ],
  imports: [
    CommonModule,
    TwitterRoutingModule,
    NgxTwitterTimelineModule,
    FormsModule
  ]
})
export class TwitterModule { }
