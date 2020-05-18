<template>
  <div>
    <div class="" 
			     v-for="(category, index) in categoryAll" :key="index">
                 <div class="category-block">
                    <h3>{{category.name}}</h3>
                    
			        <ul class="list-group" v-on:click="clearFilter">
						<router-link v-for="(item, index) in category.level"
							:key="index"
              :category="item.level"
							:to="cat(item.route)"
							tag="li"
							class="list-group-item"
							active-class="active"
							>
								<a >{{ item.name }}</a>
                                <span class="product_count"></span>
						</router-link>
					</ul>
                 </div>
		</div>
    <div class="row clever-fixed-container">
        <div class="sidebar clever-fixed">
          <div class="sidebar-inner">
            <div class="block-scroll">
              <div class="menu-price price">
                <p class="title_p">{{productCount}} товаров</p>
                <div class="btn-reset" v-on:click="clearFilter">Очистить фильтры</div>
              </div>
              <div class="menu-price price">
                <p class="title">Цена</p>
                <div class="fields-wrap">
                  <div class="field field-min-price">
                    <input type="text" :placeholder="minPrice" id="minprice" v-model="minPriceF">
                    <label aria-label="Цена от" class="min__price" for="minprice">от</label>
                  </div>
                  <span>-</span>
                  <div class="field field-max-price">
                    <input type="text" :placeholder="maxPrice" id="maxprice" v-model="maxPriceF">
                    <label aria-label="Цена до" class="max__price" for="maxprice">до</label>
                  </div>
                </div>
              </div>
              <div class="menu-vendor ven1">
                <p class="title">Производитель</p>


                <div class="field" v-for="(brand, index) in brands" :key="index">
                  <div class="checkbox-wrap">
                    <label  class="label-cbx">
                        <input  type="checkbox" class="invisible" v-bind:value="brand" v-model="prodFilterBrand">
                        <div class="checkbox">
                        <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                        <polyline points="4 11 8 15 16 6"></polyline>
                        </svg>
      </div>
      <span>{{brand}}</span>
    </label>
                  </div>
                </div>
                
              </div>
              <div class="menu-vendor">
                <p class="title">Размер скидки</p>


                <div class="field" v-for="(disc, index) in discount" :key="index">
                  <div class="checkbox-wrap" v-if="disc !== 0">
                    <label  class="label-cbx">
                        <input  type="checkbox" class="invisible" v-bind:value="disc" v-model="prodFilterDiscount">
                        <div class="checkbox">
                        <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                        <polyline points="4 11 8 15 16 6"></polyline>
                        </svg>
      </div>
      <span>{{disc}}%</span>
    </label>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      <div class="col col-sm-9">
        <div class="category__sale">
          <div class="sorting">
            <div class="bootstrap-select sort-items-select select-bs" style="width: 100%;">
              <div class="item-list-sort">
                <div class="sorting__h">Сортировать по:</div>
                <label>
                  <input type="radio" value="popular" v-model="sortRadio">
                  <router-link tag="span" :to="{ query: { sortRadio: 'popular' } }">Полулярности</router-link>
                </label>
                <label>
                  <input type="radio" value="cheap" v-model="sortRadio">
                  <router-link tag="span" :to="{ query: { sortRadio: 'cheap' } }">Дешевле</router-link>
                </label>
                <label>
                  <input type="radio" value="expensive" v-model="sortRadio">
                  <router-link tag="span" :to="{ query: { sortRadio: 'expensive' } }">Дороже</router-link>
                </label>
                <label>
                  <input type="radio" value="discount-more" v-model="sortRadio">
                  <router-link tag="span" :to="{ query: { sortRadio: 'discount-more' } }">Скидке по возрастанию</router-link>
                </label>
                <label>
                  <input type="radio" value="discount-less" v-model="sortRadio">
                  <router-link tag="span" :to="{ query: { sortRadio: 'discount-less' } }">Скидке по убыванию</router-link>
                </label>
              </div>
              
            </div>
          </div>
        </div>
        <div class="product__block">
        <div class="col col-sm-4" v-for="(product, index) in productAll" :key="index">
          
          <div class="hit__img-block">
            <img :src="product.img" alt class="hit__img">
          </div>

          <div class="hit-title">
            <a :href="product.link" target="_blank">{{ product.title }}</a>
          </div>
          <div class="old-price" v-if="product.old_price !== 0">{{ product.old_price.toLocaleString() }} руб.</div>
          <div class="new-price">{{ product.new_price.toLocaleString() }} руб.</div>
          <div class="ord small_ord cart_btn">
              <a class="button b-plate-product__buy button-buy" :data-id="product.id_product" :data-action="name" href="#">
                <span class="">В корзину</span>
              </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  created() {
    this.$store.dispatch("list/loadList");
  },
  data(){
			return {
        minPriceF: '',
        maxPriceF: '',
        prodFilterBrand: [],
        prodFilterDiscount: []
			};
		},
  computed: {
    
    minPriceFF(){
       return this.minPriceF;
    },
    sortRadio(){
        return this.$route.query.sortRadio ? this.$route.query.sortRadio : 'popular';
    },
    discount(){
        return this.arrDiscount();
    },
    brands(){
       return this.arrBrand();
    },
    productCount(){ //количество товаров(в том числе отфильтрованных)
      return this.productAll.length;
    },
    minPrice(){ //вычисляем минимальную цену в массиве
        let valMin = this.arrPrice();
        return valMin[0];
    },
    maxPrice(){  //вычисляем максимальную цену в массиве
        let valMax = this.arrPrice();
        return valMax[valMax.length - 1];
    },
    name() {
      return this.$route.params.route;
    },
    product() {
      return this.$store.getters["list/item"](this.name);
      
    },
    category() {
      
      return this.$store.getters["list/categoryItem"](this.name);
    },
    productAll() {
      var arrSorted = this.product.slice();
       
      if(this.sortRadio !== 'popular'){
        if(this.sortRadio == 'cheap'){
          arrSorted.sort((a, b) => {
                    return a.new_price > b.new_price ? 1 : -1;
                });
        }else if(this.sortRadio == 'expensive'){
          arrSorted.sort((a, b) => {
                    return a.new_price < b.new_price ? 1 : -1;
                });
        }else if(this.sortRadio == 'discount-more'){
          arrSorted.sort((a, b) => {
                    return a.discount > b.discount ? 1 : -1;
                });
        }else if(this.sortRadio == 'discount-less'){
          arrSorted.sort((a, b) => {
                    return a.discount < b.discount ? 1 : -1;
                });
        }
      }else{
        arrSorted.sort((a, b) => {
                    return a.id_product > b.id_product ? 1 : -1;
                });
      } 
      return arrSorted.filter((elem) => { //фильтруем массив по диапозону цены
           let brand = false;
           if(this.prodFilterBrand.length == 0){
             brand = true;
           }else{
             this.prodFilterBrand.forEach(function(item, i, arr) {
               if(item == elem.brand){
                 brand = true;
               }
             });
           }

           let discount = false;
           if(this.prodFilterDiscount.length == 0){
             discount = true;
           }else{
             this.prodFilterDiscount.forEach(function(item, i, arr) {
               if(item == elem.discount){
                 discount = true;
               }
             });
           }

           let max = this.maxPriceF == '' ? this.maxPrice : this.maxPriceF;
           
           
          return elem.new_price >= this.minPriceF && elem.new_price <= max && brand && discount;
      });
    },
    categoryAll(){
      return this.category;
    },
    ...mapGetters("hit", {
      products: "items"
    }),
    ...mapGetters("cart", {
      inCart: "products"
    })
  },
  methods: {
    ...mapActions("cart", {
      addToCart: "add",
      removeFromCart: "remove"
	  }),
    arrPrice(){ //функция определения минимальной и максимальной цены
      let arrMin = [];
      for(let val of this.product){
        if(val.new_price){
        arrMin.push(val.new_price);
        }
        arrMin.sort((a, b) => {
                    return a > b ? 1 : -1;
                });
      }
      return arrMin;
    },
    arrBrand(){ //создание массива брендов
      let arrBrand = [];
      for(let val of this.product){
        if(val.brand != null){
          arrBrand.push(val.brand);
        }
          
      }
      let uniqueArray = arrBrand.filter(function(item, pos) {
         return arrBrand.indexOf(item) == pos;
      })
      uniqueArray.sort((a, b) => {
                    return a > b ? 1 : -1;
                });
      return uniqueArray;
    },
    arrDiscount(){ //создание массива скидок
      let arrDiscount = [];
      for(let val of this.product){
          arrDiscount.push(val.discount);
      }
      let uniqueArray = arrDiscount.filter(function(item, pos) {
         return arrDiscount.indexOf(item) == pos;
      })
      uniqueArray.sort((a, b) => {
                    return a > b ? 1 : -1;
                });
      return uniqueArray;
    },
    clearFilter(){
        this.minPriceF = '';
        this.maxPriceF = '';
        this.prodFilterBrand = [];
        this.prodFilterDiscount = [];
    },
    cat(val){
      return val;
    }
	
  },
  

};
</script>

