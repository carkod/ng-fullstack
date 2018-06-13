import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PickedComponent } from './picked/picked.component';
import { ContentComponent } from './shared/content.component';

const routes: Routes = [
    // { path: '', redirectTo: '/dash', pathMatch: 'full' },
    { path: '', component: ContentComponent, children: [
        { path: 'home', component: HomeComponent },
        { path: 'picked', component: PickedComponent },
    ]},
    
    // { path: 'detail/:id', component: HeroDetailComponent },

];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})

export class RoutingModule {
    
}