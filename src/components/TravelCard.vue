<template>
	<div>
		<md-card class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-desktop">
			<md-card-header>
				<md-card-header-text>
				  {{travelCard.pTitle}}
				</md-card-header-text>

				
			</md-card-header>

			<md-card-media md-ratio="16/9">
				<!-- <img src="src/assets/me.jpg" alt="People"> -->
			</md-card-media>

			<md-card-content>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
			</md-card-content>
		</md-card>
	</div>
</template>
<script>
export default {
	props: ['travel'],
	data () {
		return {
			travelCard: {}
		}
	}
}

</script>
<style>
</style>