function buildageChart() {
        // var heartData = {
        //     age: '20-25', counts:1,
        //     age: '26-30', counts:3,
        //     age: '31-35', counts:5
        // };

        // var heartData = [
        //     { age: '20-25', counts:1 },
        //     { age: '26-30', counts:3 },
        //     { age: '31-35', counts:5 },
        //     { age: '36-40', counts:13},
        //     { age: '41-45', counts:40 },
        //     { age: '46-50', counts:32 },
        //     { age: '51-55', counts:56 },
        //     { age: '56-60', counts:69 },
        //     { age: '61-65', counts:49 },
        //     { age: '66-70', counts:31 },
        //     { age: '71-75', counts:8 },
        //     { age: '76-80', counts:3 },
        // ];
        console.log(heartData);
        
        heartData.forEach(function(data) {
            data.age = heartData.age;
            data.counts = +heartData.counts
            console.log(data.age);
            console.log(data.counts);
     



        var ctx = document.getElementById("ageChart").getContext("2d");
    
        var age = heartData.map((heartData) => {
            return +heartData.counts;
            });
            
        var ageBins = d3.layout.histogram()  // create layout object
            .bins(9)       // to use 20 bins
            .range([1,10])  
            (age);
    
        var ageChart = new Chart(ctx, {
        type: "bar",
        options: {
          maintainAspectRatio: false,
          legend: {display: false}, tooltips: {
            // enabled: true,
            // mode: 'single',
            callbacks: { label: function(tooltipItems) {
                    return Number(tooltipItems.yLabel);}}},
            scales: {
            xAxes: [{
                ticks:{
                    fontColor: "White"
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Age',
                  fontSize: 12,
                  fontColor: "White"
                }}],
            yAxes: [{
                ticks:{
                    fontColor: "White"
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Numbers',
                    fontSize: 12,
                    fontColor: "White"
                }}]}},
            data: {labels: heartData.age, datasets: [{
              data: heartData.counts,
              backgroundColor: 'rgba(255, 255, 255,0.4)',
              borderColor: 'rgba(255, 255, 255,0.8)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255, 255, 255,1)',
              hoverBorderColor: 'rgba(255, 255, 255,1)',
              hoverBorderWidth: 1}]}
    });
});
};
    function buildsexChart() {
        var heartData = [
            { sex: "Male", counts: 207 },
            { sex: "Female", counts: 96}
        ];

        heartData.forEach(function(heartData) {
            heartData.sex = heartData.age;
            heartData.counts = +heartData.counts
        });

        console.log(heartData.sex);
        console.log(heartData.counts);

        var ctx = document.getElementById("sexChart").getContext("2d");
        var sex = heartData.map((heartData) => {
            return +heartData.counts;
            });
        var sexChart = new Chart(ctx, {
            type: "bar",
            options: {
            maintainAspectRatio: false,
            legend: {display: false}, tooltips: {
                // enabled: true,
                // mode: 'single',
                callbacks: { label: function(tooltipItems) {
                        return Number(tooltipItems.yLabel);}}},
                scales: {
                xAxes: [{
                    ticks:{
                        fontColor: "White"
                    },
                    scaleLabel: {
                    display: true,
                    labelString: 'Gender',
                    fontSize: 12,
                    fontColor: "White"
                    }}],
                yAxes: [{
                    ticks:{
                        fontColor: "White"
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Count',
                        fontSize: 12,
                        fontColor: "White"
                    }}]}},
                data: {labels: heartData.sex, datasets: [{
                data: heartData.counts,
                backgroundColor: 'rgba(255, 255, 255,0.4)',
                borderColor: 'rgba(255, 255, 255,0.8)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 255, 255,1)',
                hoverBorderColor: 'rgba(255, 255, 255,1)',
                hoverBorderWidth: 1}]}
        });
        };
    
    function buildfluorChart() {

        var heartData = [

            { ca: 0, counts: 175 },
            { ca: 1, counts: 65 },
            { ca: 2, counts: 38},
            { ca: 3, counts: 20 },
            { ca: 3, counts: 5 },
        ];

        heartData.forEach(function(heartData) {
            heartData.ca = heartData.ca;
            heartData.counts = +heartData.counts
        });

        console.log(heartData.ca);
        console.log(heartData.counts);


        var ctx = document.getElementById("flourChart").getContext("2d");

        var ca = heartData.map((heartData) => {
            return +heartData.counts;
            });

        var cpChart = new Chart(ctx, {
            type: "bar",
            options: {
            maintainAspectRatio: false,
            legend: {display: false}, tooltips: {
                // enabled: true,
                // mode: 'single',
                callbacks: { label: function(tooltipItems) {
                        return Number(tooltipItems.yLabel);}}},
                scales: {
                xAxes: [{
                    ticks:{
                        fontColor: "White"
                    },
                    scaleLabel: {
                    display: true,
                    labelString: 'Flouroscopy Results',
                    fontSize: 12,
                    fontColor: "White"
                    }}],
                yAxes: [{
                    ticks:{
                        fontColor: "White"
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Count',
                        fontSize: 12,
                        fontColor: "White"
                    }}]}},
                data: {labels: ["None", "Mild", "Moderate", "Moderate/Severe", "Severe"], datasets: [{
                data: heartData.counts,
                backgroundColor: 'rgba(255, 255, 255,0.4)',
                borderColor: 'rgba(255, 255, 255,0.8)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 255, 255,1)',
                hoverBorderColor: 'rgba(255, 255, 255,1)',
                hoverBorderWidth: 1}]}
        });
        };

    function buildcpChart() {

        var heartData = [
            { cp: 0, counts: 143 },
            { cp: 1, counts: 50 },
            { cp: 2, counts: 87},
            { cp: 3, counts: 23 },
        ];

        heartData.forEach(function(heartData) {
            heartData.cp = heartData.cp;
            heartData.counts = +heartData.counts
        });
        console.log(heartData.cp);
        console.log(heartData.counts);

        var ctx = document.getElementById("cpChart").getContext("2d");
        var cp = heartData.map((heartData) => {
            return +heartData.counts;
            });
    
     
    
        var cpChart = new Chart(ctx, {
            type: "bar",
            options: {
            maintainAspectRatio: false,
            legend: {display: false}, tooltips: {
                // enabled: true,
                // mode: 'single',
                callbacks: { label: function(tooltipItems) {
                        return Number(tooltipItems.yLabel);}}},
                scales: {
                xAxes: [{
                    ticks:{
                        fontColor: "White"
                    },
                    scaleLabel: {
                    display: true,
                    labelString: 'Age',
                    fontSize: 12,
                    fontColor: "White"
                    }}],
                yAxes: [{
                    ticks:{
                        fontColor: "White"
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Numbers',
                        fontSize: 12,
                        fontColor: "White"
                    }}]}},
                data: {labels: ["None", "Mild", "Moderate", "Severe"], datasets: [{
                data: heartData.counts,
                backgroundColor: 'rgba(255, 255, 255,0.4)',
                borderColor: 'rgba(255, 255, 255,0.8)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 255, 255,1)',
                hoverBorderColor: 'rgba(255, 255, 255,1)',
                hoverBorderWidth: 1}]}
        });
        };

    function buildhrChart() {
            var ctx = document.getElementById("hrChart").getContext("2d");
            
            var heartData = [
            { hb: '80-90', counts:1 },
            { hb: '91-100', counts:6 },
            { hb: '101-110', counts:10 },
            { hb: '111-119', counts:16},
            { hb: '120-129', counts:25 },
            { hb: '130-139', counts:26 },
            { hb: '140-149', counts:47 },
            { hb: '150-159', counts:52 },
            { hb: '160-169', counts:56 },
            { hb: '170-179', counts:53 },
            { hb: '180-189', counts:15 },
            { hb: '190-199', counts:4 },
            { hb: '200-209', counts:1 },
     
        ];

        heartData.forEach(function(heartData) {
            heartData.hb = heartData.hb;
            heartData.counts = +heartData.counts
        });

        console.log(heartData.age);
        console.log(heartData.counts);

            var thalach = heartData.map((heartData) => {
                return +heartData.counts;
                });
            var thalach_count = thalach.reduce ( (tally, thalach) => {tally[thalach] = (tally[thalach] || 0) + 1 ; return tally;} , {});
            var cpChart = new Chart(ctx, {
                type: "bar",
                options: {
                maintainAspectRatio: false,
                legend: {display: false}, tooltips: {
                    // enabled: true,
                    // mode: 'single',
                    callbacks: { label: function(tooltipItems) {
                            return Number(tooltipItems.yLabel);}}},
                    scales: {
                    xAxes: [{
                        ticks:{
                            fontColor: "White"
                        },
                        scaleLabel: {
                        display: true,
                        labelString: 'Age',
                        fontSize: 12,
                        fontColor: "White"
                        }}],
                    yAxes: [{
                        ticks:{
                            fontColor: "White"
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Numbers',
                            fontSize: 12,
                            fontColor: "White"
                        }}]}},
                    data: {labels: heartData.hb, datasets: [{
                    data: heartData.counts,
                    backgroundColor: 'rgba(255, 255, 255,0.4)',
                    borderColor: 'rgba(255, 255, 255,0.8)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255, 255, 255,1)',
                    hoverBorderColor: 'rgba(255, 255, 255,1)',
                    hoverBorderWidth: 1}]}
            });
            };

