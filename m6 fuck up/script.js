var searchBar = document.querySelectorAll(".searchBar");
var submitBtn = document.getElementById("#submit")
function saveData() {
    var input = document.getElementById("searchInput").value;
    window.localStorage.setItem("info", input);
    console.log(input)
  }

 var savedData = localStorage.getItem("server");

 fetch("api.openweathermap.org/data/2.5/forecast?q="+searchBar.value+"&appid=229fb7ce25034ac6618ba416d71733f0&units=imperial")
 .then(function (response) {
   console.log(response);
   return response.json();
 })
  











// submitBtn.addEventListener("click", runSearch)

