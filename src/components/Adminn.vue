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
import {storage} from '../firebase';
import TravelCard from './TravelCard.vue';
import { mapActions } from 'vuex';
import mime from 'mime-types';

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
			travels: {},
			file : null,
			authorized: ['image/jpeg', 'image/png'],
			uploadTask : null,
			uploadState: null
	    }
  },
  mounted: function(){
  	this.watchFileInput();
  },
  firebase : {
    travels: travelRef.limitToLast(25)
  },
  methods: {
  	...mapActions([
        'createTravelCard'
      ]),
    removeTravel: function (key) {
      travelRef.child(key).remove();
    },
    addTravel: function (e) {
    	let vm = this;
    	let files = e.target.file;
    	console.log("files:", files);
    	if(files.length === 1) {
    		this.file = files[0];
    		console.log("this.file:",this.file);
    	}
    	if(this.file !== null) {
    		if(this.isValid(this.file.name)) {
    			let metadata = {contentType: mime.lookup(this.file.name)};
    			console.log("metadata:",metadata);
    		}
    	}
    	
	    this.createTravelCard(this.travelCard, this.file)
      		.then(function(){
		        vm.travelCard.pTitle= "";
		        vm.travelCard.pDesc= "";
		        vm.travelCard.pLocation= "";
		        vm.travelCard.pImg= "";
      		});
    },
    isValid: function(filename){
    	let index = this.authorized.indexOf(mime.lookup(filename));
    	return index !== -1;
    },
    watchFileInput: function() {
            // will notify a file input
        $('input[type="file"]').change(this.notifyFileInput.bind(this));
        console.log("hello from watchFileInput");
     },
    notifyFileInput: function(event) {
        var fileTarget = event.target.files;
        // console.log("fileTarget:",fileTarget);
        var fileName = event.target.files[0].name;
        // console.log("fileName:",fileName);
        // update file name value
        this.file = fileName;
    }
    
  }
}
</script>

<style lang="scss" scoped>

</style>