//     function buildageChart2() {

//         var data = [
//             { age: '20-25', counts:1 },
//             { age: '26-30', counts:3 },
//             { age: '31-35', counts:5 },
//             { age: '36-40', counts:13},
//             { age: '41-45', counts:40 },
//             { age: '46-50', counts:32 },
//             { age: '51-55', counts:56 },
//             { age: '56-60', counts:69 },
//             { age: '61-65', counts:49 },
//             { age: '66-70', counts:31 },
//             { age: '71-75', counts:8 },
//             { age: '76-80', counts:3 },
     
//         ];
    
//         var map = data.map(function(d,i){ return parseFloat(d.counts); })
//         var formatCount = d3.format(",.0f");
    
 
//         var svg = d3.select("ageChart").append("svg")
//             margin = {top: 10, right: 30, bottom: 30, left: 30},
//             width = +svg.attr("width") - margin.left - margin.right,
//             height = +svg.attr("height") - margin.top - margin.bottom,
//             g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
//         var x = d3.scaleLinear()
//             .rangeRound([60, width])
//                     .domain([60, d3.max(map)]);
        
//         var bins = d3.histogram()
//             .domain(x.domain())
//             .thresholds(x.ticks(10))
//             (map);
            
    
//         var y = d3.scaleLinear()
//             .domain([0, d3.max(bins, function(d) { return d.length; })])
//             .range([height, 0]);
    
