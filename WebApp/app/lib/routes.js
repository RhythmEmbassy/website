Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  waitOn: function () {
    Meteor.setTimeout(function(){return;}, 2000);
  },
  onBeforeAction: function () {
    //   if (!Meteor.userId()) {
    //       // if the user is not logged in, render the Login template
    //       this.render('Home');
    //   } else {
    //       // otherwise don't hold up the rest of hooks or our route/action function
    //       // from running
    //       this.next();
    //   }
    this.next();
    }
});

Router.route('login', {
  name: 'login',
  controller: 'LoginController',
  action: 'action',
  where: 'client'
});


Router.route('test', {
  name: 'test',
  controller: 'TestController',
  action: 'action',
  where: 'client'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});