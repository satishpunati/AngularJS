(function(){
var app = angular.module("store",[]);

app.controller("StoreController", function(){
this.product = gem;
});	

var gem = {
	name: 'DodeCahadron',
	price: 2.95,
	description: 'Some description',
	canPurchase: false	
};
	
})();
