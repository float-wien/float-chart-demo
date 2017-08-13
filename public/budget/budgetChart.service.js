angular.module('floatCharts.budget').factory('budgetChartService', () => {

    return {
        prepSingleCatChart,
        prepAllCatChart,
        prepAllMonthsChart,
        prepYearsChart
    };

    function prepSingleCatChart(forecastCategoryBudgets, costType, showCategoryBudgets) {
        let data = [];
        let series = [];
        let arrCategoryBudgets = showCategoryBudgets.split(',');

        arrCategoryBudgets.forEach((catBudget) => {
            if (forecastCategoryBudgets[catBudget]) {
                let singleChartData = [];
                for (var i = 1; i <= 12; i++) {
                    singleChartData.push(
                        forecastCategoryBudgets[catBudget].budgetElements.hasOwnProperty(['' + i])
                            ? forecastCategoryBudgets[catBudget].budgetElements['' + i].actualAmounts[costType]
                            : 0);
                }
                data.push(singleChartData);
                series.push('Category ' + catBudget);
            }
        });
        return { data, series };
    }

    function prepAllCatChart(forecastCategoryBudgets, costType) {
        let data = [];
        let sumData = {};
        let arrSumData = [];
        //sum all categories for each month
        Object.values(forecastCategoryBudgets).forEach((objCatBudget) => {
            for (var i = 1; i <= 12; i++) {
                if (objCatBudget.budgetElements.hasOwnProperty(['' + i])) {
                    sumData['' + i] = (sumData['' + i] || 0) + objCatBudget.budgetElements['' + i].actualAmounts[costType];
                }
            }
        });
        //create array from 1-12 instead of object    
        for (var i = 1; i <= 12; i++) arrSumData.push(sumData.hasOwnProperty(['' + i]) ? sumData['' + i] : 0);
        data.push(arrSumData); //push to chart
        return { data };
    }

    function prepAllMonthsChart(forecastCategoryBudgets, costType) { //actual sum + target sum
        let data = [];
        let labels = [];
        let series = [];

        let arrActualSumMonths = [];
        let arrTargetSumMonths = [];

        //sum all categories for each month
        Object.values(forecastCategoryBudgets).forEach((objCatBudget) => {
            let actualSumMonths = 0;
            let targetSumMonths = 0;
            Object.values(objCatBudget.budgetElements).forEach((objMonthBudget) => {
                actualSumMonths += objMonthBudget.actualAmounts[costType];
                targetSumMonths += objMonthBudget.targetAmounts[costType];
            });
            arrActualSumMonths.push(actualSumMonths);
            arrTargetSumMonths.push(targetSumMonths);
            labels.push(objCatBudget.forecastCategoryId);
        });
        data = [arrActualSumMonths, arrTargetSumMonths];
        series = ['Actual amounts', 'Target Amounts'];
        return { data, labels, series };
    }

    function prepYearsChart(budgets, costType) {
        let data = [];
        let labels = [];
        let series = ['Actual amounts', 'Target Amounts'];

        let arrActualSum = [];
        let arrTargetSum = [];

        Object.values(budgets).forEach((budget) => {
            labels.push(budget.year);
            let actualSum = 0;
            let targetSum = 0;
            Object.values(budget.forecastCategoryBudgets).forEach((objCatBudget) => {
                Object.values(objCatBudget.budgetElements).forEach((objMonthBudget) => {
                    actualSum += objMonthBudget.actualAmounts[costType];
                    targetSum += objMonthBudget.targetAmounts[costType];
                });

            });
            arrActualSum.push(actualSum);
            arrTargetSum.push(targetSum);
        });
        data = [arrActualSum, arrTargetSum];
        return { data, labels, series };
    }
});