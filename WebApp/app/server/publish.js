/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */

Meteor.publish('contents', function (userId) {
    return Contents.find({});
});
