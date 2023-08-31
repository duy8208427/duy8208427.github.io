// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
var languageCurrent = $('body').attr('data-language');
if (languageCurrent == "vi") {
    var chartTitle = 'Biểu đồ tăng trưởng doanh thu';
    var categoriesData = ['Th1', 'Th2', 'Th3', 'Th4', 'Th5', 'Th6', 'Th7', 'Th8', 'Th9', 'Th10', 'Th11', 'Th12'];
    var descriptionChart = 'Tháng trong năm';
    var formatY = '<span style="text-align:center">{value}</br>tr<span>';
} else {
    var chartTitle = 'Revenue growth chart';
    var categoriesData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var descriptionChart = 'Months of the year';
    var formatY = '<span style="text-align:center">{value}</br>m<span>';
}
Highcharts.chart('spline-chart-container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: chartTitle
    },
    subtitle: {
        text: ''
    },
    legend: {
        align: 'center', // Center align the legend horizontally
        verticalAlign: 'top', // Position the legend at the top
        layout: 'horizontal' // Display the legend items horizontally
    },
    xAxis: {
        categories: categoriesData,
        accessibility: {
            description: descriptionChart
        }
    },
    yAxis: {
         title: {
            text: ''
        },
        labels: {
            format: formatY
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
               enabled: false
            }
        }
    },
    series: [{
        name: 'Online',
        color: '#A61C20',
        with: 2,
        data: [450, 460, 390, 350, 400, 490, 540, 457, 400, 360, 480, 580]

    }, {
        name: 'Offline',
        color: '#FF8678',
        with: 2,
        data: [550, 660, 590, 450, 420, 390, 340, 457, 480, 500, 580, 520]
    }]
});