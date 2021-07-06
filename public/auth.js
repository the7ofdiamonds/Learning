const auth = firebase.auth();

//Google Sign In//
function isUserEqual(googleUser, firebaseUser) {
    if (firebaseUser) {
        var providerData = firebaseUser.providerData;
        for (var i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.getBasicProfile().getId()) {
                return true;
            }
        }
        return false;
    }
};

function onSignIn(googleUser, providerData, response) {

    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/drive.file');
    provider.addScope('https://www.googleapis.com/auth/spreadsheets');

    var unsubscribe = firebase.auth().onAuthStateChanged(async function (firebaseUser) {
        unsubscribe();
        if (!isUserEqual(googleUser, firebaseUser)) {
            var credential = firebase.auth.GoogleAuthProvider.credential(
                googleUser.getAuthResponse().id_token);
            firebase.auth().signInWithCredential(credential).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            })
        } else {
            console.log('User already signed-in Firebase.');
        }
    });
};

var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function () {
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
        },
        {
            provider: 'microsoft.com',
            providerName: 'Microsoft',
            buttonColor: '#000000',
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

const ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

//Hide or Show UI
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (firebaseuser) => {
    if (firebaseuser) {
        const html = `
        <div><strong>Account Creation:</strong> ${firebaseuser.metadata.creationTime} <strong>Last Sign In:</strong> ${firebaseuser.metadata.lastSignInTime}</div>
        <div>${firebaseuser.displayName}</div>
        <div><img src="${firebaseuser.photoURL}" width="150px" height="150px"></div>
        <div><strong>Logged in as</strong> ${firebaseuser.email}</div>
        `;
        accountDetails.innerHTML = html;

        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        accountDetails.innerHTML = '';

        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}

//Real Time Listener
auth.onAuthStateChanged(firebaseuser => {
    if (firebaseuser) {
        console.log('User logged in:', firebaseuser);
        setupUI(firebaseuser);
    } else {
        setupUI();
    }
});

//Log Out
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('User Signed Out');
    });
    const account = document.querySelector('#modal-account');
    M.Modal.getInstance(account).close();
    const home = document.querySelector('#modal-home');
    M.Modal.getInstance(home).close();
});