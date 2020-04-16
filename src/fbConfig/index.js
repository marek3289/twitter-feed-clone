import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDe16hmZQSOHxWS9RT9PjZrQrq9oN1cZuI',
  authDomain: 'twitter-feed-bf656.firebaseapp.com',
  databaseURL: 'https://twitter-feed-bf656.firebaseio.com',
  projectId: 'twitter-feed-bf656',
  storageBucket: 'twitter-feed-bf656.appspot.com',
  messagingSenderId: '994247834646',
  appId: '1:994247834646:web:a57cb15306021929cb4937',
  measurementId: 'G-MP3FF0VKZ7',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
