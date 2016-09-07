import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './sectionExtraescolares.html';
const name = 'sectionExtraescolares';

class SectionExtraescolares {
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
		template,
		controllerAs: name,
		controller: SectionExtraescolares
	})
	.config(config);

function config($stateProvider) {
	'ngInject';
  $stateProvider
    .state('extraescolares', {
      url: '/extraescolares',
      template: '<section-extraescolares></section-extraecolares>'
    });
}
