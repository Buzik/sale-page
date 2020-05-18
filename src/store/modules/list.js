import Vue from 'vue';

export default {
	namespaced: true,
	state: {
		list: [],
		lockingPool: 0
	},
	getters: {
		isUiLocked(state){
			return state.lockingPool > 0;
		},
		list(state){
			return state.list;
		},
		categoryItem:(state, getters) => (names) => {
			var arrCategory = [];
			
			function catItem(val){
				for (var key in val) {
					if(val[key].route == names){
						arrCategory.push(val[key])
					}else{
						catItem(val[key].level);
					}
				}
			}

			catItem(state.list);
            return arrCategory;
		},
		hit(state){   //лучшие предложения
			var hitProduct = [];
			function category(val){
				for (var key in val) {
						if(val[key].level === undefined){
							for(let i = 0; i < val[key].product.length; i++){
								if(val[key].product[i].articul == "179191"){
									hitProduct.push(val[key].product[i]);
								}
							}
						}else{
							category(val[key].level);
						}
					
				}
				
				
			}
  
			category(state.list);
			return hitProduct;
		},
		item: (state, getters) => (names) => { //товары
			var arrProduct = [];
			
			function category(val){
				for (var key in val) {
					if(val[key].route == names){
						if(val[key].level === undefined){
							for(let i = 0; i < val[key].product.length; i++){
										arrProduct.push(val[key].product[i]);
							}
						}
						function allProduct(obj){
							for (var keys in obj) {
								if(obj[keys].level !== undefined){
									allProduct(obj[keys].level);
								}else{
									for(let i = 0; i < obj[keys].product.length; i++){
													arrProduct.push(obj[keys].product[i]);
									}
								}
							}
						}
						allProduct(val[key].level)
					}else{
						category(val[key].level);
					}
				}
				
			}
  
			category(state.list);

			return arrProduct;
		}
	},
	mutations: {
		lockUi(state){
			state.lockingPool++;
		},
		unlockUi(state){
			state.lockingPool--;
		},
		clearList(state){
			state.list = [];
		},
		loadList(state, data){

			state.list = data;
		}
		
	},
	actions: {
		loadList(store){
			store.commit('lockUi');
			store.commit('clearList');
			var articles = document.querySelectorAll('.city_select .wrap .text');
            
			Vue.http.get('ajax/new/get_action_items.php?action=halloween-skidki-do-30&city=' + articles)
					  .then(response => response.json())
					  .then(data => {
						   store.commit('loadList', data);
						   store.commit('unlockUi');
					  });
		}
	}
};