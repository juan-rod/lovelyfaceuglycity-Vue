<template>
	<div>
		<div class="mdl-layout mdl-js-layout mdl-color--grey-100">
			<main class="mdl-layout__content">
				<div class="mdl-card mdl-shadow--6dp">
					<div class="mdl-card__title mdl-color--primary mdl-color-text--white">
						<h2 class="mdl-card__title-text">Hey, Juan!</h2>
					</div>
			  		<div class="mdl-card__supporting-text">
						<form id="form" v-on:submit.prevent="signIn">
							<div class="mdl-textfield mdl-js-textfield">
								<input class="mdl-textfield__input" type="text" id="email" />
								<label class="mdl-textfield__label" for="email">Username</label>
							</div>
							<div class="mdl-textfield mdl-js-textfield">
								<input class="mdl-textfield__input" type="password" id="userpass" />
								<label class="mdl-textfield__label" for="userpass">Password</label>
							</div>
							<div class="mdl-card__actions">
								<input class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" type="submit" value="Log In">
							</div>
						</form>
					</div>
				</div>
			</main>
		</div>
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
		// let booksRef = db.ref('books');
		let auth = firebase.auth();
	export default {
		data () {
			return {

			}
		},
		firebase: {
		    users: usersRef
		},
		computed: {
			validation: function () {
			  return {
			    name: !!this.newUser.name.trim(),
			    email: emailRE.test(this.newUser.email)
			  }
			},
			isValid: function () {
			  var validation = this.validation
			  return Object.keys(validation).every(function (key) {
			    return validation[key]
			  })
			}
		},
		methods: {
			signIn(email,password){
				auth.signInWithEmailAndPassword(email, password).then(function(firebaseUser) {
					console.log("email:", email);
					console.log("password:", password);
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mdl-layout {
		align-items: center;
		justify-content: center;
	}
	.mdl-layout__content {
		padding: 24px;
		flex: none;
	}
</style>