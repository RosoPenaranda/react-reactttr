import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'
import App from './components/App/index.js'

firebase.initializeApp({
  apiKey: 'tuapi',
  authDomain: 'tudominio.firebaseapp.com',
  databaseURL: 'https://tudominio.firebaseio.com',
  projectId: 'proyecto',
  storageBucket: 'proyecto.appspot.com',
  messagingSenderId: 'tu id'
})

render(<App />, document.getElementById('root'))
