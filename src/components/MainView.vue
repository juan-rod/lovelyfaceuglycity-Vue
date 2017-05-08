<template>
	<div>
		<header class="demo-header mdl-layout__header mdl-layout__header--transparent mdl-color-text--grey-600">
	        <div class="mdl-layout__header-row">
	          <!-- <span class="mdl-layout-title">Home</span> -->
	          <div class="mdl-layout-spacer"></div>
	          <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
	            <label class="mdl-button mdl-js-button mdl-button--icon" for="search">
	              <i class="material-icons">search</i>
	            </label>
	            <div class="mdl-textfield__expandable-holder">
	              <input class="mdl-textfield__input" type="text" id="search" placeholder="lovely place ugly city">
	            </div>
	          </div>
	        </div>
    	</header>
		<main class="mdl-layout__content main-view">
			<div class="mdl-grid outer-grid border">
				<div class="cardPreview" v-for="travel in travels">
	   		<!-- <app-travel-card :travel="travelCard"></app-travel-card> -->
	   		<md-card class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-desktop">
				<md-card-header>
					<md-card-header-text>
					  {{travel.title}}
			   		{{travel.description}}
			   		{{travel.location}}
			   		{{travel.img}}
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
				
   			</div>
		</main>
	</div>
</template>
<script>
import {db} from '../firebase';
var travelRef = db.ref('travel');

export default {
	data () {
		return{

		}
	},
	firebase : {
		travels: travelRef
	}
}

</script>
<style lang="scss">

</style>