//         var bar = g.selectAll(".bar")
//           .data(bins)
//           .enter().append("g")
//             .attr("class", "bar")
//             .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; });
        
        
//         bar.append("rect")
//             .attr("x", 1)
//             .attr("width", x(bins[0].x1) - x(bins[0].x0) - 1)
//             .attr("height", function(d) { return height - y(d.length); });
    
//         bar.append("text")
//             .attr("dy", "1.25em")
//             .attr("y", 6)
//             .attr("x", (x(bins[0].x1) - x(bins[0].x0)) / 2)
//             .attr("text-anchor", "middle")
//             .text(function(d) { return formatCount(d.length); });
    
//         g.append("g")
//             .attr("class", "axis axis--x")
//             .attr("transform", "translate(0," + height + ")")
//             .call(d3.axisBottom(x));
        
// };
    
//     function buildhrChart2() {
    
//     var data = [
//             { hb: '80-90', counts:1 },
//             { hb: '91-100', counts:6 },
//             { hb: '101-110', counts:10 },
//             { hb: '111-119', counts:16},
//             { hb: '120-129', counts:25 },
//             { hb: '130-139', counts:26 },
//             { hb: '140-149', counts:47 },
//             { hb: '150-159', counts:52 },
//             { hb: '160-169', counts:56 },
//             { hb: '170-179', counts:53 },
//             { hb: '180-189', counts:15 },
//             { hb: '190-199', counts:4 },
//             { hb: '200-209', counts:1 },
//         ];

//     var map = data.map(function(d,i){ return parseFloat(d.counts); })
//     var formatCount = d3.format(",.0f");

//     var svg = d3.select("hrChart").append("svg")
//         margin = {top: 10, right: 30, bottom: 30, left: 30},
//         width = +svg.attr("width") - margin.left - margin.right,
//         height = +svg.attr("height") - margin.top - margin.bottom,
//         g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
//     var x = d3.scaleLinear()
//         .rangeRound([60, width])
//                 .domain([60, d3.max(map)]);
    
//     var bins = d3.histogram()
//         .domain(x.domain())
//         .thresholds(x.ticks(10))
//         (map);
        
    
//     var y = d3.scaleLinear()
//         .domain([0, d3.max(bins, function(d) { return d.length; })])
//         .range([height, 0]);
    
//     var bar = g.selectAll(".bar")
//       .data(bins)
//       .enter().append("g")
//         .attr("class", "bar")
//         .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; });
    
    
//     bar.append("rect")
//         .attr("x", 1)
//         .attr("width", x(bins[0].x1) - x(bins[0].x0) - 1)
//         .attr("height", function(d) { return height - y(d.length); });
    
//     bar.append("text")
//         .attr("dy", "1.25em")
//         .attr("y", 6)
//         .attr("x", (x(bins[0].x1) - x(bins[0].x0)) / 2)
//         .attr("text-anchor", "middle")
//         .text(function(d) { return formatCount(d.length); });
    
//     g.append("g")
//         .attr("class", "axis axis--x")
//         .attr("transform", "translate(0," + height + ")")
//         .call(d3.axisBottom(x));
    
// };
    
buildageChart();
buildsexChart();
buildfluorChart();
buildhrChart();
buildcpChart();
    // buildageChart2();
    // buildhrChart2();