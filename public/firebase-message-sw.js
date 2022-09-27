importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js")

firebase.initalizedApp({
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
})

const initMessaging = firebase.messaging()