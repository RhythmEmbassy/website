Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
    'click #logout-button':function() {
        AccountsTemplates.logout();
    }
});
