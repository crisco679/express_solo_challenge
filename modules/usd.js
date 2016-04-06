var money = function(num){
  return num.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
};


module.exports = money;
