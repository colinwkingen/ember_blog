import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('article', params.article_id);
  },
  actions: {
    editPost(article, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !=="") {
          article.set(key,params[key]);
        }
      });
      article.save();
    },
    destroyPost(article) {
      article.destroyRecord();
      this.transitionTo('admin.new');
    },
    destroyComment(comment){
      comment.destroyRecord();
    }
  }
});
