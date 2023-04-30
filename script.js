var searchBar = document.getElementById("searchInput");
var submitBtn = document.getElementById("submit")


function saveData() {
    var input = document.getElementById("searchInput").value;
    window.localStorage.setItem("info", input);
    console.log(input)
  };

 var savedData = localStorage.getItem("server");

 submitBtn.addEventListener("click", function (){
 fetch("https://api.openweathermap.org/data/2.5/forecast?q="+searchBar.value+"&appid=229fb7ce25034ac6618ba416d71733f0&units=imperial")
 .then(function (response) {
   console.log(response);
   return response.json()
 })
 .then(function(data) {
 console.log(data)

 var currTempdiv = document.getElementById('#currtemp');
 var currTemp = data.list[1].main.temp

 currTempdiv.innerHTML = currTemp;

})  
});





//  var currWind = data.list[1].wind.speed;
//  var currHumidity = data.list[1].main.humidity;
//  var currIcon = data.list[1].weather.icon;

//  var dayOneTemp = data.list[7].main.temp;
//  var dayOneWind = data.list[7].wind.speed;
//  var dayOneHumidity = data.list[7].main.humidity;
//  var dayOneIcon = data.list[7].weather.icon;
 
//  var dayTwoTemp = data.list[15].main.temp;
//  var dayTwoWind = data.list[15].wind.speed;
//  var dayTwoHumidity = data.list[15].main.humidity;
//  var dayTwoIcon = data.list[15].weather.icon;

//  var dayThreeTemp = data.list[23].main.temp;
//  var dayThreeWind = data.list[23].wind.speed;
//  var dayThreeHumidity = data.list[23].main.humidity;
//  var dayThreeIcon = data.list[23].weather.icon;

//  var dayFourTemp = data.list[31].main.temp;
//  var dayFourWind = data.list[31].wind.speed;
//  var dayFourHumidity = data.list[31].main.humidity;
//  var dayFourIcon = data.list[31].weather.icon;

//  var dayFiveTemp = data.list[39].main.temp;
//  var dayFiveWind = data.list[39].wind.speed;
//  var dayFiveHumidity = data.list[39].main.humidity;
//  var dayFiveIcon = data.list[39].weather.icon;
 
 
 
 
 





