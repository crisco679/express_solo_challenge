var randomNumber = function(min, max){
  return Math.random() * (1 + max - min) + min;
};

module.exports = randomNumber;
