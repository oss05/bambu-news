import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// Components
import { HomeComponent } from './home.component';

// Pipes
import {TruncatePipe} from '../../pipes/truncate.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TooltipModule.forRoot(),
    
  ]
})
export class HomeModule { }
