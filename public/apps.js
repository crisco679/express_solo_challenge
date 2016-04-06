$(function(){
  $('button').on('click',function(){
    var balance = '';
  $.get('/balance').done(function(response){
    balance = response;
    $('.account').append('<p>' +balance + '</p>');

    });
  });
});
