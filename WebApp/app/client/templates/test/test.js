/*****************************************************************************/
/* Test: Event Handlers */
/*****************************************************************************/
Template.Test.events({
    'click #logout-button':function() {
        AccountsTemplates.logout();
    },
    'click #go-home':function(){
        Router.go('/');
    }
});

/*****************************************************************************/
/* Test: Helpers */
/*****************************************************************************/
Template.Test.helpers({
});

/*****************************************************************************/
/* Test: Lifecycle Hooks */
/*****************************************************************************/
Template.Test.created = function () {
};

Template.Test.rendered = function () {
};

Template.Test.destroyed = function () {
};
