$(document).ready(function(){

  var weapons = [
    {"name": "pistol",
    "damage": "30",
    "damage-second": "124.2",
    "fire-rate": "46",
    "magazine": "24",
    "accuracy": "90%",
    "weight": "4.2"
  },
  {"name": "The-Gainer",
  "damage": "48",
  "damage-second": "28.8",
  "fire-rate": "6",
  "magazine": "6",
  "accuracy": "70%",
  "weight": "4.27"
},
{"name": "Assault-rifle",
"damage": "30",
"damage-second": "120",
"fire-rate": "40",
"magazine": "30",
"accuracy": "60%",
"weight": "7.2"
},
{"name": "last",
"damage": "30",
"damage-second": "124.2",
"fire-rate": "46",
"magazine": "24",
"accuracy": "90%",
"weight": "4.2"
},
{"name": "pist",
"damage": "57",
"damage-second": "56",
"fire-rate": "46",
"magazine": "24",
"accuracy": "90%",
"weight": "4.2"
},
{"name": "rare",
"damage": "51",
"damage-second": "576.3",
"fire-rate": "113",
"magazine": "75",
"accuracy": "108%",
"weight": "10"
},
{"name": "pi",
"damage": "37",
"damage-second": "11.2",
"fire-rate": "3",
"magazine": "5",
"accuracy": "71%",
"weight": "13.2"
}
  ]
$('.item-list a').on('mouseenter',function(e){
  var current_item = $(e.currentTarget).attr('class');
  console.log(current_item);

  for(item in weapons){
    if(weapons[item].name == current_item){
      console.log(weapons[item]);

      var container= $('.item-stats');
      container.find('.damage').html(weapons[item].damage);
    }
  };
});

});
