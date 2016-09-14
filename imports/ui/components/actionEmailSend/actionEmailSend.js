import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './actionEmailSend.html';

const name = 'actionEmailSend';

class ActionEmailSend {
  constructor() {
    this.email = {};
  }

  submit() {
    // In your client code: asynchronously send an email
    Meteor.call( 'sendEmail',
      null ,
      this.email.remitente ,
      this.email.subject ,
      this.email.message
    );
    console.log('submit:', this.email);
    this.email = {};
  }

}

// create a module with a componente
export default angular.module( name, [ angularMeteor])
  .component(name, {
    templateUrl: template,
    controller: ActionEmailSend,
    controllerAs: name
  }
);
