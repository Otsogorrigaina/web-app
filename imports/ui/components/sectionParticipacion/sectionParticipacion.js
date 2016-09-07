import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './sectionParticipacion.html';
const name = 'sectionParticipacion';

class SectionParticipacion {
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
		controller: SectionParticipacion
	})
	.config(config);

function config($stateProvider) {
	'ngInject';
  $stateProvider
    .state('participacion', {
      url: '/participacion',
      template: '<section-participacion></section-participacion>'
    });
}
