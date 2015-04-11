Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
    'click .logout-button':function() {
        AccountsTemplates.logout();
    }
});

Template.MasterLayout.rendered = function () {
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
};
