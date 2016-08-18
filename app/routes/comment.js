import Ember from 'ember';

export default Ember.Route.extend({
  model() {
   return this.store.findAll('comment');
  }
  actions: {
    destroyComment(comment){
      comment.destroyRecord();
      this.transitionTo('admin')
    }
  }
});
