import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestsRoutingModule } from './tests-routing.module';
import { TestsComponent } from './tests.component';
import { PageHeaderModule } from '../shared';

@NgModule({
    imports: [CommonModule, TestsRoutingModule, PageHeaderModule],
    declarations: [TestsComponent]
})
export class TestsModule {}
