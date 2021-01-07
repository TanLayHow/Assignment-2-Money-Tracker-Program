// To make sticky navbar on top
window.onscroll = function() {myFunction()};
var header = document.getElementById("navbar");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Clock function to make it updated
function updateClock(){
  var now = new Date();
  var dname = now.getDay(),
      mo = now.getMonth(),
      dnum = now.getDate(),
      yr = now.getFullYear(),
      hou = now.getHours(),
      min = now.getMinutes(),
      sec = now.getSeconds(),
      pe = "AM";
  
      if(hou >= 12){
        pe = "PM";
      }
      if(hou == 0){
        hou = 12;
      }
      if(hou > 12){
        hou = hou - 12;
      }

      Number.prototype.pad = function(digits){
        for(var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
      }

      var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
      var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
      var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
      for(var i = 0; i < ids.length; i++)
      document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

// To make clock get updated instantly 
function initClock(){
  updateClock();
  window.setInterval("updateClock()", 1);
}

// Currency list to use
let currencies = [
  {
    name: "US Dollar",
    abbreviation: "USD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/us.gif"
  },
  {
    name: "Euro",
    abbreviation: "EUR",
    symbol: "\u20AC",
    flagURL: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
  },
  {
    name: "Japanese Yen",
    abbreviation: "JPY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/jp.gif"
  },
  {
    name: "British Pound",
    abbreviation: "GBP",
    symbol: "\u00A3",
    flagURL: "http://www.geonames.org/flags/l/uk.gif"
  },
  {
    name: "Australian Dollar",
    abbreviation: "AUD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/au.gif"
  },
  {
    name: "Canadian Dollar",
    abbreviation: "CAD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/ca.gif"
  },
  {
    name: "Swiss Franc",
    abbreviation: "CHF",
    symbol: "\u0043\u0048\u0046",
    flagURL: "http://www.geonames.org/flags/l/ch.gif"
  },
  {
    name: "Chinese Yuan Renminbi",
    abbreviation: "CNY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/cn.gif"
  },
  {
    name: "Swedish Krona",
    abbreviation: "SEK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/se.gif"
  },
  {
    name: "New Zealand Dollar",
    abbreviation: "NZD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/nz.gif"
  },
  {
    name: "Mexican Peso",
    abbreviation: "MXN",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/mx.gif"
  },
  {
    name: "Singapore Dollar",
    abbreviation: "SGD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/sg.gif"
  },
  {
    name: "Hong Kong Dollar",
    abbreviation: "HKD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/hk.gif"
  },
  {
    name: "Norwegian Krone",
    abbreviation: "NOK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/no.gif"
  },
  {
    name: "South Korean Won",
    abbreviation: "KRW",
    symbol: "\u20A9",
    flagURL: "http://www.geonames.org/flags/l/kr.gif"
  },
  {
    name: "Turkish Lira",
    abbreviation: "TRY",
    symbol: "\u20BA",
    flagURL: "http://www.geonames.org/flags/l/tr.gif"
  },
  {
    name: "Russian Ruble",
    abbreviation: "RUB",
    symbol: "\u20BD",
    flagURL: "http://www.geonames.org/flags/l/ru.gif"
  },
  {
    name: "Indian Rupee",
    abbreviation: "INR",
    symbol: "\u20B9",
    flagURL: "http://www.geonames.org/flags/l/in.gif"
  },
  {
    name: "Brazilian Real",
    abbreviation: "BRL",
    symbol: "\u0052\u0024",
    flagURL: "http://www.geonames.org/flags/l/br.gif"
  },
  {
    name: "South African Rand",
    abbreviation: "ZAR",
    symbol: "\u0052",
    flagURL: "http://www.geonames.org/flags/l/za.gif"
  },
  {
    name: "Philippine Peso",
    abbreviation: "PHP",
    symbol: "\u20B1",
    flagURL: "http://www.geonames.org/flags/l/ph.gif"
  },
  {
    name: "Czech Koruna",
    abbreviation: "CZK",
    symbol: "\u004B\u010D",
    flagURL: "http://www.geonames.org/flags/l/cz.gif"
  },
  {
    name: "Indonesian Rupiah",
    abbreviation: "IDR",
    symbol: "\u0052\u0070",
    flagURL: "http://www.geonames.org/flags/l/id.gif"
  },
  {
    name: "Malaysian Ringgit",
    abbreviation: "MYR",
    symbol: "\u0052\u004D",
    flagURL: "http://www.geonames.org/flags/l/my.gif"
  },
  {
    name: "Hungarian Forint",
    abbreviation: "HUF",
    symbol: "\u0046\u0074",
    flagURL: "http://www.geonames.org/flags/l/hu.gif"
  },
  {
    name: "Icelandic Krona",
    abbreviation: "ISK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/is.gif"
  },
  {
    name: "Croatian Kuna",
    abbreviation: "HRK",
    symbol: "\u006B\u006E",
    flagURL: "http://www.geonames.org/flags/l/hr.gif"
  },
  {
    name: "Bulgarian Lev",
    abbreviation: "BGN",
    symbol: "\u043B\u0432",
    flagURL: "http://www.geonames.org/flags/l/bg.gif"
  },
  {
    name: "Romanian Leu",
    abbreviation: "RON",
    symbol: "\u006C\u0065\u0069",
    flagURL: "http://www.geonames.org/flags/l/ro.gif"
  },
  {
    name: "Danish Krone",
    abbreviation: "DKK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/dk.gif"
  },
  {
    name: "Thai Baht",
    abbreviation: "THB",
    symbol: "\u0E3F",
    flagURL: "http://www.geonames.org/flags/l/th.gif"
  },
  {
    name: "Polish Zloty",
    abbreviation: "PLN",
    symbol: "\u007A\u0142",
    flagURL: "http://www.geonames.org/flags/l/pl.gif"
  },
  {
    name: "Israeli Shekel",
    abbreviation: "ILS",
    symbol: "\u20AA",
    flagURL: "http://www.geonames.org/flags/l/il.gif"
  }
];

// Global variables so they can be referenced later on
var storeyear = '';
var storemonth = '';
var storeday = '';
var storecate = '';
var exchangerate = '';
var displaytext = '';
var calculate = '';

// Changes the converted currency so that it can be displayed (Exchange rate)
$(function() {
  $("#selectc").change(function() {
    var display=$("#selectc option:selected").text();
    var lastFiveChars = display.substr(-3);
    fetch("https://api.exchangeratesapi.io/latest")
          .then(response => response.json())
          .then(function(data)
          {   
            exchangerate = data.rates.SGD/data.rates[lastFiveChars];
            calculate = exchangerate*displaytext;       
  })
  })
})

// Changes the converted currency so that it can be displayed (Amount)
$(function() {
  // When user selects an option, a change happens, the function starts
  $("#amt").change(function() {
    // Finding selected currency name
    var display=$("#selectc option:selected").text();
    // Getting abbreviations of currency
    var lastFiveChars = display.substr(-3);
    // Getting amount input from user
    displaytext = document.getElementById("amt").value;
  })
})

// Generate converted currency with 2 decimal places
function doFunction() {
  calculate = displaytext*exchangerate;
  convertedamt = (Math.round(calculate * 100) / 100).toFixed(2);
  var storeamt = convertedamt + " SGD";
  document.getElementById("displayhere").textContent = storeamt;
}

// Getting value of category selected
$(function() {
  $("#selectcat").change(function() {
    var cate=$("#selectcat option:selected").text();
    storecate = cate;
  })
})

// Getting value of date selected
$("#date-input").change(function(){ 
    var dt = new Date( $(this).val());
    var year = dt.getFullYear();
    var month = dt.getMonth()+1;
    var day = dt.getDate();
    storeyear = year;
    storemonth = month;
    storeday = day;
})

// Add data to localstorage 
function addLocal() {
  var calculator = displaytext*exchangerate;
  var convertedamts = (Math.round(calculator * 100) / 100).toFixed(2);
  var dateadd = storeday+"/"+storemonth+"/"+storeyear;

  // Check if localstorage is already saving date
  if (localStorage.getItem(dateadd) == null)
  {
    var add = [storecate, convertedamts];
    localStorage.setItem(dateadd,JSON.stringify(add));
  }
  else {
    // Check if localstorage is already saving category
    var list = JSON.parse(localStorage.getItem(dateadd));
    if(list.includes(storecate))
    {
      // Localstorage has category
      // Get spendings from category(find index) + Spendings
      c = Number(list[list.indexOf(storecate)+1]) + Number(convertedamts) // (New spending)
      c = (Math.round(c* 100) / 100).toFixed(2);
    
      // Edit array
      list[list.indexOf(storecate)+1] = ""+c+"";
      localStorage.removeItem(dateadd);
      localStorage.setItem(dateadd,JSON.stringify(list));
      console.log(localStorage);
    }
    else{
      // Localstorage has no category yet
      list.push(storecate);
      list.push(convertedamts);
      localStorage.setItem(dateadd,JSON.stringify(list));
      console.log(localStorage);
    }
  }
}

// Make sure can add transaction only after all forms have been filled up
window.setInterval(function(){
  if(storeyear == "" || storemonth == "" || storeday == "" || displaytext == "" || storecate == "" || exchangerate == "")
  {
    $('#send').attr('disabled', 'disabled');
  }
  else
  {
    $('#send').removeAttr('disabled');
  }
}, 300);
