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
  },
  {
    name: "Euro",
    abbreviation: "EUR",
  },
  {
    name: "Japanese Yen",
    abbreviation: "JPY",
  },
  {
    name: "British Pound",
    abbreviation: "GBP",
  },
  {
    name: "Australian Dollar",
    abbreviation: "AUD",
  },
  {
    name: "Canadian Dollar",
    abbreviation: "CAD",
  },
  {
    name: "Swiss Franc",
    abbreviation: "CHF",
  },
  {
    name: "Chinese Yuan Renminbi",
    abbreviation: "CNY",
  },
  {
    name: "Swedish Krona",
    abbreviation: "SEK",
  },
  {
    name: "New Zealand Dollar",
    abbreviation: "NZD",
  },
  {
    name: "Mexican Peso",
    abbreviation: "MXN",
  },
  {
    name: "Singapore Dollar",
    abbreviation: "SGD",
  },
  {
    name: "Hong Kong Dollar",
    abbreviation: "HKD",
  },
  {
    name: "Norwegian Krone",
    abbreviation: "NOK",
  },
  {
    name: "South Korean Won",
    abbreviation: "KRW",
  },
  {
    name: "Turkish Lira",
    abbreviation: "TRY",
  },
  {
    name: "Russian Ruble",
    abbreviation: "RUB",
  },
  {
    name: "Indian Rupee",
    abbreviation: "INR",
  },
  {
    name: "Brazilian Real",
    abbreviation: "BRL",
  },
  {
    name: "South African Rand",
    abbreviation: "ZAR",
  },
  {
    name: "Philippine Peso",
    abbreviation: "PHP",
  },
  {
    name: "Czech Koruna",
    abbreviation: "CZK",
  },
  {
    name: "Indonesian Rupiah",
    abbreviation: "IDR",
  },
  {
    name: "Malaysian Ringgit",
    abbreviation: "MYR",
  },
  {
    name: "Hungarian Forint",
    abbreviation: "HUF",
  },
  {
    name: "Icelandic Krona",
    abbreviation: "ISK",
  },
  {
    name: "Croatian Kuna",
    abbreviation: "HRK",
  },
  {
    name: "Bulgarian Lev",
    abbreviation: "BGN",
  },
  {
    name: "Romanian Leu",
    abbreviation: "RON",
  },
  {
    name: "Danish Krone",
    abbreviation: "DKK",
  },
  {
    name: "Thai Baht",
    abbreviation: "THB",
  },
  {
    name: "Polish Zloty",
    abbreviation: "PLN",
  },
  {
    name: "Israeli Shekel",
    abbreviation: "ILS",
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
var mmonth = '';
var monthlymonth = '';
var monthlyyear = '';
var myear = '';
var mmonths = 

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
  var mmonth = storemonth+"/"+storeyear;
  
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

  // Add to "Months"  to calculate monthly expenditure
  if (localStorage.getItem(mmonth) == null)
  {
    var add = [storecate, convertedamts];
    localStorage.setItem(mmonth,JSON.stringify(add));
  }
  else{
    var list = JSON.parse(localStorage.getItem(mmonth));
    if(list.includes(storecate))
    {
      c = Number(list[list.indexOf(storecate)+1]) + Number(convertedamts) // (New spending)
      c = (Math.round(c* 100) / 100).toFixed(2);
      list[list.indexOf(storecate)+1] = ""+c+"";
      localStorage.removeItem(mmonth);
      localStorage.setItem(mmonth,JSON.stringify(list));
      console.log(localStorage);
    }
    else {
      list.push(storecate);
      list.push(convertedamts);
      localStorage.setItem(mmonth,JSON.stringify(list));
      console.log(localStorage);
    }
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
    dailyChart();
  }

  // Update monthly chart, if transaction is on monthly chart month
  if (mmonth == mmonths+"/"+myear)
  {
    monthlyChart();
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

// Changing daily charts
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
    // Removing canvas so the charts don't overlap
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
    // Making charts
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

// Monthly Expenditure
// Getting date inputs to retrieve date from localstorage for monthly expenditure chart
$("#date-input2").change(function(){ 
  var monthlydate = new Date( $(this).val());
  var monthlyyear = monthlydate.getFullYear();
  var monthlymonths = monthlydate.getMonth()+1;
  myear = monthlyyear;
  mmonths = monthlymonths;
  monthlyChart();
})

// Changing monthly charts
function monthlyChart() {
  var data1 = 0;
  var data2 = 0;
  var data3 = 0;
  var data4 = 0;
  var data5 = 0;
  var monthly = mmonths+"/"+myear;
  var monthlyList = JSON.parse(localStorage.getItem(monthly));
  if (monthlyList == null)
  {
    alert("There is no transaction on "+monthly+".");
    $('#myCharts').remove();
    $('#canvasss').append('<canvas id="myCharts"></canvas>');
    document.getElementById("mtotal").innerHTML = '';
    document.getElementById("mentertainment").innerHTML = '';
    document.getElementById("mfood").innerHTML = '';
    document.getElementById("mbills").innerHTML = '';
    document.getElementById("mtransport").innerHTML = '';
    document.getElementById("mothers").innerHTML = '';
  }
  else
  {
    // Removing canvas so the charts don't overlap
    $('#myCharts').remove();
    $('#canvasss').append('<canvas id="myCharts"></canvas>');
    for(var i = 0; i<monthlyList.length; i+=2)
    {
      if(monthlyList[i] == "Entertainment")
      {
        data1 = monthlyList[i+1];
      }
      else if(monthlyList[i] == "Food & Beverage")
      {
        data2 = monthlyList[i+1];
      }
      else if(monthlyList[i] == "Bills & Utilities")
      {
        data3 = monthlyList[i+1];
      }
      else if(monthlyList[i] == "Transportation")
      {
        data4 = monthlyList[i+1];
      }
      else if(monthlyList[i] == "Others")
      {
        data5 = monthlyList[i+1];
      }
    }
    // Making charts
    var ctx = document.getElementById('myCharts').getContext('2d');
    let myCharts = new Chart(ctx, {
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
    document.getElementById("mtotal").innerHTML = Number(data1)+Number(data2)+Number(data3)+Number(data4)+Number(data5);
    document.getElementById("mentertainment").innerHTML = data1;
    document.getElementById("mfood").innerHTML = data2;
    document.getElementById("mbills").innerHTML = data3;
    document.getElementById("mtransport").innerHTML = data4;
    document.getElementById("mothers").innerHTML = data5;
  }
}