import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './panels.html';

const name = 'panels';

class Panels {}

// create a module with a componente
export default angular.module(name, [
  angularMeteor ])
  .component(name, {
    templateUrl: template,
    controller: Panels,
    controllerAs: name
  });
