import DS from 'ember-data';

export default DS.Model.extend({
  article: DS.belongsTo('article', { async: true }),
  author: DS.attr(),
  timestamp: DS.attr(),
  comment: DS.attr()
});
