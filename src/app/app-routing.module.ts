import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';

const routes:Routes = [
  {path: 'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  
  declarations: []
})
export class AppRoutingModule { }
