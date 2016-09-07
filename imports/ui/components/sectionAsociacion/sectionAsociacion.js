import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './sectionAsociacion.html';
const name = 'sectionAsociacion';

class SectionAsociacion {
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
		controller: SectionAsociacion
	})
	.config(config);

function config($stateProvider) {
	'ngInject';
  $stateProvider
    .state('asociacion', {
      url: '/asociacion',
      template: '<section-asociacion></section-asociacion>'
    });
}
