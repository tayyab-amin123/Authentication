import { Component, OnInit } from '@angular/core';
// import { from } from 'rxjs';
// import * as firebase from 'firebase';
import firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

import { WindowService } from '../services/window.service';

import { OtpService } from '../services/otp.service';

import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
// import { from } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  windowRef: any;
  phoneNumber: any;
  verificationCode: any;
  user: any;
  code: number;
  cellno: number;
  token: string;

  constructor(
    private afAuth: AngularFireAuth,
    private win: WindowService,
    private opt: OtpService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.windowRef = this.win.windowRef;
    firebase.initializeApp(environment.firebaseConfig);
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
      }
    );
    this.windowRef.recaptchaVerifier.render();
  }
  signin() {
    const appVerifier = this.windowRef.recaptchaVerifier;
    this.afAuth
      .signInWithPhoneNumber('+92' + this.cellno, appVerifier)
      .then((result) => {
        this.windowRef.confirmationResult = result;
        console.log(result);
      })
      .catch((error) => console.log(error));
  }
  verifyLoginCode() {
    this.windowRef.confirmationResult
      .confirm(this.code)
      .then((result) => {
        this.user = result.user;
        console.log(result.user.uid);
        console.log(result, 'Success');
        firebase
          .auth()
          .currentUser.getIdToken(/* forceRefresh */ false)
          .then(function (idToken) {
            console.log('Start  ' + idToken + ' end');
            this.token = idToken;
          })
          .catch(function (error) {
            console.log(error);
          });
        this.router.navigate(['/profile-details'], {
          queryParams: {
            cellno: this.cellno,
            uid: result.user.uid,
            token: this.token,
          },
        });
      })
      .catch((error) => console.log(error, 'Incorrect code entered?'));
  }
}
