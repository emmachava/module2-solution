(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
  toBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
  toBuy.message = "Everything is bought!";
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
  alreadyBought.message = "Nothing bought yet.";
}

function ShoppingListCheckOffService() {
  var service = this;

  // Initial List of shopping items
  var toBuyItems = [
    {
      name: "cookies",
      quantity: 5
    },
    {
      name: "chips",
      quantity: 2
    },
    {
      name: "ice cream",
      quantity: 1
    },
    {
      name: "milk",
      quantity: 3
    },
    {
      name: "tortillas",
      quantity: 6
    }
  ];

  // Array for bought items
  var boughtItems = [];

  service.buyItem = function (itemIndex) {
      boughtItems.push(toBuyItems[itemIndex]);
      toBuyItems.splice(itemIndex, 1);
  }

  service.getItemsToBuy = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}
})();
