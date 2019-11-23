import angular from 'angular';

angular
    .module('app')
    .component('root', {
        templateUrl: 'app3/src/root.component.html',
        controllerAs: 'vm',
        controller($timeout) {
            const vm = this;
        }
    });
