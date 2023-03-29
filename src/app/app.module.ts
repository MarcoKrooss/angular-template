import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { TodoComponent } from './pages/todo/todo.component';
import { PrivacyPolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { ImprintComponent } from './pages/imprint/imprint.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotfoundComponent,
    TodoComponent,
    PrivacyPolicyComponent,
    ImprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
