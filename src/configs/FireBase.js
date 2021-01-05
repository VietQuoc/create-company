import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAvDGqBY7TUSGGbwC_DgljCZUr_nGAr-iA',
  authDomain: 'create-company-3aeee.firebaseapp.com',
  databaseURL: 'https://create-company-3aeee-default-rtdb.firebaseio.com',
  projectId: 'create-company-3aeee',
  storageBucket: 'create-company-3aeee.appspot.com',
  messagingSenderId: '516262890516',
  appId: '1:516262890516:web:58e07bca0d63109fb12b01',
  measurementId: 'G-BD4904K1NT'
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()

const googleProvider = new firebase.auth.GoogleAuthProvider()
const facebookProvider = new firebase.auth.FacebookAuthProvider()
export const signInWithGoogle = (callback) => {
  auth.signInWithPopup(googleProvider).then((res) => {
    if (callback) {callback(res.user)}
  }).catch((error) => {
    if (callback) {callback(false)}
  })
}

export const signInWithFacebook = (callback) => {
  auth.signInWithPopup(facebookProvider).then((res) => {
    if (callback) {callback({ ...res.user, accessToken: res.credential.accessToken })}
  }).catch((error) => {
    if (callback) {callback(false)}
  })
}
