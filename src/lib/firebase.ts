import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app'
import { getFirestore, type Firestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB7YtjYlRv5ldKYruId4t5nzelN-Zp-bOM',
  authDomain: 'mct-aisha.firebaseapp.com',
  projectId: 'mct-aisha',
  storageBucket: 'mct-aisha.firebasestorage.app',
  messagingSenderId: '97276689114',
  appId: '1:97276689114:web:37b49da36a36eb0af883e3',
  measurementId: 'G-PS4W2Y7CJ0',
}

const app: FirebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
export const db: Firestore = getFirestore(app)
export default app
