import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectFormComponent } from './project-form/project-form.component';

@NgModule({
  declarations: [ProjectListComponent, ProjectFormComponent],
  imports: [CommonModule, ProjectRoutingModule, ReactiveFormsModule]
})
export class ProjectModule {}
