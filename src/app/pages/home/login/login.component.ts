import { Component, OnInit } from '@angular/core';
import * as firebaseui from 'firebaseui';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    auth;
    ui;
    constructor(public authService: AuthService, public afAuth: AngularFireAuth) {
        const auth = firebase.auth();
        this.ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());

    }

    ngOnInit() {
        const uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult(authResult, redirectUrl) {
                    // User successfully signed in.
                    // Return type determines whether we continue the redirect automatically
                    // or whether we leave that to developer to handle.
                    return true;
                },
                uiShown() {
                    // The widget is rendered.
                    // Hide the loader.
                    document.getElementById('loader').style.display = 'none';
                }
            },
            // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
            signInFlow: 'popup',
            signInSuccessUrl: 'https://theorb-f3a48.firebaseapp.com/',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                {
                    provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    scopes: ['https://www.googleapis.com/auth/drive.file',
                        'https://www.googleapis.com/auth/spreadsheets'
                    ]
                }, {
                    provider: 'apple.com',
                    providerName: 'Apple',
                    buttonColor: '#000000',
                    iconUrl: ''
                },
                {
                    provider: 'microsoft.com',
                    providerName: 'Microsoft',
                    buttonColor: '#0000ff',
                    iconUrl: 'https://docs.microsoft.com/en-us/azure/active-directory/develop/media/howto-add-branding-in-azure-ad-apps/ms-symbollockup_mssymbol_19.png',
                    loginHintKey: 'login_hint',
                    scopes: [
                        'mail.read'
                    ],
                    customParameters: {
                        prompt: 'consent'
                    }
                },
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.PhoneAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            tosUrl: '<your-tos-url>',
            // Privacy policy url.
            privacyPolicyUrl: '<your-privacy-policy-url>'
        };
        // The start method will wait until the DOM is loaded.
        this.ui.start('#firebaseui-auth-container', uiConfig);

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
