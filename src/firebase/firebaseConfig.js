import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCVasm193c5Y3f7NMVZcL2c6_1mUcJ0ec",
    authDomain: "gaurnishhealth-d6227.firebaseapp.com",
    projectId: "gaurnishhealth-d6227",
    storageBucket: "gaurnishhealth-d6227.firebasestorage.app",
    messagingSenderId: "388362020101",
    appId: "1:388362020101:web:3b0bf2b7978f1ae773836c",
};

// Initialize Firebase only if it hasn't been initialized already
let app;
let db;

if (typeof window !== 'undefined') {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }

  // Initialize Firestore with persistent local cache
  db = initializeFirestore(app, {
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager(),
    }),
  });

  // Initialize analytics only in client-side
  if (typeof window !== 'undefined') {
    getAnalytics(app);
  }
}

export { app, db };