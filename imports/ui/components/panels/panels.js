import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './panels.html';

const name = 'panels';

class Panels {}

// create a module
export default angular.module(name, [
  angularMeteor ])
  .component(name, {
    templateUrl: 'imports/ui/components/panels/panels.html',
    controller: Panels,
    controllerAs: name
  });
