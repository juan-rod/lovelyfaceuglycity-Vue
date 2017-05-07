import Vue from 'vue';
import VueRouter from 'vue-router';
import {db} from '../firebase';

var travelRef = db.ref('travel');

var router = new VueRouter() ;

export const state = {
	// apiURL: 'http://localhost:4000/v1/',
	// apiURL: 'https://api.mediasciencelabs.com/v1/',
 //  	apiKey: 'OWNiMjVhMDNkMGIwOTcwZWMzYjI4MGJj'
 }
export const mutations = {
	CREATE_TRAVELCARD (state, travelCard) {
    travelRef.push({
      title: travelCard.pTitle,
      description: travelCard.pDesc,
      location: travelCard.pLocation,
      img: travelCard.pImg
    });
  }

}