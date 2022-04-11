import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialComponent } from './components/social/social.component';
import { AboutComponent } from './components/about/about.component';
import { SocioComponent } from './components/socio/socio.component';
import { HomeComponent } from './components/Home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'social', component: SocialComponent },
  {path: 'about', component: AboutComponent },
  {path: 'socio/:id', component: SocioComponent },
  {path: '', pathMatch:'full', redirectTo:'social'},
  {path: '**', pathMatch:'full', redirectTo:'social'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
