<template>
<div>
	<div class="ogo-hit">
		<h1 class="hit_h1">Лучшие предложения</h1>
		<div class="row row_font">
			<div class="col col-sm-3" 
			     v-for="(product, index) in productAll" :key="index">
                 
                <div class="hit__img-block">
                    <img :src="product.img" alt="" class="hit__img">
                </div>
                
                <div class="hit-title"><a :href="product.link" target="_blank">{{ product.title }}</a></div>
				<div class="old-price" v-if="product.old_price !== 0">{{ product.old_price.toLocaleString() }} руб.</div>
                <div class="new-price">{{ product.new_price.toLocaleString() }} руб.</div>
				<div class="ord small_ord cart_btn">
                <a class="button b-plate-product__buy button-buy" :data-id="product.id_product" :data-action="product.name" href="#">
                    <span class="">В корзину</span>
                </a>
            </div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		
		computed: {
			...mapGetters('hit', {
				products: 'items'
			}),
			...mapGetters('cart', {
				inCart: 'products'
            }),
            product() {
             return this.$store.getters["list/hit"];
      
            },
            productAll() {
               var arrSorted = this.product.slice(0, 15);
               return arrSorted;
            }
		},
		methods: {
			...mapActions('cart', {
				addToCart: 'add',
				removeFromCart: 'remove'
			})
        }
	}
</script>

<style scoped>
	/* .row{
		//padding-left: 15px;
	} */
    .hit__img{
        width: auto;
        max-height: 150px;
    }
    .hit__img-block{
        text-align: center;
        	min-height: 152px;
    }
    .hit_h1{
        	text-align: center;
	margin-bottom: 15px;
	text-transform: uppercase;
	color: #505050;
	font-size: 30px;
	margin-top: 30px;
	}
	.row_font{
		font-size: 0;
	}
    .ogo-hit{
        max-width: 1200px;
        overflow: hidden;
            margin: 0 auto;
    }
    .hit-title{
       height: 60px;
    overflow: hidden;
    margin-top: 10px;
    margin-bottom: 24px;
    line-height: 1.2;
    font-size: 16px;
    }
    .hit-title a{
        	color: #3e3e3e;
    }
	.hit-title a:hover{
		text-decoration: underline;
	}
    .col-sm-3 {
        width: calc(20% - 10px);
	border: 1px solid #e6e4ef;
	margin: 0 10px 10px 0;
	padding: 15px;
	box-sizing: border-box;
	position: relative;
	background-color: #fff;
	display: inline-block;
}
.old-price{
    	display: inline-block;
	position: relative;
	color: #727272;
	margin-bottom: -5px;
	font-size: 14px;
		position: absolute;
	bottom: 90px;
}
.old-price::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    background: #3e3e3e;
    left: 0;
    top: 50%;
    -webkit-transform: rotate(-8deg);
    transform: rotate(-8deg);
}
.new-price{
    	display: block;
	position: relative;
	color: #3e3e3e;
	font-weight: 700;
	font-size: 20px;
	margin-top: 5px;
	    line-height: 1.4;
		margin-bottom: 5px;
}
.btn{
    width: 100px;
    position: absolute;
    bottom: 15px;
    right: 15px;
}
.btn-default.focus, .btn-default:focus {
    color: #333;
    background-color: rgba(0,0,0,0);
    border-color: #8c8c8c;
    outline-color: rgba(0,0,0,0);
}
.btn-primary {
    color: #fff;
    background-color: #dc3e48;
    border-color: #cf3e47;
}
.ord{
  border: 0;
}
.page_header .small_ord {
		margin: 0;
	border: none;
		width: auto;
	position: absolute;
	bottom: 15px;
	right: 15px;
	height: auto;
}
.icon.cart {
	padding-left: 19px;
	background: url(/bitrix/templates/index/img/icons/cart.png) left -19px no-repeat;
}
.ord.cart_btn.pressed{
  	border: none;
	background-color: #fff;
}
.small_ord .button{
  		font-size: 15px;
		padding: 8px 20px 8px 20px;
	color: #000;
	background-color: #f9a617;
	border-radius: 3px;
		display: inline-block;
}
.ogo-hit .row .col-sm-3:nth-child(5n+5){
    margin-right: 0;
}
/* .prod__discount{
  		display: inline-block;
	padding-top: 18px;
	height: 45px;
	width: 45px;
	text-align: center;
	color: #ffffff;
	position: absolute;
	top: 10px;
	left: 10px;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	border-radius: 5px;
	background: url(https://ogo1.ru/upload/news-2019-03/ogo/tykovka_45x45_pxl.png);
	font-weight: 700;
	font-size: 15px;
} */
@media screen and (max-width: 1100px) {
    .col-sm-3{
      width: calc(25% - 10px);
    }
	/* .col-sm-3:nth-child(4n+4){
		margin-right: 0;
	} */
	.ogo-hit .row .col-sm-3:nth-child(5n+5){
    margin-right: 10px;
}
    .sorting label span{
          margin-bottom: 5px;
    }
}
@media screen and (max-width: 920px) {
    .col-sm-4{
      width: 50%;
    }
}

@media screen and (max-width: 750px) {
    .col-sm-3{
      width: calc(33.333333333% - 10px);
	  	padding: 10px;
    }
    
}
@media screen and (max-width: 550px) {
    .col-sm-3{
      width: calc(50% - 10px);
    }
}
@media screen and (max-width: 380px) {
    .col-sm-3{
      width: calc(100% - 10px);
    }
	.hit_h1{
		font-size: 19px;
	}
}
</style>