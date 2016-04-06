$(function(){
  $('button').on('click',function(){
    var balance = '';
  $.get('http://localhost:3000/balance').done(function(response){
    balance = response;
    $('.account').append('<p>' +balance + '</p>');

    });
  });
});
