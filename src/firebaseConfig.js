import firebase from 'firebase'
import 'firebase/firestore'

var config  = {
    apiKey: "AIzaSyAS-RK6qbzOC7hNeuovwl_x6A01TbXH82I",
    authDomain: "vue-app-d7285.firebaseapp.com",
    databaseURL: "https://vue-app-d7285.firebaseio.com",
    projectId: "vue-app-d7285",
    storageBucket: "",
    messagingSenderId: "458683125990",
    appId: "1:458683125990:web:91e418fa50c4b493"
  }

  firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser


// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)


// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}