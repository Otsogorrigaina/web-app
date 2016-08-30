import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './otsogorri-app.html';
import { name as Panels } from '../panels/panels';

class OtsogorriApp {}

const name = 'otsogorriApp';

// create a module
export default angular.module( name, [
  angularMeteor,
  Panels,
  'accounts.ui',
  uiRouter ])
  .component(name, {
    template,
    controllerAs: name,
    controller: OtsogorriApp
  })
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
     //$state.go('partidos');
    }
  });
}
