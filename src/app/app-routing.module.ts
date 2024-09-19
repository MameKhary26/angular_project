import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { BienListComponent } from './components/bien-list/bien-list.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { HomeComponent } from './home/home.component';
import { DirectionComponent } from './direction/direction.component';
// import{ loginGuard } from '. /guard/login.guard';

const routes: Routes = [

  { 
    path: '', 
    component: AccueilComponent,
    // pathMatch: 'full'
  },
  { 
    path: 'accueil', 
    component: AccueilComponent
  },

  { 
    path: 'direction', 
    component: DirectionComponent
  },

  { 
    path: 'inscription', 
    component: InscriptionComponent,
  },

  { path: 'login',
     component: LoginComponent,
   },

   { 
    path: 'user-list', 
    component: UserListComponent,
    // pathMatch: 'full'
  },

  {
    path: 'bien-list',
    component: BienListComponent,
  },

  {
    path: 'transaction-list',
    component: TransactionListComponent,
  },
  //  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
