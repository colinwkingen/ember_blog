import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.query('article', {
      orderBy: 'category',
      equalTo: params.category_name
    });
  }
});
