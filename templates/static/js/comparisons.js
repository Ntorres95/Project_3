d3.json('http://127.0.0.1:5000/listing').then(function(data) {
            
  //sanity check
  //console.log(data);

  //arrays to save the zipcodes
  var zipcodes = [];

  // Grab values from the data json object to build the plots
  for (var i = 0; i < data.length; i++) {
      zipcodes.push(data[i].zipcode);
  }

  //sanity check
  //console.log(zipcodes);

  var uniqueZips = zipcodes.filter((z, index) => {
      return zipcodes.indexOf(z) === index;
  });

  //sort the zipcodes
  uniqueZips.sort((a,b)=>a-b);

  //sanity check
  //console.log(uniqueZips);


  //call on the function to populate the dropdown
  populateMenu(uniqueZips);

});

//function to poluate the dropdown
function populateMenu(uniqueZips) {

  var sel = document.getElementById('selDataset');
  var fragment = document.createDocumentFragment();

  uniqueZips.forEach(function(Zip, index) {
      var opt = document.createElement('option');
      opt.innerHTML = Zip;
      opt.value = Zip;
      fragment.appendChild(opt);
  });

  sel.appendChild(fragment);
}