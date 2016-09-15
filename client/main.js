import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as webMain } from '../imports/ui/components/webMain/webMain';
import { name as webHeader } from '../imports/ui/components/webHeader/webHeader';
import { name as webFooter } from '../imports/ui/components/webFooter/webFooter';
import { name as CodePiwik } from '../imports/ui/components/codePiwik/codePiwik';

angular.module('otsogorriweb-app', [
  angularMeteor,
  webMain,
  webHeader,
  webFooter,
  CodePiwik
]);
