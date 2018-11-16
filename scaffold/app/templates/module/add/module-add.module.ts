import {{ NgModule }} from '@angular/core';
import {{ CommonModule }} from '@angular/common';

import {{ {Resource}AddRoutingModule }} from './{resource}-add-routing.module';
import {{ {Resource}AddComponent }} from './{resource}-add.component';
import {{ PageHeaderModule }} from '../../shared';
import {{ ReactiveFormsModule }} from '@angular/forms';


@NgModule({{
    imports: [CommonModule, {Resource}AddRoutingModule, PageHeaderModule,  ReactiveFormsModule],
    declarations: [{Resource}AddComponent]
}})
export class {Resource}AddModule {{}}