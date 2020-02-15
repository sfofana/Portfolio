import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';
import { SkillComponent } from './skill-matrix/skill/skill.component';
import { WorkComponent } from './work-experience/work/work.component';
import { ProjectsComponent } from './project/projects/projects.component';
import { FreeComponent } from './freelance/free/free.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent}, 
  {path: 'skills',component: SkillComponent}, 
  {path: 'projects',component: ProjectsComponent}, 
  {path: 'work',component: WorkComponent}, 
  {path: 'freelance',component: FreeComponent}, 
  {path: '**',pathMatch: 'full',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
