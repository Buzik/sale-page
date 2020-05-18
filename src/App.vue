<template>
	<div class="body_bg">
		<div class="holder" id="holder" v-show="visible">
  			<div class="preloader1"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
		<header>
			<div class="container2">
				<div class="row">
					<router-link :to="{name: 'home'}"><img src="/upload/news-image/ogo/-30_SALE_halloween_NEWS_1200x350_pxl.jpg" alt="" style="width: 100%" class="img_header"></router-link>
          <router-link :to="{name: 'home'}"><img src="/upload/news-image/ogo/-30_SALE_halloween_NEWS_500x400_pxl.jpg" alt="" style="width: 100%" class="img_header-mobile"></router-link>
				</div>
				
			</div>
		</header>
		<section class="void">
			<div class="container1">
				<div class="row">
					<div class="col col-sm-12">
						<transition 
						enter-active-class="animated fadeIn faster"
						leave-active-class="animated fadeOut faster"
						 mode="out-in">
							<router-view></router-view>
						</transition>
					</div>
				</div>
			</div>
		</section>
	</div>
	
</template>

<script>
    import AppHome from './components/Home';

	import {mapGetters} from 'vuex';

	export default {
		computed: {
			...mapGetters('menu', {
				menuList: 'items'
			}),
			...mapGetters('list', {
				visible: 'isUiLocked'
			}),
			...mapGetters('cart', {
				lengthInCart: 'cnt'
			})
		},
        components: {
			AppHome
		}
	}
</script>

<style>
	.body_bg{
        background-size: 50%;
	}

	.container1{
       width: auto;
	   padding: 0;
	      
	} 
	.container2 img{
		width: 100%;
		margin-bottom: 20px;
	}
	.btn-primary.active.focus, .btn-primary.active:focus, .btn-primary.active:hover, .btn-primary:active.focus, .btn-primary:active:focus, .btn-primary:active:hover, .open>.dropdown-toggle.btn-primary.focus, .open>.dropdown-toggle.btn-primary:focus, .open>.dropdown-toggle.btn-primary:hover {
	color: #fff;
	background-color: #dc3e48;
	border-color: #cf3e47;
}
	/* .void{
		 min-height: 1812px;
	} */
	.menu{
		border-right: 1px solid #ddd;
	}
    .row{
		margin: 0;
		    overflow: hidden;
	}
	.list-group-item{
		transition: background 0.3s, color 0.3s;
	}
  .img_header-mobile{
    display: none;
  }
    .col-sm-12{
		padding-left: 0px;
	}
	.list-group-item a{
		text-decoration: none;
	display: block;
	padding: 10px 20px;
	color: #000;
	}

	.list-group-item.active a{
		color: inherit;
	}
	.fix_wrap{
		display: none;
	}
	




@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}


.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.fast {
  -webkit-animation-duration: 800ms;
  animation-duration: 800ms;
}

.animated.faster {
  -webkit-animation-duration: 500ms;
  animation-duration: 500ms;
}


@media (print), (prefers-reduced-motion) {
  .animated {
    -webkit-animation: unset !important;
    animation: unset !important;
    -webkit-transition: none !important;
    transition: none !important;
  }
}


.holder {
    	position: absolute;
	left: 0;
	top: 486px;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 530px;
	background-color: #ffffffcc;
	z-index: 55;
}

.preloader1 {
  /* size */
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  animation: rotatePreloader1 2s infinite ease-in;
}

@keyframes rotatePreloader1 {
  0% {
    transform: translateX(-50%) translateY(-50%) rotateZ(0deg);
  }
  100% {
    transform: translateX(-50%) translateY(-50%) rotateZ(-360deg);
  }
}
.preloader1 div {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.preloader1 div:before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0%;
  width: 10%;
  height: 10%;
  	background-color: #dc3e48;
  transform: translateX(-50%);
  border-radius: 50%;
}

.preloader1 div:nth-child(1) {
  transform: rotateZ(0deg);
  animation: rotateCircle1 2s infinite linear;
  z-index: 9;
}

@keyframes rotateCircle1 {
  0% {
    opacity: 0;
  }
  0% {
    opacity: 1;
    transform: rotateZ(36deg);
  }
  7% {
    transform: rotateZ(0deg);
  }
  57% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
}
.preloader1 div:nth-child(2) {
  transform: rotateZ(36deg);
  animation: rotateCircle2 2s infinite linear;
  z-index: 8;
}

