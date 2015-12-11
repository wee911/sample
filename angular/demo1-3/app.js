(function() {
	var app = angular.module('gemStore', []);
	app.controller('StoreController', function() {
		this.products = gems;
	});

	var gems  = [{
		name: 'Azurite',
		price: 2.95,
		description: 'This is very nice, absolutly!',
		canPurchase: true
	},{
		name: 'BBQ',
		price: 2.95,
		description: 'This is very nice, absolutly!',
		canPurchase: false
	},{
		name: 'Hunger',
		price: 2.95,
		description: 'This is very nice, absolutly!',
		canPurchase: true
	}
	];


})();