<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Add new books</h3>
      </div>
    </div>
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
  </div>

</template>

<script>
export default {
  data() {
    return {
      newBook: {
        title: '',
        author: '',
        url: 'http://'
      }
    }
  },
  methods: {
    addBook: function () {
      booksRef.push(this.newBook);
      this.newBook.title = '';
      this.newBook.author = '';
      this.newBook.url = 'http://';
    },
  },
}
</script>

<style>

</style>
