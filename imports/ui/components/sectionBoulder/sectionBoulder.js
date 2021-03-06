import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './sectionBoulder.html';
const name = 'sectionBoulder';

class SectionBoulder {
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
		controller: SectionBoulder
	})
	.config(config);

function config($stateProvider) {
	'ngInject';
  $stateProvider
    .state('boulder', {
      url: '/boulder',
      template: '<section-boulder></section-boulder>'
    });
}
