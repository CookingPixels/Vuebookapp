<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <h1>BookApp</h1>
    <div class="panel-body">
      <form class="form-inline" v-on:submit.prevent="addBook">
        <div class="form-group">
          <label for="bookTitle">Title:</label>
          <input type="text" id="bookTitle" class="form-control" v-model="newBook.title">
        </div>
        <div class="form-group">
          <label for="bookAuthor">Author:</label>
          <input type="text" id="bookAuthor" class="form-control" v-model="newBook.author">
        </div>
        <div class="form-group">
          <label for="bookUrl">Url:</label>
          <input type="text" id="bookUrl" class="form-control" v-model="newBook.url">
        </div>
        <input type="submit" class="btn btn-primary" value="Add book">
      </form>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Add new books</h3>
      </div>
    </div>
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
            <td>
              <span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeBook(book)"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <a href="https://medium.com/codingthesmartway-com-blog/vue-js-2-firebase-e4b2479e35a8">Tutorial from Coding Smart</a>
  </div>
</template>

<script>
import Firebase from "firebase";
import Toastr from "toastr";

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
let db = app.database();

let booksRef = db.ref("books");

export default {
  name: "app",
  firebase: {
    books: booksRef
  },
  data() {
    return {
      newBook: {
        title: "",
        author: "",
        url: "http://"
      }
    };
  },
  methods: {
    // Push a new object passing the three parameters
    addBook: function() {
      booksRef.push(this.newBook);
      this.newBook.title = "";
      this.newBook.author = "";
      this.newBook.url = "http://";
    },
    // To remove the added book, we select the book node by using the child method
    // then remove the object from the database using the key
    removeBook: function(book) {
      booksRef.child(book['.key']).remove()
      Toastr.success('Book removed successfully!')
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
