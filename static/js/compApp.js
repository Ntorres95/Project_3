function init() {
    var dropdown = d3.select("#selDataset");

    d3.csv("/Resources/listings.csv").then((data) => {
        console.log(data)

        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });

        getSamples(data.names[0]);
        demographicInformation(data.names[0]);
    });
}

init();