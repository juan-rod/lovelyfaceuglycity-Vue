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


	// import toastr from 'toastr';

	export default {
		data () {
			return {

			}
		}	}
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