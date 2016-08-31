import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as Webapp } from '../imports/ui/components/webapp/webapp';

angular.module('otsogorriweb-app', [ angularMeteor, Webapp]);
