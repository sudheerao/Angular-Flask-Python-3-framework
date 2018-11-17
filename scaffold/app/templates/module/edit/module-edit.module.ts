import {{ NgModule }} from '@angular/core';
import {{ CommonModule }} from '@angular/common';
import {{ {Resources}RoutingModule }} from './{resources}-routing.module';
import {{ {Resource}EditComponent }} from './{resources}-edit.component';
import {{ PageHeaderModule }} from '../../shared';
import {{ ReactiveFormsModule }} from '@angular/forms';


@NgModule({{
  imports: [CommonModule, {Resources}RoutingModule,  PageHeaderModule,  ReactiveFormsModule],
  declarations: [{Resource}EditComponent]
}})

export class {Resource}EditModule {{ }}






