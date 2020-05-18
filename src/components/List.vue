<template>
	<div>
        <div class="categories">
		<div class="col col-sm-4" 
			     v-for="(product, index) in categories" :key="index">
						<router-link v-for="(item, index) in product.level"
							:key="index"
                            :product="item.level"
							:to="item.route"
							tag="div"
							class="list-group-item"
							active-class="active"
							>
								<a class="link__img"></a>
								<div>{{ item.name }} <span v-if="item.name == 'Мобильная'">электроника</span></div>
                                
						</router-link>
		</div>
        </div>
		
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		created(){
			this.$store.dispatch('list/loadList');
        },
		computed: {
			...mapGetters('list', {
				categories: 'list'
			})
		}
		
	}
</script>
<style scoped>
   .hit__img-block h3{
	   	text-align: center;
   }
   .categories{
        overflow: hidden;
            margin: 0 auto;
				position: relative;
				display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	flex-wrap: wrap;
	-webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
   }
   .list-group-item{
    	margin-bottom: 8px;
	box-shadow: 0 1px 3px 0 #c9d3d8;
	margin-right: 0;
	margin-left: 0;
	/* border-radius: 3px; */
	display: inline-block;
	width: 150px;
	margin: 6px;
	padding-top: 150px;
		position: relative;
		 transition: all .2s ease-in-out;
    -webkit-transition: all .2s ease-in-out; /** Chrome & Safari **/
    -moz-transition: all .2s ease-in-out; /** Firefox **/
    -o-transition: all .2s ease-in-out; /** Opera **/
   }
   .product_count{
    	border-radius: 5px;
	float: right;
	padding: 0 5px;
	color: #8c8c8c;
	border: 1px solid #c5c5c5;
	position: relative;
	bottom: 20px;
   }
   .col-sm-4 {
    	width: auto;
	padding-left: 0;
	display: inline-block;
	vertical-align: top;
	margin: 0;
	text-align: center;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	
	-webkit-box-pack: justify;
	-webkit-justify-content: space-around;
	justify-content: space-around;
}

.link__img{
		position: absolute;
	top: 0;
	height: 200px;
	width: 150px;
	opacity: 0;
	background-color: #ffffff00;
	-moz-box-sizing: border-box; 
    box-sizing: border-box;
}
.list-group-item div {
	text-decoration: none;
	display: block;
	padding: 10px 20px;
	color: #000;
	background-color: #ffffff;
	text-align: center;
	font-size: 14px;
	height: 30px;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
}
.list-group-item:hover{
	-webkit-transform: translate(0,-10px);
	-o-transform: translate(0,-10px);
	-moz-transform: translate(0,-10px);
	transform: translate(0,-10px);
}
	.categories .col-sm-4:nth-child(1) .list-group-item:nth-child(1){
		background: url(/upload/news-image/ogo/kategorii_igra_200x200_pxl.jpg);
		background-size: contain;
		background-repeat: no-repeat;
	}
	.categories .col-sm-4:nth-child(1) .list-group-item:nth-child(2){
		background: url(/upload/news-image/ogo/kategorii_progulka_200x200_pxl.jpg);
		background-size: contain;
		background-repeat: no-repeat;
	}
	.categories .col-sm-4:nth-child(1) .list-group-item:nth-child(3){
		background: url(/upload/news-image/ogo/kategorii_beremennost_200x200_pxl.jpg);
		background-size: contain;
		background-repeat: no-repeat;
	}
	.categories .col-sm-4:nth-child(2) .list-group-item:nth-child(1){
		background: url(/upload/news-image/ogo/kategorii_komp_200x200_pxl.jpg);
		background-size: contain;
		background-repeat: no-repeat;
	}
	.categories .col-sm-4:nth-child(2) .list-group-item:nth-child(2){
		background: url(/upload/news-image/ogo/kategorii_kyhnya_200x200_pxl.jpg);
		background-size: contain;
		background-repeat: no-repeat;
	}
	.categories .col-sm-4:nth-child(3) .list-group-item:nth-child(1){
		background: url(/upload/news-image/ogo/kategorii_avto_200x200_pxl.jpg);
		background-size: contain;
		background-repeat: no-repeat;
	}
	@media screen and (max-width: 380px) {
    .list-group-item{
	width: 120px;
	padding-top: 120px;
   }
}
	
</style>
