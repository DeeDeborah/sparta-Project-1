$(document).ready(function(event){
  var points = $('#points');
  var blender = $('#target');
  var container = $('.game-container');
  var span = 0;
  // var $Timer = $('#Timer');


  var $fruit = [];
  var cherry =$('#cherry');
  var strawberry = $('#strawberry');
  var gameOver = true;
  var seconds = 90;
  var timer = $('#Timer')


  spawnFruit();

  $(function(){
   $('#Timer').startTimer();
 });

 var value = 0;

//setInterval function for blender and fruit collision
  setInterval(function(){
  var collision =($($(blender)).collision(".fruit"));

  if (collision.length > 0){
    console.log(collision);

  value = parseInt($('#Score').text(), 10) + 2;
    $('#Score').text(value);
      console.log(value);
    $(collision).hide(); // Hides fruit on collision

  }else
    $('.fruit').show();
  }, 10);

  setInterval(function(){
    alert('gameover! your score was '+value);
    console.log($('#Score').html());
    window.location.href="file:///Users/tech-a08/Engr7/MyGame/html/GameOver.html"
  }, 60000);


  setInterval(function(){

    console.log('timer')
    timer--
  }, 1000);

  //moves the blender
  $(document).keydown(function(event){
    switch (event.which){
      case 37://left
      $('#target').animate({
        'left': '-=30px'
      });
      console.log('move left');
        break;
      case 39://right
      $('#target').animate({
        'left': '+=30px'
     });
      console.log('move right');
      break;
    }
    event.preventDefault();
  });

  // Spawn Fruit
  function spawnFruit() {
    for(var i = 0; i < 3; i++){

      $fruit.push($('<div>', { class: 'fruit', strawberry: 'strawberry' + i}));
      $(".game-container").append($fruit);

      $fruit.push($('<div>', { class: 'fruit', cherries: 'cherries' + i}));
      $(".game-container").append($fruit);

      $fruit.push($('<div>', { class: 'fruit', Orange: 'orange' + i}));
      $(".game-container").append($fruit);

      $fruit.push($('<div>', { class: 'fruit', apple: 'apple' + i}));
      $(".game-container").append($fruit);

      $fruit.push($('<div>', { class: 'fruit', pear: 'pear' + i}));
      $(".game-container").append($fruit);

      $fruit.push($('<div>', { class: 'fruit', lemon: 'lemon' + i}));
      $(".game-container").append($fruit);

      $fruit.push($('<div>', { class: 'fruit', lime: 'lime' + i}));
      $(".game-container").append($fruit);




      };
    };

});
