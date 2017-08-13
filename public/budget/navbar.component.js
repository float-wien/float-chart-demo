angular.module('floatCharts.common').component('navbar', {
    controllerAs: 'vm',
    controller: function ($location) {
        let vm = this;

        vm.isActive = route => route === $location.path();
    },
    templateUrl: 'public/common/navbar.html'
});
