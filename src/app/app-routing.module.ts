import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { TodoComponent } from './pages/todo/todo.component';
import { PrivacyPolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { ImprintComponent } from './pages/imprint/imprint.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
