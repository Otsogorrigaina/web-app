import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './codePiwik.html';

const name = 'codePiwik';

class CodePiwik {
}

// create a module with a componente
export default angular.module( name, [ angularMeteor])
  .component(name, {
    templateUrl: template,
    controller: CodePiwik,
    controllerAs: name
  }
);
