d3.json('http://127.0.0.1:5500/listing').then(function(data) {
    // send the data.features object to our createFeatures function
    createFeatures(data.features);
    console.log(data.features)
  });
 
 // Grab values from the data json object to build the plots
  function generateTableHead(table, datas) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of datas) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

  
function generateTable(table, datas) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
let data = Object.keys(data[0]);
generateTableHead(table, datas);
generateTable(table, data);