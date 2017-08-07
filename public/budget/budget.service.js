angular.module('floatCharts.budget').factory('budgetService', ($q, $timeout) => {
    //let Budget = $resource('/api/v1/budget/:clientId');
    let budget = []; // TODO add fake budget data here

    return {
        getBudget
    };


    function getBudget(client, year) {
        //return Budget.$get({ clientId: client.id, year });
        // mock budget route
        return $q(resolve => {
            $timeout(() => resolve(budget), 300);
        });
    }
});
