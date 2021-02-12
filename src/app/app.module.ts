import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './signin/signin.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

import { RouterModule } from '@angular/router';
const firebaseConfig = {
  apiKey: 'AIzaSyCTgN7ir_r64lPUdHCg2AMN8wfEbmaGWEI',
  authDomain: 'ionic-d1ccc.firebaseapp.com',
  databaseURL: 'https://ionic-d1ccc.firebaseio.com',
  projectId: 'ionic-d1ccc',
  storageBucket: 'ionic-d1ccc.appspot.com',
  messagingSenderId: '360006124638',
  appId: '1:360006124638:web:65499d7f97e74b14c5a0cf',
  measurementId: 'G-J7YV6FTQWZ',
};
@NgModule({
  declarations: [AppComponent, SigninComponent, ProfileDetailsComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFirestoreModule, // firestore
    // AngularFireAuthModule, // auth
    // AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
