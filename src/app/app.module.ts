import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { RouterModule, Routes } from '@angular/router';
import {MyMaterialModule} from './modules/my-material.module'


import { AppComponent } from './app.component';
import { MainComponent } from './components/+main/main.component';
import { StateTalonComponent } from './components/+state-talon/state-talon.component';


const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'state-talon/:id', component: StateTalonComponent},
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: '**', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StateTalonComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    MyMaterialModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


