import Ember from 'ember';

export default Ember.Object.extend({
});

var ShoppingCart = Ember.Object.extend({
  items: [],
  total: Ember.computed("items.@each.total", function(){
    return this.get("items").reduce(function(memo, item){
      return memo + item.get('total');
    }, 0);
  }),
  numberOfItems: Ember.computed.alias("items.length")
});

var Item = Ember.Object.extend({
  price: 0,
  quantity: 0,
  total: Ember.computed("price", "quantity", function(){
    return this.get("price") * this.get("quantity");
  })
});
var ham     = Item.create({price: 3, quantity: 1});
var cheese  = Item.create({price: 5, quantity: 1});
var bread   = Item.create({price: 2, quantity: 1});
var cart = ShoppingCart.create();
cart.get("numberOfItems");

cart.get('items').pushObjects([ham, cheese, bread]);
cart.get("numberOfItems");
