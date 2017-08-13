angular.module('floatCharts.common').config($locationProvider => {
    $locationProvider.html5Mode(true);
});

angular.module('floatCharts.common').config(ChartJsProvider => {
    // Configure all charts
    ChartJsProvider.setOptions({
      chartColors: ['#FF5252', '#FF8A80'],
      responsive: false
    });
    // Configure all line charts
    ChartJsProvider.setOptions('line', {
      showLines: false
    });
});