<style scoped>
  .product__block{
    	border-top: solid 1px #e6e4ef;
      	border-left: solid 1px #e6e4ef;
  }
  .category-block{
    	text-align: center;
  }
.main {
  padding: 0;
}
.hit__img {
  width: auto;
	max-height: 150px;
}
.hit__img-block {
  text-align: center;
  	min-height: 152px;
}
.ogo-hit {
  width: 1000px;
  overflow: hidden;
  margin: 0 auto;
}
.hit-title {
  height: 60px;
	overflow: hidden;
	margin-top: 10px;
	margin-bottom: 24px;
	line-height: 1.2;
}
.col-sm-4 {
    	width: 25%;
	padding: 15px;
	box-sizing: border-box;
	border-radius: 0;
	position: relative;
	background-color: #fff;
	display: inline-block;
	border-right: solid 1px #e6e4ef;
	border-bottom: solid 1px #e6e4ef;
}
.old-price {
  	display: inline-block;
	position: relative;
	color: #727272;
  font-size: 14px;
      position: absolute;
    bottom: 90px;
}
.old-price::after {
  content: "";
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
.new-price {
  display: block;
    position: relative;
    color: #3e3e3e;
    font-weight: 700;
    font-size: 20px;
    margin-top: 0px;
}
.hit-title a{
        	color: #3e3e3e;
          text-decoration: none;
}
.hit-title a:hover{
  text-decoration: underline;
}
.btn {
  width: 100px;
  position: absolute;
  bottom: 15px;
  right: 15px;
}
.btn-default.focus,
.btn-default:focus {
  color: #333;
  background-color: rgba(0, 0, 0, 0);
  border-color: #8c8c8c;
  outline-color: rgba(0, 0, 0, 0);
}
.btn-primary {
  color: #fff;
  background-color: #dc3e48;
  border-color: #cf3e47;
}
.btn__filter{
        background-color: #f0434e;
    text-decoration: none;
    display: block;
    padding: 10px 20px;
    color: #ffffff;
    text-align: center;
    display: none;
    width: 200px;
    margin: 0 auto;
    margin-bottom: 10px;
    -webkit-box-shadow: 0 1px 3px 0 #c9d3d8;
    box-shadow: 0 1px 3px 0 #c9d3d8;
    border-radius: 3px;
}
.col-sm-9 {
      width: calc(100% - 270px);
	position: relative;
	/* left: 29px; */
	padding: 0;
	float: right;
}
.sidebar {
  position: relative;
  float: left;
  top: 0;
  width: 220px;
  padding-right: 20px;
}
.sidebar-inner {
  width: 256px;
}
.sidebar .block-scroll {
  position: relative;
  left: 0px;
  background-color: #fff;
  border-radius: 5px;
  padding: 15px 5px;
  box-sizing: border-box;
  border: 1px solid #e6e4ef;
}
.sidebar .menu-price {
  padding-left: 10px;
  padding-bottom: 35px;
  padding-right: 10px;
  border-bottom: solid 1px #eee;
  margin-bottom: 10px;
}
.sidebar .menu-price .title {
  font-family: "Circe", Verdana, sans-serif;
  color: #525252;
  margin-bottom: 15px;
  text-align: left;
  font-family: "Circe", Verdana, sans-serif;
  color: #525252;
  margin-bottom: 15px;
  text-align: left;
  border-left: solid 2px #9b9b9b;
  font-weight: 800;
  padding-left: 10px;
}
.sidebar .menu-price .fields-wrap {
  height: 33px;
}

.sidebar .menu-price .fields-wrap .field {
  display: block;
  float: left;
}
.sidebar .menu-price .field input {
  	display: block;
	padding: 0 2px;
	text-align: center;
	width: 103px;
	height: 33px;
	font-family: "Circe", Verdana, sans-serif;
	color: #525252;
	border: 1px solid #dcdfe6;
	padding-left: 27px;
	border-radius: 3px;
  -moz-box-sizing: border-box; 
    box-sizing: border-box;
}
.sidebar .menu-price .fields-wrap > span {
  display: block;
  float: left;
  font: normal 13px/33px "Circe", Verdana, sans-serif;
  color: #555555;
  text-align: center;
  padding: 0 4px;
}
.sidebar .menu-price .fields-wrap .field {
  display: block;
  float: left;
  position: relative;
}
.sidebar .menu-price .slider {
  height: 2px;
  background: #eaeaea;
  margin: 0 14px;
}
.sidebar .menu-price .ui-slider-horizontal {
  height: 2px;
  border: 0;
  background: #e5e5e5;
  position: relative;
}
.ui-slider-horizontal .ui-slider-range {
  top: 0;
  height: 100%;
}
.ui-slider .ui-slider-range {
  position: absolute;
  z-index: 1;
  font-size: 0.7em;
  display: block;
  border: 0;
  background-position: 0 0;
}
.ui-state-default,
.ui-widget-content .ui-state-default,
.ui-widget-header .ui-state-default,
.ui-button,
html .ui-button.ui-state-disabled:hover,
html .ui-button.ui-state-disabled:active {
  border: 1px solid #c5c5c5;
  background: #f6f6f6;
  font-weight: normal;
  color: #454545;
}
.ui-slider .ui-slider-handle {
  position: absolute;
  z-index: 2;
  width: 1.2em;
  height: 1.2em;
  cursor: default;
  -ms-touch-action: none;
  touch-action: none;
}
.sidebar .menu-price .ui-slider-handle {
  cursor: pointer;
  width: 20px;
  height: 20px;
  top: -10px;
  margin-left: -14px;
  border: 0;
  background: #fff;
  -webkit-box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  border: 1px solid whitesmoke;
}
.sidebar .menu-vendor {
  margin-bottom: 20px;
  padding-left: 10px;
  text-align: left;
}
.sidebar .menu-vendor .title {
  color: #525252;
  margin-bottom: 15px;
  position: relative;
  cursor: pointer;
  text-align: left;
  font-family: "Circe", Verdana, sans-serif;
  color: #525252;
  margin-bottom: 15px;
  text-align: left;
  border-left: solid 2px #9b9b9b;
  font-weight: 800;
  padding-left: 10px;
}

.field {
  position: relative;
  z-index: 1;
  text-align: left;
  margin-bottom: 10px;
  line-height: 1;
}
.checkbox-wrap {
  display: inline-block;
  position: relative;
  height: 25px;
}
.checkbox-wrap input[type="checkbox"] {
  position: absolute;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 30px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  opacity: 0;
  cursor: pointer;
}
.checkbox-wrap input[type="checkbox"] + label {
  position: relative;
  z-index: 1;
  padding-left: 35px;
  display: block;
  cursor: pointer;
  font: normal 14px/1.2em "Circe", Verdana, sans-serif;
  color: #525252;
}
.checkbox-wrap input[type="checkbox"] + label::before {
  display: block;
  width: 25px;
  height: 25px;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid #ebebeb;
  background-color: #fff;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.checkbox-wrap input[type="checkbox"] + label > span {
  display: table-cell;
  width: 100%;
  height: 30px;
  vertical-align: middle;
}
.checkbox-wrap input[type="checkbox"] + label::after {
  display: inline-block;
  width: 17px;
  height: 15px;
  content: "";
  position: absolute;
  left: 7px;
  top: 7px;
  -webkit-background-size: 17px 14px;
  background-size: 17px 14px;
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
  -webkit-transition: all 0.5s cubic-bezier(0.51, 0.09, 0.37, 1.37) 0.1s;
  -moz-transition: all 0.5s cubic-bezier(0.51, 0.09, 0.37, 1.37) 0.1s;
  -ms-transition: all 0.5s cubic-bezier(0.51, 0.09, 0.37, 1.37) 0.1s;
  -o-transition: all 0.5s cubic-bezier(0.51, 0.09, 0.37, 1.37) 0.1s;
  transition: all 0.5s;
}
.btn-reset {
  height: 35px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  padding: 0px 15px 0;
  line-height: 35px;
  border: 1px solid #dcdfe6;
  box-shadow: none;
  font-weight: 500;
  overflow: hidden;
  text-align: center;
  color: #5d5d5d;
  	cursor: pointer;
}
.title_p {
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #575465;
}
.category__sale {
 	border: 1px solid #e6e4ef;
	margin: 0 0px 10px 0;
	padding: 15px;
	box-sizing: border-box;
	border-radius: 5px;
	position: relative;
	background-color: #fff;
	width: 100%;
}
.category__sale-percent {
  display: inline-block;
  border: 1px solid #e6e4ef;
  padding: 6px 15px;
  border-radius: 30px;
  color: #65656d;
  	cursor: pointer;
}
.category__sale-percent.active {
  background-color: #f1f1f1;
}

.sorting .dropdown-toggle {
  outline: 0 !important;
  -webkit-box-shadow: none;
  box-shadow: none;
  padding-top: 0;
  padding-left: 12px;
  padding-right: 26px;
  background: #fff;
  border: 1px solid #d8d8d8;
  -webkit-border-radius: 35px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 1.083333em;
  text-transform: none;
  height: 35px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #202020;
  -webkit-transition: none;
  transition: none;
  margin: 0;
  	position: relative;
}
/* .sorting .dropdown-toggle .filter-option {
  display: inline;
  width: auto;
} */
.sorting .dropdown-toggle .bs-caret {
  font-weight: 400 !important;
	text-transform: none !important;
	line-height: 1;
	display: block;
	width: 30px;
	height: 33px;
	background: #fff;
	position: absolute;
	right: 0;
	top: 8px;
	color: #d8d8d8;
	text-align: center;
	-webkit-transform: rotate(180deg);
	-ms-transform: rotate(180deg);
	transform: rotate(360deg);
	overflow: hidden;
}
.select-bs-label{
    color: #8c8c8c;
	font-size: 15px;
	margin-right: 10px;
}
.bs-caret {
	font-weight: 400!important;
	text-transform: none!important;
	line-height: 1;
	display: block;
	width: 30px;
	height: 33px;
	background: #fff;
	position: absolute;
	right: 0;
	top: 0;
	color: #d8d8d8;
	text-align: center;
	-webkit-transform: rotate(180deg);
	-ms-transform: rotate(180deg);
	transform: rotate(180deg);
	overflow: hidden;
}
.min__price, .max__price{
  position: absolute;
	line-height: 28px;
	padding: 0 0 0 9px;
	z-index: 100;
	left: 0;
	top: 2px;
	display: block;
	font-weight: 300;
}
.label-cbx {
  user-select: none;
  cursor: pointer;
  margin-bottom: 0;
}
.label-cbx input:checked + .checkbox {
  border-color: #f9a617;
}
.label-cbx input:checked + .checkbox svg path {
  fill: #f9a617;
}
.label-cbx input:checked + .checkbox svg polyline {
  stroke-dashoffset: 0;
}
.label-cbx:hover .checkbox svg path {
  stroke-dashoffset: 0;
}
.label-cbx .checkbox {
  position: relative;
  top: 2px;
  float: left;
  margin-right: 8px;
  width: 20px;
  height: 20px;
  border: 2px solid #dcdfe6;
  border-radius: 3px;
  -moz-box-sizing: border-box;
    box-sizing: border-box; 
}
.label-cbx .checkbox svg {
  position: absolute;
  top: -2px;
  left: -2px;
}
.label-cbx .checkbox svg path {
  fill: none;
  stroke: #f9a617;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 71px;
  stroke-dashoffset: 71px;
  transition: all 0.6s ease;
}
.label-cbx .checkbox svg polyline {
  fill: none;
  stroke: #FFF;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 18px;
  stroke-dashoffset: 18px;
  transition: all 0.3s ease;
}
.label-cbx > span {
  pointer-events: none;
  vertical-align: middle;
  line-height: 1.8;
}

.invisible {
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  opacity: 0;
}
label{
  font-weight: 500;
}
.checkbox{
  margin-top: 0;
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

input[type=radio] {
    display: none;
}
.sorting label span{
  border: 1px solid #dcdfe6;
	padding: 5px 10px;
	display: inline-block;
	margin: 0;
	border-radius: 3px;
  margin-right: 5px;
  cursor: pointer;
}
.sorting__h{
  	color: #7d7d7d;
	padding-bottom: 5px;
	font-size: 14px;
}
[type="radio"]:checked + span {
  background: #f3f3f3;
}
.ven1{
  	margin-bottom: 10px;
	padding-left: 20px;
	text-align: left;
	border-bottom: solid 1px #eee;
}
.list-group-item{
  	-webkit-box-shadow: 0 1px 3px 0 #c9d3d8;
	box-shadow: 0 1px 3px 0 #c9d3d8;
	display: inline-block;
	margin-right: 10px;
	margin-left: 10px;
	border-radius: 3px;
	margin-bottom: 15px;
  background: #f9a718;
	background: -webkit-linear-gradient(bottom,#f9a718,#ea8d0b);
	background: -moz-linear-gradient(bottom,#f9a718,#ea8d0b);
	background: linear-gradient(0deg,#f9a718,#ea8d0b);
}
.list-group{
      display: inline-block;
    margin: 0;
    margin-bottom: 20px;
    padding: 0;
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
    margin-top: 10px;
    display: inline-block;
        -webkit-transition: .2s background-color;
    -o-transition: .2s background-color;
    transition: .2s background-color;
}

.category-block h3{
font-size: 32px;
    margin: 15px 0;
    color: #262626;
}
@media screen and (max-width: 1100px) {
    .col-sm-4{
      width: 33.333333333%;
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
    .col-sm-4{
      width: 33.333333333%;
    }
    .btn__filter{
      display: block;
    }
    .sidebar{
      display: none;
    }
    .col-sm-9{
      width: 100%;
    }
    .category__sale{
          padding: 10px;
    }
    .list-group{
      margin-bottom: 0px;
    }
}
@media screen and (max-width: 620px) {
    .col-sm-4{
      width: 50%;
    }
}
@media screen and (max-width: 360px) {
    .col-sm-4{
      width: 100%;
    }
}

</style>