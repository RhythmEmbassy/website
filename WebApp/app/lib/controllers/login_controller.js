LoginController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
    // this.subscribe('contents', Meteor.userId());
  },

  data: function(){
    // return Contents.find({});
  },

  action: function() {
    this.render('Login');
  }
});
