angular.module('floatCharts.budget').factory('budgetChartService', () => {
    
    return {
        prepSingleCatChart
    };

    function prepSingleCatChart(forecastCategoryBudgets, costType, showCategoryBudgets) {
            let data = []; //null data
            let series = [];
            let arrCategoryBudgets = showCategoryBudgets.split(',');

            arrCategoryBudgets.forEach((catBudget) => {
                if (forecastCategoryBudgets[catBudget]) {
                    let singleChartData = [];
                    for (var i = 1; i <=12 ; i++) {
                        singleChartData.push(
                            forecastCategoryBudgets[catBudget].budgetElements.hasOwnProperty([''+i]) 
                            ? forecastCategoryBudgets[catBudget].budgetElements[''+i].actualAmounts[costType]
                            : 0);
                    }
                    data.push(singleChartData);
                    series.push('Category '+catBudget);
                }
            });
            return {data, series};
        }

   
});