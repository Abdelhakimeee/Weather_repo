// console.log("Abdo don't give up.")
// const apiKey = "98c910214a8146d6860111026240805";
// const apiUrl = "http://api.weatherapi.com/v1/current.json?key=&q=London&aqi=no";




// const searchBox = document.querySelector(".search input")
// const searchBtn = document.querySelector(".search button")

// searchBtn.addEventListener('click',()=>{
//     checkWeather(searchBox.value);
// })
async function checkWeather(){
    const city = document.getElementById("cityInput").value


    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=98c910214a8146d6860111026240805 &q=${city}&aqi=no`);
    var data = await response.json();
    console.log(data);
    

    // to printing in HTML_page
    document.querySelector(".city").innerHTML = data.location.name; 
    document.querySelector(".temp").innerHTML = data.current.temp_c + "°c";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + "km/h";

    // document.querySelector(".icon").innerHTML = data.current.condition.icon;
    document.querySelector(".icon_text").innerHTML = data.current.condition.text;

}


