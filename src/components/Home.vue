<template>
	<div>
		<div>
		   <app-list></app-list>
	    </div>
        <div>
		   <app-hit></app-hit>
	    </div>
		
    </div>
</template>
<script>
	import AppHit from './Hit';
	import AppList from './List';

	import {mapGetters} from 'vuex';

	export default {
        components: {
			AppHit,
			AppList
		}
	}
</script>
<style scoped>
 .categories_route{
	 width: 1000px;
        overflow: hidden;
            margin: 0 auto;
 }
</style>
