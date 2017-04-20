<template>
	<div>
	    <form role="form" class="" @submit.prevent="addTravel">
	  		<div class="addnewImgDiv">
	  			<h3>Add a photo</h3>
	  		</div>
				<md-input-container>
				    <md-icon>create</md-icon>
				    <label>Title</label>
				    <md-input type="text" v-model="travelCard.pTitle"></md-input>
				</md-input-container>
				<md-input-container>
				    <md-icon>view_headline</md-icon>
				    <label>Description</label>
				    <md-input type="text" v-model="travelCard.pDesc"></md-input>
				</md-input-container>
				<md-input-container>
				    <md-icon>label</md-icon>
				    <label>Location</label>
				    <md-input type="text" v-model="travelCard.pLocation"></md-input>
				</md-input-container>
				
				<md-input-container>
				  <md-icon>add_a_photo</md-icon>
				  <label>Upload Image</label>
				  <md-file v-model="travelCard.pImg" accept="image/*" ></md-file>
				</md-input-container>

	    		<md-button type="submit" class="md-raised md-primary">Add #{{ travels.length }}</md-button>
	   	</form>
	   	<hr>
	   	<div class="cardPreview" v-for="travel in travels">
	   		<!-- <app-travel-card :travel="travelCard"></app-travel-card> -->
	   		<md-card class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-desktop">
				<md-card-header>
					<md-card-header-text>
					  {{travel.title}}
			   		{{travel.description}}
			   		{{travel.location}}
			   		{{travel.img}}
			   		<button @click="removeTravel(travel['.key'])">X</button>
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
</template>
<script>
import {db} from '../firebase';
import TravelCard from './TravelCard.vue';

var travelRef = db.ref('travel');
export default {
	components: {
	  	'app-travel-card': TravelCard,
	},
  	data () {
	    return {
			travelCard :{
				pTitle: '',
				pDesc: '',
				pLocation: '',
				pImg: ''
			},
			travels: {}
	    }
  },
  firebase : {
    travels: travelRef.limitToLast(25)
  },
  methods: {
    removeTravel: function (key) {
      travelRef.child(key).remove();
    },
    addTravel: function (data) {
        travelRef.push({
          title: this.travelCard.pTitle,
          description: this.travelCard.pDesc,
          location: this.travelCard.pLocation,
          img: this.travelCard.pImg
        });
        // reset input box
        this.travelCard.pTitle= "";
        this.travelCard.pDesc= "";
        this.travelCard.pLocation= "";
        this.travelCard.pImg= "";
      
    }
  }
}
</script>

<style lang="scss" scoped>

</style>