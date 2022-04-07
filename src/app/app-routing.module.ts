import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialComponent } from './components/social/social.component';
import { CardComponent } from './components/card/card.component';
import { SocioComponent } from './components/socio/socio.component';

const routes: Routes = [
  {path: 'social', component: SocialComponent },
  {path: 'card', component: CardComponent },
  {path: 'socio/:id', component: SocioComponent },
  {path: '', pathMatch:'full', redirectTo:'social'},
  {path: '**', pathMatch:'full', redirectTo:'social'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
