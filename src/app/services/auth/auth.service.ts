import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import * as firebase from 'firebase';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<User>;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
  ) { }

  async signOut() {
    return await this.afAuth.auth.signOut()
      .then(() => console.log('User Logged Out'))
      .catch((error) => console.log(error))
      .finally(() => { this.router.navigate(['/']); });
  }

  // Google Sign In//
  isUserEqual(googleUser, firebaseUser) {
    if (firebaseUser) {
      const providerData = firebaseUser.providerData;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()) {
          return true;
        }
      }
      return false;
    }
  }

  onSignIn(googleUser, isUserEqual, providerData, response) {

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/drive.file');
    provider.addScope('https://www.googleapis.com/auth/spreadsheets');

    const unsubscribe = firebase.auth().onAuthStateChanged(async (firebaseUser) => {
      unsubscribe();
      if (!isUserEqual(googleUser, firebaseUser)) {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.getAuthResponse().id_token);
        firebase.auth().signInWithCredential(credential).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const errorEmail = error.email;
          const errorcredential = error.credential;

          console.log(`${errorCode}`, `${errorMessage}`, `${errorEmail}`, `${errorcredential}`);
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
    });
  }

}

