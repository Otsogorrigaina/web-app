import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './sectionSalidas.html';
const name = 'sectionSalidas';

class SectionSalidas {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    this.helpers({
    });
  }
}

// create a module
export default angular.module(name, [angularMeteor, uiRouter])
	.component(name, {
		templateUrl: template,
		controllerAs: name,
		controller: SectionSalidas
	})
	.config(config);

function config($stateProvider) {
	'ngInject';
  $stateProvider
    .state('salidas-populares', {
      url: '/salidas-populares',
      template: '<section-salidas></section-salidas>'
    });
}
