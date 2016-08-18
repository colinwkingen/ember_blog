import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  category: DS.attr(),
  content: DS.attr(),
  image: DS.attr(),
  timestamp: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
