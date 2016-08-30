import angular from 'angular';
import angularMeteor from 'angular-meteor';

import  Webapp from '../imports/ui/components/webapp/webapp';

angular.module('otsogorriweb-app', [ angularMeteor, Webapp.name ]);
