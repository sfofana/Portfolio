import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillComponent } from './components/skill/skill.component';
import { WorkComponent } from './components/work/work.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FreeComponent } from './components/free/free.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent}, 
  {path: 'skills',component: SkillComponent}, 
  {path: 'projects',component: ProjectsComponent}, 
  {path: 'work',component: WorkComponent}, 
  {path: 'freelance',component: FreeComponent}, 
  {path: 'contact',component: ContactComponent},
  {path: '**',pathMatch: 'full',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
