import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './sectionCulturaMedio.html';
const name = 'sectionCulturaMedio';

class SectionCulturaMedio {
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
		controller: SectionCulturaMedio
	})
	.config(config);

function config($stateProvider) {
	'ngInject';
  $stateProvider
    .state('cultura-medio', {
      url: '/cultura-medio',
      template: '<section-cultura-medio></section-cultura-medio>'
    });
}
