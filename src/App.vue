<template>
	<div class="mdl-color--blue-50">
		<router-view></router-view>
	</div>
</template>

<script>
import {db} from './firebase';

var notesRef = db.ref('notes');
export default {
  data () {
    return {
      newNote: '',
      notes: {}
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
