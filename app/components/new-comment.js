import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addComment1(){
      var params = {
        author: this.get('author'),
        article: this.get('article'),
        comment: this.get('comment'),
        timestamp: Date()
      };

      this.sendAction('addComment2', params);
      this.set('comment', '');
      this.set('author', '');
    }
  }
});
