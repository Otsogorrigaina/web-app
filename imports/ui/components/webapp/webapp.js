import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './webapp.html';
import { name as Panels } from '../panels/panels';

const name = 'webapp';

class Webapp {}

// create a module with a componente
export default angular.module( name, [
  Panels,
  uiRouter,
  angularMeteor ])
    .component(name, {
      templateUrl: template,
      controller: Webapp,
      controllerAs: name
    }
)
.config(config)
.run(run);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}

function run($rootScope, $state) {
  'ngInject';

  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    if (error === 'AUTH_REQUIRED') {
      $state.go('app');
    }
  });
}
