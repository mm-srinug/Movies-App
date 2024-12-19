importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging.js');


firebase.initializeApp({
  apiKey: "AIzaSyBYSPZ_Zd9PtjywsEy9JO0r5RsA4SiWogA",
  authDomain: "pushnotification-4ed99.firebaseapp.com",
  projectId: "pushnotification-4ed99",
  storageBucket: "pushnotification-4ed99.firebasestorage.app",
  messagingSenderId: "308297101696",
  appId: "1:308297101696:web:82d85e91b94d1cc189d165",
  measurementId: "G-8B5T85TSD6"
  
});
const messaging = firebase.messaging();

firebase.initializeApp(firebaseConfig);

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});



