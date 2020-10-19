populateMenu();

    //event handler to track when a new id is selected
    d3.selectAll("#selDataset").on("click", optionChanged);

    //function to populate the dropdown
    function populateMenu() {

        d3.json("/listing").then(function(data) {

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
            var sel = document.getElementById('selDataset');
            var fragment = document.createDocumentFragment();
            
            uniqueZips.forEach(function(Zip, index) {
                var opt = document.createElement('option');
                opt.innerHTML = Zip;
                opt.value = Zip;
                fragment.appendChild(opt);
            });
            
            sel.appendChild(fragment);
        });
    }
    //function to collect the selected id 
    function optionChanged () {
        var selected = d3.select("#selDataset");
        var zip = selected.property("value");
        
        //sanity check
        //console.log(id);
        
        //call on the function to create the plots
        barPlot(zip);
        scatterPlot(zip);
    }
    
    //function to create the plot
    function barPlot(zip) {
        
        //grab  the info needed
        d3.json("/listing").then(function(data) {
            
            //array to save the selected id's data
            var names = [];
            var ratings = [];
            var type = [];
            var neighbourhood = [];
            var bedrooms = [];
            var beds = [];
            var prices = [];
            
            //loop to search for the info on the selected id
            for (i = 0; i < data.length; i++) {
                
                //conditional to pull the info it matches the selected id
                if (zip == data[i].zipcode) {
                    
                    //save listings info
                    names.push(data[i].name);
                    ratings.push(data[i].review_scores_rating);
                    type.push(data[i].property_type);
                    neighbourhood.push(data[i].neighbourhood);
                    bedrooms.push(data[i].bedrooms);
                    beds.push(data[i].beds);
                    prices.push(data[i].price_y)
                }
            }

            //sanity check
            //console.log(names);
            //console.log(ratings);
            
            //create the data array for the plot
            var trace1 = {
                x: ratings,
                type: "bar",
                orientation: 'h',
            };
            
            var tickvals = names.map(function(e, i) {
                return i;
            });
            
            //create the array for the data
            var data = [trace1];
            
            //create the layout array for the plot
            var layout = {
                yaxis:{
                    ticktext: names,
                    tickvals: tickvals
                },
                height: 800,
                width: 800,
            };
            
            Plotly.newPlot("bar", data, layout, [{
                transforms: [{
                    type: 'sort',
                    target: 'y',
                    order: 'descending'
                }]
            }])
        });
    }
//function for creating the bubble chart
function bubbleChart (id) {

    //grab  the info needed
    d3.json("samples.json").then(function(data) {

        //var for the id's
        var ids = data.names;

        //var for the samples
        var samples = data.samples;

        //array to save the selected id's data
        var sampleValues = [];
        var otuIds = [];
        var otuLabels = [];

        //loop to search for the info on the selected id
        for (i = 0; i < ids.length; i++) {

            //conditional to pull the info it matches the selected id
            if (id == ids[i]) {
            
                //save the samples, otu_ids and otu_labels
                sampleValues = samples[i].sample_values;

                otuIds = samples[i].otu_ids;

                otuLabels = samples[i].otu_labels;

                //sanity check
                //console.log(sampleValues);
                //console.log(otuIds);
                //console.log(otuLabels);

                break;
            }
        }

        //var to hold thedata info to be plotted
        var trace1 = {
            x: otuIds,
            y: sampleValues,
            mode: 'markers',
            text: otuLabels,
            marker: {
            size: sampleValues,
            color: otuIds
            }
        };
        
        var data = [trace1];
        
        //var to hold the layout info of the graph
        var layout = {
            xaxis: {
                title: {
                text: "OTU ID's"
                }
            },
            showlegend: false,
            height: 600,
            width: 1000
        };
        
        //create the new plot
        Plotly.newPlot('scatter', data, layout);
    });
}