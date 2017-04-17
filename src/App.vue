<template>
	<div class="mdl-color--blue-50">
		<router-view></router-view>
	</div>
</template>

<script>
	import Firebase from 'firebase';

	// import toastr from 'toastr';
		let config = {
		    apiKey: "AIzaSyCIF4o3M1OKuFGVKy4k5s2Gf3aMRz7s7lE",
		    authDomain: "lovelyfaceuglycity.firebaseapp.com",
		    databaseURL: "https://lovelyfaceuglycity.firebaseio.com",
		    projectId: "lovelyfaceuglycity",
		    storageBucket: "lovelyfaceuglycity.appspot.com",
		    messagingSenderId: "997628556408"
		 };
		  
		let app = Firebase.initializeApp(config);
		let db = app.database();
		let booksRef = db.ref('books');
export default {
	firebase: {
		books: booksRef
	},
	data () {
		return {
			newBook :{
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
      removeBook: function (book) {
        booksRef.child(book['.key']).remove()
        toastr.success('Book removed successfully')
      }
    }

  }
</script>

<style lang="scss">
	.main-view{
		height: 100vh;
		.outer-grid{
			width: 100vw;
		}
	}
	.border{
		border: 1px solid black;
	}
</style>
