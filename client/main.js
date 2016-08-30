import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as  OtsogorriWebApp} from '../imports/ui/components/liquidPoll/liquidPoll';

angular.module('otsogorriweb-app', [ angularMeteor, OtsogorriWebApp ]);
