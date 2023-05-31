var searchBar = document.getElementById('searchInput');
var submitBtn = document.getElementById('submit')
var savedDataArray = JSON.parse(localStorage.getItem('prevSearches')) || [];
var apiKey = "229fb7ce25034ac6618ba416d71733f0"


submitBtn.addEventListener('click', function runData (e) {
  if (e.target.matches('button')) {
    console.log('button clicked');
    if (savedDataArray.indexOf(searchBar.value) == -1) {
      savedDataArray.push(searchBar.value);
      localStorage.setItem('prevSearches', JSON.stringify(savedDataArray));
      
    }
  }
});


submitBtn.addEventListener("click", function runData2() {
  // gets current weather 
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&appid=${apiKey}&units=imperial`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log('data is', data); 

       document.getElementById('cityname').innerHTML = data.name
       document.getElementById('currtemp').innerHTML = data.main.feels_like
       document.getElementById('currwind').innerHTML = data.wind.speed
       document.getElementById('currhumid').innerHTML = data.main.humidity
       document.getElementById('currIcon').setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

       addToRecentSearch(searchBar.value);
       
  })
})

submitBtn.addEventListener("click", function runData() {
  clearSearchBar();
    // here is where you would assign data values to html elements
    // ...
    // run another function OR run another fetch directly here where you get forecast weather
  // })
  // gets 5 day forcast
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchBar.value}&appid=${apiKey}&units=imperial`)
    .then(function (response) {
      console.log(response);
      return response.json()
     })
     .then(function (data) {
      console.log(data)
      addToRecentSearch(searchBar.value);
    

  //     // do a for loop
  //     // for(let i = 0; i < 5; i++) {
  //}

      document.getElementById('day1date').innerHTML = data.list[1].dt_txt.substring(0,10);
      document.getElementById('day1temp').innerHTML = data.list[1].main.temp;
      document.getElementById('day1wind').innerHTML = data.list[1].wind.speed;
      document.getElementById('day1humid').innerHTML = data.list[1].main.humidity;
      document.getElementById('day1icon').setAttribute("src", `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`)

      document.getElementById('day2date').innerHTML = data.list[7].dt_txt.substring(0,10);
      document.getElementById('day2temp').innerHTML = data.list[7].main.temp;
      document.getElementById('day2wind').innerHTML = data.list[7].wind.speed;
      document.getElementById('day2humid').innerHTML = data.list[7].main.humidity;
      document.getElementById('day2icon').setAttribute("src",`https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png`);

      document.getElementById('day3date').innerHTML = data.list[15].dt_txt.substring(0,10);
      document.getElementById('day3temp').innerHTML = data.list[15].main.temp;
      document.getElementById('day3wind').innerHTML = data.list[15].wind.speed;
      document.getElementById('day3humid').innerHTML = data.list[15].main.humidity;
      document.getElementById('day3icon').setAttribute("src",`https://openweathermap.org/img/wn/${data.list[15].weather[0].icon}@2x.png`);

      document.getElementById('day4date').innerHTML = data.list[23].dt_txt.substring(0,10);
      document.getElementById('day4temp').innerHTML = data.list[23].main.temp;
      document.getElementById('day4wind').innerHTML = data.list[23].wind.speed;
      document.getElementById('day4humid').innerHTML = data.list[23].main.humidity;
      document.getElementById('day4icon').setAttribute("src",`https://openweathermap.org/img/wn/${data.list[23].weather[0].icon}@2x.png`);

      document.getElementById('day5date').innerHTML = data.list[31].dt_txt.substring(0,10);
      document.getElementById('day5temp').innerHTML = data.list[31].main.temp;
      document.getElementById('day5wind').innerHTML = data.list[31].wind.speed;
      document.getElementById('day5humid').innerHTML = data.list[31].main.humidity;
      document.getElementById('day5icon').setAttribute("src",`https://openweathermap.org/img/wn/${data.list[31].weather[0].icon}@2x.png`);

     })
    });

     
function runSearchAgain(e) {
  console.log(e.target.textContent);
  fetch("https://api.openweathermap.org/data/2.5/forecast?q=$"+e.target.textContent+"&appid=${apiKey}&units=imperial")
    .then(res => {
      return res.json();
    })
    .then(data => {
      runData(data);
      runData2(data);
    })
}

 function  addToRecentSearch(city) {
  var citiesSpan = document.createElement('span');
  citiesSpan.setAttribute("id", "citiesSpan");
  citiesSpan.textContent = city;
  //citiesSpan.addEventListener('click', runSearchAgain);
  var prevResults = document.getElementById('prevresults');
  prevResults.append(citiesSpan);
 }
