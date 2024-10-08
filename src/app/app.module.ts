import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './components/user-list/user-list.component';
import { BienListComponent } from './components/bien-list/bien-list.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor.service';
import { HomeComponent } from './home/home.component';
import { DirectionComponent } from './direction/direction.component';
import { LocationComponent } from './location/location.component';
import { VenteComponent } from './vente/vente.component';
import { GestionnaireComponent } from './gestionnaire/gestionnaire.component';
import { BienFormComponent } from './bien-form/bien-form.component';
import { ProprietaireComponent } from './proprietaire/proprietaire.component';
import { LocationFormComponent } from './location-form/location-form.component';
import { AuthService } from './auth.service';
import { VenteFormComponent } from './vente-form/vente-form.component';
import { ListeBienDispoComponent } from './liste-bien-dispo/liste-bien-dispo.component';
import { MesTransactionsComponentComponent } from './mes-transactions-component/mes-transactions-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    LoginComponent,
    AccueilComponent,
    UserListComponent,
    BienListComponent,
    TransactionListComponent,
    DirectionComponent,
    LocationComponent,
    VenteComponent,
    GestionnaireComponent,
    BienFormComponent,
    ProprietaireComponent,
    LocationFormComponent,
    VenteFormComponent,
    ListeBienDispoComponent,
    MesTransactionsComponentComponent,
    // HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
