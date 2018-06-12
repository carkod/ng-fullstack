import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // { path: '', redirectTo: '/dash', pathMatch: 'full' },
    // { path: '', component: Hom },
    // { path: 'heroes', component: HeroesComponent },
    
    // { path: 'detail/:id', component: HeroDetailComponent },

];


@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
  })

export class RoutingModule {

}