@keyframes rotateCircle2 {
  5% {
    opacity: 0;
  }
  5.0001% {
    opacity: 1;
    transform: rotateZ(0deg);
  }
  12% {
    transform: rotateZ(-36deg);
  }
  62% {
    transform: rotateZ(-36deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
}
.preloader1 div:nth-child(3) {
  transform: rotateZ(72deg);
  animation: rotateCircle3 2s infinite linear;
  z-index: 7;
}

@keyframes rotateCircle3 {
  10% {
    opacity: 0;
  }
  10.0002% {
    opacity: 1;
    transform: rotateZ(-36deg);
  }
  17% {
    transform: rotateZ(-72deg);
  }
  67% {
    transform: rotateZ(-72deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
}
.preloader1 div:nth-child(4) {
  transform: rotateZ(108deg);
  animation: rotateCircle4 2s infinite linear;
  z-index: 6;
}

@keyframes rotateCircle4 {
  15% {
    opacity: 0;
  }
  15.0003% {
    opacity: 1;
    transform: rotateZ(-72deg);
  }
  22% {
    transform: rotateZ(-108deg);
  }
  72% {
    transform: rotateZ(-108deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
}
.preloader1 div:nth-child(5) {
  transform: rotateZ(144deg);
  animation: rotateCircle5 2s infinite linear;
  z-index: 5;
}

@keyframes rotateCircle5 {
  20% {
    opacity: 0;
  }
  20.0004% {
    opacity: 1;
    transform: rotateZ(-108deg);
  }
  27% {
    transform: rotateZ(-144deg);
  }
  77% {
    transform: rotateZ(-144deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
}
.preloader1 div:nth-child(6) {
  transform: rotateZ(180deg);
  animation: rotateCircle6 2s infinite linear;
  z-index: 4;
}

@keyframes rotateCircle6 {
  25% {
    opacity: 0;
  }
  25.0005% {
    opacity: 1;
    transform: rotateZ(-144deg);
  }
  32% {
    transform: rotateZ(-180deg);
  }
  82% {
    transform: rotateZ(-180deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
}
.preloader1 div:nth-child(7) {
  transform: rotateZ(216deg);
  animation: rotateCircle7 2s infinite linear;
  z-index: 3;
}

@keyframes rotateCircle7 {
  30% {
    opacity: 0;
  }
  30.0006% {
    opacity: 1;
    transform: rotateZ(-180deg);
  }
  37% {
    transform: rotateZ(-216deg);
  }
  87% {
    transform: rotateZ(-216deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
}
.preloader1 div:nth-child(8) {
  transform: rotateZ(252deg);
  animation: rotateCircle8 2s infinite linear;
  z-index: 2;
}

@keyframes rotateCircle8 {
  35% {
    opacity: 0;
  }
  35.0007% {
    opacity: 1;
    transform: rotateZ(-216deg);
  }
  42% {
    transform: rotateZ(-252deg);
  }
  92% {
    transform: rotateZ(-252deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
}
.preloader1 div:nth-child(9) {
  transform: rotateZ(288deg);
  animation: rotateCircle9 2s infinite linear;
  z-index: 1;
}

@keyframes rotateCircle9 {
  40% {
    opacity: 0;
  }
  40.0008% {
    opacity: 1;
    transform: rotateZ(-252deg);
  }
  47% {
    transform: rotateZ(-288deg);
  }
  97% {
    transform: rotateZ(-288deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
}
.preloader1 div:nth-child(10) {
  transform: rotateZ(324deg);
  animation: rotateCircle10 2s infinite linear;
  z-index: 0;
}

@keyframes rotateCircle10 {
  45% {
    opacity: 0;
  }
  45.0009% {
    opacity: 1;
    transform: rotateZ(-288deg);
  }
  52% {
    transform: rotateZ(-324deg);
  }
  102% {
    transform: rotateZ(-324deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
}
@media screen and (max-width: 750px) {
    .container2 img{
    width: 100%;
    margin-bottom: 0;
    vertical-align: top;
}
}

@media screen and (max-width: 500px) {
    .img_header-mobile{
	display: block;
   }
   .img_header{
	display: none;
   }
}
</style>