import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './shared/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PickedComponent } from './picked/picked.component';
import { RoutingModule } from './routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    SidebarComponent,
    PickedComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
