import { Email } from 'meteor/email';

//var to = 'jonmultimedia@gmail.com';
var login = encodeURIComponent("jonmultimedia@gmail.com");
var password = encodeURIComponent("otsogorrijoar21");
var domain = "smtp.gmail.com";
var port = 465;
process.env.MAIL_URL = "smtp://" + login + ":" + password + "@" + domain + ":" + port;
console.log('Process.env.MAIL_URL: '+process.env.MAIL_URL);
// In your server code: define a method that the client can call
Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    to = 'jonmultimedia@gmail.com';
    check([to, from, subject, text], [String]);
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();
    console.log(process.env.MAIL_URL);
    Email.send({
      to: to,
      from: from,
      subject: subject,
      text:text
    });
  }
});
