import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './sectionBibliotecaMapas.html';
const name = 'sectionBibliotecaMapas';

class SectionBibliotecaMapas {
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
		controller: SectionBibliotecaMapas
	})
	.config(config);

function config($stateProvider) {
	'ngInject';
  $stateProvider
    .state('biblioteca-mapas', {
      url: '/biblioteca-mapas',
      template: '<section-biblioteca-mapas></section-biblioteca-mapas>'
    });
}
