import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { {Resource}EditRoutingModule } from './{resource}-edit-routing.module';
import { {Resource}EditComponent } from './{resource}-edit.component';
import { PageHeaderModule } from '../../shared';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, {Resource}EditRoutingModule,  PageHeaderModule,  ReactiveFormsModule],
  declarations: [{Resource}EditComponent]
})

export class {Resource}EditModule { }






