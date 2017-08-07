angular.module('floatCharts.budget').config($routeProvider => {
    $routeProvider.when('/budget', {
        template: '<budget-chart></budget-chart>'
    });
});
