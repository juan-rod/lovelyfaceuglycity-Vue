import Vue from 'vue';
import VueRouter from 'vue-router';
import {db} from '../firebase';

var travelRef = db.ref('travel');
// var storageService = firebase.storage();
// var list = firebaseArray(travelRef);
// var uploadTaskURL = [];
// var img_URL = []

var router = new VueRouter() ;

export const state = {
  // apiURL: 'http://localhost:4000/v1/',
  // apiURL: 'https://api.mediasciencelabs.com/v1/',
 //   apiKey: 'OWNiMjVhMDNkMGIwOTcwZWMzYjI4MGJj'
 }
export const mutations = {
  CREATE_TRAVELCARD (state, travelCard) {
      // var random = parseInt(Math.random() * 1000000);
      // var randomString = random.toString();
      // var refStorage = storageService.ref('travel_images').child(randomString);
      // var imageFile = travelCard.pImg;
      // var uploadTask = refStorage.child(imageFile.name).put(imageFile);
      //     uploadTaskURL.push(uploadTask);
      //     uploadTask.on('state_changed', null, function(error){
      //       // console.log('upload error', error);
      //     }, function() {
      //       for (var i = 0; i < uploadTaskURL.length; i++) {
      //         var imgURL = uploadTaskURL[i];
      //         img_URL.push(imgURL.snapshot.downloadURL);
      //       }
            
      //       var imageData = {
      //         url: uploadTask.snapshot.downloadURL,
      //         bytes: uploadTask.snapshot.totalBytes,
      //         name: uploadTask.h.name,
      //         path: uploadTask.h.fullPath,
      //         date: uploadTask.h.timeCreated,
      //         title: travelCard.pTitle,
      //         description: travelCard.pDesc,
      //         location: travelCard.pLocation,
      //         childPath: randomString
      //       };
      //      list.$add(imageData);
      //   });

      //     return uploadTask;
    travelRef.push({
      title: travelCard.pTitle,
      description: travelCard.pDesc,
      location: travelCard.pLocation,
      img: travelCard.pImg
    });
  },
  FETCH_TRAVELCARD (state, travelCard) {
    // var ref = firebase.database().ref().child("product_images");
    travelRef.push({
      title: travelCard.pTitle,
      description: travelCard.pDesc,
      location: travelCard.pLocation,
      img: travelCard.pImg
    });
  }

}
