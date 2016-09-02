import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './panels.html';

const name = 'panels';

class Panels {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    this.helpers({
    });
  }

}

// create a module with a componente
export default angular.module( name, [
  //uiRouter,
  angularMeteor ])
    .component(name, {
      templateUrl: template,
      controller: Panels,
      controllerAs: name
    }
);
