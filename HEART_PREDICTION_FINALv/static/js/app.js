
function buildageChart() {
    const url = "/api/ageData"
    d3.json(url, function(heartData) {
    heartData = heartData['data'];
    console.log(heartData);
    var ctx = document.getElementById("ageChart").getContext("2d");

    var age = heartData.map((heartData) => {
        return +heartData.counts;
        });
    var axis = heartData.map((heartData) => {
        return heartData.age;
    });

    var ageBins = d3.layout.histogram()  // create layout object
        .bins(9)       // to use 20 bins
        .range([1,10])  
        (age);
    
    xaxisAge = ['20-29', '30-39', '40-49','50-59','60-69','70-79','80+']

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
        data: {labels: axis, datasets: [{
          data: age,
          backgroundColor: 'rgba(255, 255, 255,0.4)',
          borderColor: 'rgba(255, 255, 255,0.8)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255, 255, 255,1)',
          hoverBorderColor: 'rgba(255, 255, 255,1)',
          hoverBorderWidth: 1}]}
});
});
}

function buildsexChart() {
    const url = "/api/genderData"
    d3.json(url, function(heartData) {
    heartData = heartData['data'];
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
            data: {labels: ["Male", "Female"], datasets: [{
            data: sex,
            backgroundColor: 'rgba(255, 255, 255,0.4)',
            borderColor: 'rgba(255, 255, 255,0.8)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255, 255, 255,1)',
            hoverBorderColor: 'rgba(255, 255, 255,1)',
            hoverBorderWidth: 1}]}
    });
    });
}

function buildfluoroChart() {
    const url = "/api/fluoroData"
    d3.json(url, function(heartData) {
    heartData = heartData['data'];
    var ctx = document.getElementById("flouroChart").getContext("2d");
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
            data: ca,
            backgroundColor: 'rgba(255, 255, 255,0.4)',
            borderColor: 'rgba(255, 255, 255,0.8)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255, 255, 255,1)',
            hoverBorderColor: 'rgba(255, 255, 255,1)',
            hoverBorderWidth: 1}]}
    });
    });
}

function buildchestChart() {
    const url = "/api/chestData"
    d3.json(url, function(heartData) {
    heartData = heartData['data'];
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
                labelString: 'Severity of Chest Pain',
                    fontColor: "White"
                }}]}},
            data: {labels: ["None", "Mild", "Moderate", "Severe"], datasets: [{
            data: cp,
            backgroundColor: 'rgba(255, 255, 255,0.4)',
            borderColor: 'rgba(255, 255, 255,0.8)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255, 255, 255,1)',
            hoverBorderColor: 'rgba(255, 255, 255,1)',
            hoverBorderWidth: 1}]}
    });
    });
}

function buildhbChart() {
    const url = "/api/hbData"
    d3.json(url, function(heartData) {
        heartData = heartData['data'];
        var ctx = document.getElementById("hrChart").getContext("2d");
        var thalach_count = heartData.map((heartData) => {
            return +heartData.counts;
            });
        var thalach = heartData.map((heartData) => {
            return heartData.hb;
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
                    labelString: 'Heartbeat Rate',
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
                data: {labels: thalach, datasets: [{
                data: thalach_count,
                backgroundColor: 'rgba(255, 255, 255,0.4)',
                borderColor: 'rgba(255, 255, 255,0.8)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 255, 255,1)',
                hoverBorderColor: 'rgba(255, 255, 255,1)',
                hoverBorderWidth: 1}]}
    });
});
};

buildageChart();
buildsexChart();
buildfluoroChart();
buildchestChart();
buildhbChart();