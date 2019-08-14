import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeagueStructureComponent } from './league-structure/league-structure.component';
import { BlogComponent } from './blog/blog.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home' , component: HomeComponent},
{path: 'league-structure' , component: LeagueStructureComponent},
{path: 'blog' , component: BlogComponent},
{path: 'faqs' , component: FaqsComponent},
{path: 'register', component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
