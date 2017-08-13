angular.module('floatCharts.budget').component('budgetChart', {
    bindTo: {},
    templateUrl: 'public/budget/budgetChart.directive.html',
    controller: (budgetService, budgetChartService, $scope, $timeout) => {
        $scope.costTypes = {
            availableOptions: [
                {id: 'NETNET', name: 'NETNET'},
                {id: 'CLIENT', name: 'CLIENT'},
                {id: 'TECHNICAL', name: 'TECHNICAL'},
                {id: 'FEE', name: 'FEE'}
            ],
            selectedOption: {id: 'NETNET', name: 'NETNET'} //This sets the default value of the select in the ui
        };
        
        $scope.showCategoryBudgets='1,3'; //initial value for categories
        $scope.labelsMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        $scope.seriesAllCatChart = ['All categories'];
        $scope.seriesAllMonthsChart = ['All months'];
                
        let budget= {};
        $scope.singleCatChart= {};
        $scope.allCatChart={};
        $scope.allMonthsChart={};

        //--------------

        // var promises = [budgetService.getBudget(42,2016), budgetService.getBudget(42,2017)];

        // Promise.all(promises).then(function(value) {
        //     budget[2016] = value[0];
        //     drawAllCharts2016();
            
        // });

        budgetService.getBudget(42,2016).then(function(value) {
            budget[2016] = value;
            drawAllCharts2016();
            budgetService.getBudget(42,2017).then(function(value) {
                budget[2017] = value;
                drawAllCharts2017();
                drawYearsChart();
            });     
        });

       

        //---------------

        $scope.changedCostType = function() {
            drawAllCharts2016();
            drawAllCharts2017();
        };
        
        $scope.changedCategories = function() {
            $scope.singleCatChart.y2016 = budgetChartService.prepSingleCatChart(budget[2016].forecastCategoryBudgets, $scope.costTypes.selectedOption.id, $scope.showCategoryBudgets);
            $scope.singleCatChart.y2017 = budgetChartService.prepSingleCatChart(budget[2017].forecastCategoryBudgets, $scope.costTypes.selectedOption.id, $scope.showCategoryBudgets);
        };

        //-----------------

        drawAllCharts2016 = function() {
            $scope.singleCatChart.y2016 = budgetChartService.prepSingleCatChart(budget[2016].forecastCategoryBudgets, $scope.costTypes.selectedOption.id, $scope.showCategoryBudgets);
            $scope.allCatChart.y2016 = budgetChartService.prepAllCatChart(budget[2016].forecastCategoryBudgets, $scope.costTypes.selectedOption.id);
            $scope.allMonthsChart.y2016 = budgetChartService.prepAllMonthsChart(budget[2016].forecastCategoryBudgets, $scope.costTypes.selectedOption.id);
        }
        
        drawAllCharts2017 = function() {
            $scope.singleCatChart.y2017 = budgetChartService.prepSingleCatChart(budget[2017].forecastCategoryBudgets, $scope.costTypes.selectedOption.id, $scope.showCategoryBudgets);
            $scope.allCatChart.y2017 = budgetChartService.prepAllCatChart(budget[2017].forecastCategoryBudgets, $scope.costTypes.selectedOption.id);
            $scope.allMonthsChart.y2017 = budgetChartService.prepAllMonthsChart(budget[2017].forecastCategoryBudgets, $scope.costTypes.selectedOption.id);
        }

        drawYearsChart = function() {
            $scope.yearsChart = budgetChartService.prepYearsChart(budget, $scope.costTypes.selectedOption.id)
        }
    }
});
