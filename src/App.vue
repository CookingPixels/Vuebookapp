<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <div class="panel-body">
      <table class="table table-stripped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books">
            <td><a v-bind:href="book.url">{{ book.title }}</a></td>
            <td>{{ book.author }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <AddBookForm></AddBookForm> -->
  </div>
</template>

<script>
import Firebase from 'firebase'
import AddBookForm from './components/AddBookForm.vue'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBQiaC7CkG6cN-QbDzaJkz3GMG5e3idlfI",
  authDomain: "bookapp-786c3.firebaseapp.com",
  databaseURL: "https://bookapp-786c3.firebaseio.com",
  projectId: "bookapp-786c3",
  storageBucket: "bookapp-786c3.appspot.com",
  messagingSenderId: "929794421440"
};
// Create a firebase instance and pass the config@
let app = Firebase.initializeApp(config);
let db = app.database()

let booksRef = db.ref('books')

export default {
  name: 'app',
  firebase: {
    books: booksRef
  },
  components: {
    AddBookForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
