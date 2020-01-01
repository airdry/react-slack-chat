import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyCIs-aW_XnjGFlccK_9_8WV5BM-kO-Ajow',
  authDomain: 'react-slack-chat-5cac4.firebaseapp.com',
  databaseURL: 'https://react-slack-chat-5cac4.firebaseio.com',
  projectId: 'react-slack-chat-5cac4',
  storageBucket: 'react-slack-chat-5cac4.appspot.com',
  messagingSenderId: '105671666537',
  appId: '1:105671666537:web:b600e3b4cc0b0882c9ebf8'
};
firebase.initializeApp(firebaseConfig);

export default firebase;
