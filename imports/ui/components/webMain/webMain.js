import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { name as Panels } from '../panels/panels';
import { name as SectionBoulder } from '../sectionBoulder/sectionBoulder';
import { name as SectionExtraescolares } from '../sectionExtraescolares/sectionExtraescolares';
import { name as SectionAsociacion } from '../sectionAsociacion/sectionAsociacion';
import { name as SectionParticipacion } from '../sectionParticipacion/sectionParticipacion';
import { name as SectionCulturaMedio } from '../sectionCulturaMedio/sectionCulturaMedio';
import { name as SectionBibliotecaMapas } from '../sectionBibliotecaMapas/sectionBibliotecaMapas';
import { name as SectionSalidas } from '../sectionSalidas/sectionSalidas';
import { name as SectionContacto } from '../sectionContacto/sectionContacto';


import template from './webMain.html';
const name = 'webMain';

class WebMain {}

// create a module with a componente
export default angular.module(name, [
  Panels,
  SectionExtraescolares,
  SectionContacto,
  SectionSalidas,
  SectionBibliotecaMapas,
  SectionAsociacion,
  SectionParticipacion,
  SectionBoulder,
  SectionCulturaMedio,
  uiRouter,
  angularMeteor ])
  .component(name, {
    templateUrl: template,
    controller: WebMain,
    controllerAs: name
  })
  .config(config)
  .run(run);

  function config($locationProvider, $urlRouterProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  }

  function run($rootScope, $state) {
    'ngInject';

    $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
      if (error === 'AUTH_REQUIRED') {
        $state.go('app');
      }
    });
  }
