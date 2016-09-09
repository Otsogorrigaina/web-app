import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './sectionContacto.html';
const name = 'sectionContacto';

class SectionContacto {
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
		controller: SectionContacto
	})
	.config(config);

function config($stateProvider) {
	'ngInject';
  $stateProvider
    .state('contacto', {
      url: '/contacto',
      template: '<section-contacto></section-contacto>'
    });
}
