$(document).ready(function(){

  var weapons = [
    {"name": "pistol",
    "damage": "30",
    "second": "124.2",
    "fire-rate": "46",
    "magazine": "24",
    "accuracy": "90%",
    "weight": "4.2"
  },
  {"name": "Gainer",
  "damage": "48",
  "second": "28.8",
  "rate": "6",
  "magazine": "6",
  "accuracy": "70%",
  "weight": "4.27"
},
{"name": "rifle",
"damage": "30",
"second": "120",
"rate": "40",
"magazine": "30",
"accuracy": "60%",
"weight": "7.2"
},
{"name": "gen",
"damage": "32",
"second": "128",
"fire-rate": "40",
"magazine": "66",
"accuracy": "100%",
"weight": "7"
},
{"name": "last",
"damage": "192",
"second": "200",
"rate": "46",
"magazine": "66",
"accuracy": "112%",
"weight": "12"
},
{"name": "pist",
"damage": "57",
"second": "56",
"fire-rate": "59",
"magazine": "24",
"accuracy": "90%",
"weight": "7"
},
{"name": "rare",
"damage": "51",
"damage-second": "576.3",
"rate": "113",
"magazine": "75",
"accuracy": "108%",
"weight": "10"
},
{"name": "pi",
"damage": "37",
"second": "11.2",
"rate": "3",
"magazine": "5",
"accuracy": "71%",
"weight": "13.2"
}
  ]
$('.item-list a').on('click',function(e){
  $('.item-list a').removeClass('active');
  $(e.currentTarget).addClass('active');
});
$('.item-list li').on('click',function(e){
  $('.item-list li').removeClass('active');
  $(e.currentTarget).addClass('active');
});

$('.item-list a').on('mouseenter',function(e){
  var current_item = $(e.currentTarget).attr('class');
  console.log(current_item);

  for(item in weapons){
    if(weapons[item].name == current_item){
      console.log(weapons[item]);

      var container= $('.item-stats');
      container.find('.damage').html(weapons[item].damage);
      container.find('.second').html(weapons[item].second);
      container.find('.rate').html(weapons[item].rate);
      container.find('.magazine').html(weapons[item].magazine);
      container.find('.accuracy').html(weapons[item].accuracy);
      container.find('.weight').html(weapons[item].weight);
    }
  };
});

});
