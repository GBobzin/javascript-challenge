// from data.js
var tableData = data;
//Select table body - fill later with data
var tbody = d3.select("tbody");

//field selections
var form = d3.select("#form");
var button = d3.select("#filter-btn");

//events
button.on("click", myFilter);
form.on("submit", myFilter);

//funciton to apply the filter
    function myFilter(){
        tbody.html("");

        //kept refreshing, this avoids it
        d3.event.preventDefault();

        // date input by user
        var userInput = d3.select("#datetime");

//select content
        var userValue = userInput.property("value");

         // finding data using the input from user
        var filteredData = tableData.filter(sighting => sighting.datetime === userValue);

           // this works to log it
        console.log(filteredData);

    
// YOUR CODE HERE! internet code DC below

// sending data into html table
       // var tbody = d3.select("tbody");

        filteredData.forEach((x) => {
            var row = tbody.append("tr");
            // adding div with table body
            Object.entries(x).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });
        });
    }


     
