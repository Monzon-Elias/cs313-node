function search() {
  // Get the value from the search box
  let cityNameFromInput = location.search.slice(3);
  console.log(cityNameFromInput);
  capitalizeFirstLetter = (s) => {
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
  cityNameFromInput = capitalizeFirstLetter(cityNameFromInput);
  
  //CITY WEATHER TODAY
  const URL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityNameFromInput + "&units=metric&APPID=a32e0cfb6e9e6e82de1d76a56ea7f588";

  async function getCityWeather() {
    try {
      const response = await fetch(URL);
      const jsonData = await response.json();
      console.log(jsonData);
      let cityName = jsonData.name;
      let country = jsonData.sys.country;
      let cityTemp = jsonData.main.temp;
      let cityIcon = jsonData.weather[0].icon;
      let cityWeatherDesc = jsonData.weather[0].main;

      //CITY NAME
      document.getElementById("cityName").innerHTML = cityName + ", " + country;

      //CITY TEMP IN CELCIUS
      document.getElementById("cityTemp").innerHTML = cityTemp + "°C";

      //CITY WEATHER ICON
      document.getElementById("cityIcon").src = "https://openweathermap.org/img/wn/" + cityIcon + "@2x.png";

      //CITY WEATHER MAIN DESCRIPTION
      document.getElementById("cityWeatherDesc").innerHTML = cityWeatherDesc;

      //*************************************
      //********CITY WEATHER 4 DAYS*********
      //*************************************

      const URL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "," + country + "&units=metric&APPID=a32e0cfb6e9e6e82de1d76a56ea7f588";
      const response2 = await fetch(URL2);
      const jsonData2 = await response2.json();
      console.log(jsonData2);

      //===============
      //4 DAYS MONTHS
      //===============

      //TOMORROW MONTH
      let tomorrowMonth = jsonData2.list[4].dt_txt.charAt(6);
      document.getElementsByClassName("month")[0].innerHTML = tomorrowMonth;
      //NETX DAY MONTH
      let nextDayMonth = jsonData2.list[12].dt_txt.charAt(6);
      document.getElementsByClassName("month")[1].innerHTML = nextDayMonth;
      //NETX NETX DAY MONTH
      let nextNextDayMonth = jsonData2.list[20].dt_txt.charAt(6);
      document.getElementsByClassName("month")[2].innerHTML = nextNextDayMonth;
      //3TH DAY MONTH
      let thirdDayMonth = jsonData2.list[28].dt_txt.charAt(6);
      document.getElementsByClassName("month")[3].innerHTML = thirdDayMonth;

      //===============
      //FOUR DAYS ICONS
      //===============

      //TOMORROW ICON
      let cityIcon1 = jsonData2.list[4].weather[0].icon;
      document.getElementById("cityIcon1").src = "https://openweathermap.org/img/wn/" + cityIcon1 + "@2x.png";
      //NEXT DAY ICON
      let cityIcon2 = jsonData2.list[12].weather[0].icon;
      document.getElementById("cityIcon2").src = "https://openweathermap.org/img/wn/" + cityIcon2 + "@2x.png";
      //NEXT NEXT DAY ICON
      let cityIcon3 = jsonData2.list[20].weather[0].icon;
      document.getElementById("cityIcon3").src = "https://openweathermap.org/img/wn/" + cityIcon3 + "@2x.png";
      //3TH DAY ICON
      let cityIcon4 = jsonData2.list[28].weather[0].icon;
      document.getElementById("cityIcon4").src = "https://openweathermap.org/img/wn/" + cityIcon4 + "@2x.png";

      //===========================
      //FOUR DAYS TEMPERATURES
      //===========================

      //TOMORROW TEMP
      let cityTemp1 = jsonData2.list[4].main.temp;
      document.getElementById("cityTemp1").innerHTML = cityTemp1 + "°C";
      //NEXT DAY TEMP
      let cityTemp2 = jsonData2.list[12].main.temp;
      document.getElementById("cityTemp2").innerHTML = cityTemp2 + "°C";
      //NEXT NEXT DAY TEMP
      let cityTemp3 = jsonData2.list[20].main.temp;
      document.getElementById("cityTemp3").innerHTML = cityTemp3 + "°C";
      //3TH DAY TEMP
      let cityTemp4 = jsonData2.list[28].main.temp;
      document.getElementById("cityTemp4").innerHTML = cityTemp4 + "°C";

      //===========================
      //FOUR DAYS MAIN DESCRIPTIONS
      //===========================

      //TOMORROW CITY MAIN DESC
      let cityWeatherDesc1 = jsonData2.list[4].weather[0].main;
      document.getElementById("cityWeatherDesc1").innerHTML = cityWeatherDesc1;
      //NEXT DAY CITY MAIN DESC
      let cityWeatherDesc2 = jsonData2.list[12].weather[0].main;
      document.getElementById("cityWeatherDesc2").innerHTML = cityWeatherDesc2;
      //NEXT NEXT DAY CITY MAIN DESC
      let cityWeatherDesc3 = jsonData2.list[20].weather[0].main;
      document.getElementById("cityWeatherDesc3").innerHTML = cityWeatherDesc3;
      //3TH DAY CITY MAIN DESC
      let cityWeatherDesc4 = jsonData2.list[28].weather[0].main;
      document.getElementById("cityWeatherDesc4").innerHTML = cityWeatherDesc4;
    } catch (e) {
      throw Error(e);
    }
  }
  getCityWeather();

  /******************* 
  DIMANIC DATE OUTPUT
  ********************/

  function currentDate() {
    var d = new Date();
    // Days
    var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Months
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var ye = d.getFullYear();
    var dayNum = d.getDate();
    var day = weekday[d.getDay()];
    var m = month[d.getMonth()];
    var hours = d.getHours();
    var mins = d.getMinutes();
    const monthNum = d.getMonth();

    document.getElementById("currentDate").innerHTML = m + " " + dayNum + ", " + ye + " " + hours + ":" + mins;

    // TODAY TIME DATE
    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = m;
    document.getElementById("dayNum").innerHTML = dayNum;

    /********************
    FOUR FOLLOWING DAYS
    ********************/
    var tomorrow, nextDay, nextNextDay, thirdDay;

    switch (day) {
      case "Sun":
        tomorrow = "Mon";
        document.getElementsByClassName("day")[0].innerHTML = tomorrow;
        nextDay = "Tue";
        document.getElementsByClassName("day")[1].innerHTML = nextDay;
        nextNextDay = "Wed";
        document.getElementsByClassName("day")[2].innerHTML = nextNextDay;
        thirdDay = "Thu";
        document.getElementsByClassName("day")[3].innerHTML = thirdDay;
        break;
      case "Mon":
        tomorrow = "Tue";
        document.getElementsByClassName("day")[0].innerHTML = tomorrow;
        nextDay = "Wed";
        document.getElementsByClassName("day")[1].innerHTML = nextDay;
        nextNextDay = "Thu";
        document.getElementsByClassName("day")[2].innerHTML = nextNextDay;
        thirdDay = "Fri";
        document.getElementsByClassName("day")[3].innerHTML = thirdDay;
        break;
      case "Tue":
        tomorrow = "Wed";
        document.getElementsByClassName("day")[0].innerHTML = tomorrow;
        nextDay = "Thu";
        document.getElementsByClassName("day")[1].innerHTML = nextDay;
        nextNextDay = "Fri";
        document.getElementsByClassName("day")[2].innerHTML = nextNextDay;
        thirdDay = "Sat";
        document.getElementsByClassName("day")[3].innerHTML = thirdDay;
        break;
      case "Wed":
        tomorrow = "Thu";
        document.getElementsByClassName("day")[0].innerHTML = tomorrow;
        nextDay = "Fri";
        document.getElementsByClassName("day")[1].innerHTML = nextDay;
        nextNextDay = "Sat";
        document.getElementsByClassName("day")[2].innerHTML = nextNextDay;
        thirdDay = "Sun";
        document.getElementsByClassName("day")[3].innerHTML = thirdDay;
        break;
      case "Thu":
        tomorrow = "Fri";
        document.getElementsByClassName("day")[0].innerHTML = tomorrow;
        nextDay = "Sat";
        document.getElementsByClassName("day")[1].innerHTML = nextDay;
        nextNextDay = "Sun";
        document.getElementsByClassName("day")[2].innerHTML = nextNextDay;
        thirdDay = "Mon";
        document.getElementsByClassName("day")[3].innerHTML = thirdDay;
        break;
      case "Fri":
        tomorrow = "Sat";
        document.getElementsByClassName("day")[0].innerHTML = tomorrow;
        nextDay = "Sun";
        document.getElementsByClassName("day")[1].innerHTML = nextDay;
        nextNextDay = "Mon";
        document.getElementsByClassName("day")[2].innerHTML = nextNextDay;
        thirdDay = "Tue";
        document.getElementsByClassName("day")[3].innerHTML = thirdDay;
        break;
      case "Sat":
        tomorrow = "Sun";
        document.getElementsByClassName("day")[0].innerHTML = tomorrow;
        nextDay = "Mon";
        document.getElementsByClassName("day")[1].innerHTML = nextDay;
        nextNextDay = "Tue";
        document.getElementsByClassName("day")[2].innerHTML = nextNextDay;
        thirdDay = "Wed";
        document.getElementsByClassName("day")[3].innerHTML = thirdDay;
        break;
    }
    /***************************** 
    FOUR FOLLOWING DAYS'DAY NUMBER
    ******************************/
    let a = 1;
    for (let i = 0; i < 4; i++) {

      //LARGE MONTHS
      if (dayNum <= 27 && monthNum == 1 || monthNum == 3 || monthNum == 5 || monthNum == 7 || monthNum == 8 || monthNum == 10 || monthNum == 12) {
        document.getElementsByClassName("dayNum")[i].innerHTML = dayNum + a;
        ++a;
      } else if (dayNum == 28) {
        document.getElementsByClassName("dayNum")[3].innerHTML = 1;
      } else if (dayNum == 29) {
        document.getElementsByClassName("dayNum")[2].innerHTML = 1;
        document.getElementsByClassName("dayNum")[3].innerHTML = 2;
      } else if (dayNum == 30) {
        document.getElementsByClassName("dayNum")[1].innerHTML = 1;
        document.getElementsByClassName("dayNum")[2].innerHTML = 2;
        document.getElementsByClassName("dayNum")[3].innerHTML = 3;
      } else if (dayNum == 31) {
        document.getElementsByClassName("dayNum")[0].innerHTML = 1;
        document.getElementsByClassName("dayNum")[1].innerHTML = 2;
        document.getElementsByClassName("dayNum")[2].innerHTML = 3;
        document.getElementsByClassName("dayNum")[3].innerHTML = 4;
      }

        //SHORT MONTHS
        if (dayNum <= 26 && monthNum == 4 || monthNum == 6 || monthNum == 9 || monthNum == 11) {
          document.getElementsByClassName("dayNum")[i].innerHTML = dayNum + a;
          ++a;
        } else if (dayNum == 27) {
          document.getElementsByClassName("dayNum")[3].innerHTML = 1;
        } else if (dayNum == 28) {
          document.getElementsByClassName("dayNum")[2].innerHTML = 1;
          document.getElementsByClassName("dayNum")[3].innerHTML = 2;
        } else if (dayNum == 29) {
          document.getElementsByClassName("dayNum")[1].innerHTML = 1;
          document.getElementsByClassName("dayNum")[2].innerHTML = 2;
          document.getElementsByClassName("dayNum")[3].innerHTML = 3;
        } else if (dayNum == 30) {
          document.getElementsByClassName("dayNum")[0].innerHTML = 1;
          document.getElementsByClassName("dayNum")[1].innerHTML = 2;
          document.getElementsByClassName("dayNum")[2].innerHTML = 3;
          document.getElementsByClassName("dayNum")[3].innerHTML = 4;

        //LEAP-YEAR
        }if (ye % 4 == 0 && monthNum == 2 && dayNum <= 25) {
          document.getElementsByClassName("dayNum")[i].innerHTML = dayNum + a;
          ++a;
        } else if (dayNum == 26) {
          document.getElementsByClassName("dayNum")[3].innerHTML = 1;
        } else if (dayNum == 27) {
          document.getElementsByClassName("dayNum")[2].innerHTML = 1;
          document.getElementsByClassName("dayNum")[3].innerHTML = 2;
        } else if (dayNum == 28) {
          document.getElementsByClassName("dayNum")[1].innerHTML = 1;
          document.getElementsByClassName("dayNum")[2].innerHTML = 2;
          document.getElementsByClassName("dayNum")[3].innerHTML = 3;
        } else if (dayNum == 29) {
          document.getElementsByClassName("dayNum")[0].innerHTML = 1;
          document.getElementsByClassName("dayNum")[1].innerHTML = 2;
          document.getElementsByClassName("dayNum")[2].innerHTML = 3;
          document.getElementsByClassName("dayNum")[3].innerHTML = 4;

        //NORMAL FEBRURAY
        }if (monthNum == 2 && dayNum <= 24) {
          document.getElementsByClassName("dayNum")[i].innerHTML = dayNum + a;
          ++a;
        } else if (dayNum == 25) {
          document.getElementsByClassName("dayNum")[3].innerHTML = 1;
        } else if (dayNum == 26) {
          document.getElementsByClassName("dayNum")[2].innerHTML = 1;
          document.getElementsByClassName("dayNum")[3].innerHTML = 2;
        } else if (dayNum == 27) {
          document.getElementsByClassName("dayNum")[1].innerHTML = 1;
          document.getElementsByClassName("dayNum")[2].innerHTML = 2;
          document.getElementsByClassName("dayNum")[3].innerHTML = 3;
        } else if (dayNum == 28) {
          document.getElementsByClassName("dayNum")[0].innerHTML = 1;
          document.getElementsByClassName("dayNum")[1].innerHTML = 2;
          document.getElementsByClassName("dayNum")[2].innerHTML = 3;
          document.getElementsByClassName("dayNum")[3].innerHTML = 4;
        }
      }
    }
      currentDate();
}