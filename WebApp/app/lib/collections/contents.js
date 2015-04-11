Contents = new Mongo.Collection('contents');

Contents.attachSchema(
  new SimpleSchema({
    url:{
      type: String,
      label: "URL",
      max: 200
    },
    title:{
      type: String,
      label: "Title",
      max: 200,
      optional: true
    },
    snippet_url:{
      type: String,
      label: "Snippet URL",
      optional: true
    },
    description:{
      type: String,
      label: "Description",
      max: 1500,
      optional: true
    },
    createdAt:{
      type: Number,
      label: "Created At",
      optional: true
    },
    bridges_number:{
      type: Number,
      autoValue: function() {
        return typeof(this.bridges) === 'undefined' ? 0 : this.bridges.size;
      },
      label: "Bridges Number"
    },
    bridges:{
      type:[Object],
      label: "Linked Bridges",
      optional: true
    },
    "bridges.$.id":{
      type: String,
      label: "Bridge ID"
    },
    "bridges.$.description":{
      type: String,
      label: "Bridge Description",
      optional: true
    }
  }));


if (Meteor.isServer) {
  Contents.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

  Contents.deny({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });
}
