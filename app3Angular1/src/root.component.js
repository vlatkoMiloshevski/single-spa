import angular from 'angular';

angular
    .module('app')
    .component('root', {
        template: `
        <div style="margin-top: 100px;">
            <img src="/app3/angular_js.png" style="width: 100px;" /> 
            <br />
            This application is written in Angular JS
        </div>
        <br />

        <a href="#/app3/subroute1">Subroute 1</a>
        <a href="#/app3/subroute2">Subroute 2</a>
        <a href="#/app2/subroute2">Angular 6 Subroute 2</a>

        <ui-view />`,
        controllerAs: 'vm',
        controller() {
            const vm = this;
        }
    });
