import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';

import { JobListService } from './job-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';

const appRoutes: Routes = [
  
  { path: 'jobs', component:JobListComponent  },
  { path: 'favourites', component: FavouritesComponent},
  
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule ,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    BrowserAnimationsModule 
  ],
  providers: [JobListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
