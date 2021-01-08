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
var budday = '';
var budmonth = '';
var budyear = '';
var budamt = '';
var dday = '';
var dmonth = '';
var dyear = '';

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
  
  // Add to "Recent Transactions"
  if (localStorage.getItem("Recent") == null)
  {
    recentTrans = [dateadd,convertedamts,storecate];
    localStorage.setItem("Recent",JSON.stringify(recentTrans));
  }
  else{
    var recentList = JSON.parse(localStorage.getItem("Recent"));
    recentList.push(dateadd,convertedamts,storecate);
    localStorage.removeItem("Recent");
    localStorage.setItem("Recent",JSON.stringify(recentList));
  }

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

  // Update daily chart, if transaction is on daily chart date
  if(dateadd == dday+"/"+dmonth+"/"+dyear)
  {
    console.log("it should change");
    dailyChart();
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

// Button function for clear expenditure
function clearFunction(){
  localStorage.clear();
  document.location.reload();
}

// Alert functions
function alertClear(){
  alert("All expenditures has been cleared.");
}

function alertTrans(){
  alert("Transaction has been added.");
}

function alertTran(){
  alert("Budget has been set.");
}

// Set daily budget form
window.setInterval(function(){
  if(budamt == "" || budday == "" || budmonth == "" || budyear == "")
  {
    $('#send1').attr('disabled', 'disabled');
  }
  else
  {
    $('#send1').removeAttr('disabled');
  }
}, 300);

// Get variables for budget date
$("#date-inputs").change(function(){ 
  var dat = new Date( $(this).val());
  var years = dat.getFullYear();
  var months = dat.getMonth()+1;
  var days = dat.getDate();
  budyear = years;
  budmonth = months;
  budday = days;
})

// Get amount to set budget
$(function() {
  // When user selects an option, a change happens, the function starts
  $("#amts").change(function() {
    // Getting amount input from user
    budamt = document.getElementById("amts").value;
    console.log(budamt);
  })
})

// Add budget to localstorage
function addLocals() {
  var budgetdate = budyear+"/"+budmonth+"/"+budday;
  console.log(budgetdate);
  // Check if localstorage already have budget
  if (localStorage.getItem(budgetdate) == null)
  {
    localStorage.setItem(budgetdate,budamt);
  }
  else {
    localStorage.removeItem(budgetdate);
    localStorage.setItem(budgetdate,budamt);
  }
}

// Making Recent Transactions List
function showRecent() {
  var showList = JSON.parse(localStorage.getItem("Recent"));
  if (showList != null)
  {
    var j = showList.length/3;
    var inputstring = '';
    for(var i = 1; i<=showList.length; i+=3)
    {
      inputstring += j+") $"+showList[showList.length-(i+1)]+" SGD spent on "+showList[showList.length-i]+" on "+showList[showList.length-(i+2)]+"<br>";
      j--;
    }
    document.getElementById("recent").innerHTML = inputstring;
  }
}

// Daily Expenditure
// Getting date inputs to retrieve date from localstorage for daily expenditure chart
$("#date-input1").change(function(){ 
  var dailydate = new Date( $(this).val());
  var dailyyear = dailydate.getFullYear();
  var dailymonths = dailydate.getMonth()+1;
  var dailydays = dailydate.getDate();
  dyear = dailyyear;
  dmonth = dailymonths;
  dday = dailydays;
  dailyChart();
})

function dailyChart() {
  var data1 = 0;
  var data2 = 0;
  var data3 = 0;
  var data4 = 0;
  var data5 = 0;
  var daily = dday+"/"+dmonth+"/"+dyear;
  var dailyList = JSON.parse(localStorage.getItem(daily));
  if (dailyList == null)
  {
    alert("There is no transaction on "+daily+".");
    $('#myChart').remove();
    $('#canvass').append('<canvas id="myChart"></canvas>');
    document.getElementById("dtotal").innerHTML = '';
    document.getElementById("dentertainment").innerHTML = '';
    document.getElementById("dfood").innerHTML = '';
    document.getElementById("dbills").innerHTML = '';
    document.getElementById("dtransport").innerHTML = '';
    document.getElementById("dothers").innerHTML = '';
  }
  else
  {
    $('#myChart').remove();
    $('#canvass').append('<canvas id="myChart"></canvas>');
    for(var i = 0; i<dailyList.length; i+=2)
    {
      if(dailyList[i] == "Entertainment")
      {
        data1 = dailyList[i+1];
      }
      else if(dailyList[i] == "Food & Beverage")
      {
        data2 = dailyList[i+1];
      }
      else if(dailyList[i] == "Bills & Utilities")
      {
        data3 = dailyList[i+1];
      }
      else if(dailyList[i] == "Transportation")
      {
        data4 = dailyList[i+1];
      }
      else if(dailyList[i] == "Others")
      {
        data5 = dailyList[i+1];
      }
    }
    var ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Entertainment','Food & Beverage','Bills & Utilities','Transportation','Others'],
        datasets: [
          {
            label: '# of Votes',
            data: [data1, data2, data3, data4, data5],
            backgroundColor: ['#DAF7A6','#FFC300','#FF5733','#C70039','#581845'],
            borderWidth: 0
          }
        ]
      }
    });
    document.getElementById("dtotal").innerHTML = Number(data1)+Number(data2)+Number(data3)+Number(data4)+Number(data5);
    document.getElementById("dentertainment").innerHTML = data1;
    document.getElementById("dfood").innerHTML = data2;
    document.getElementById("dbills").innerHTML = data3;
    document.getElementById("dtransport").innerHTML = data4;
    document.getElementById("dothers").innerHTML = data5;
  }
}
