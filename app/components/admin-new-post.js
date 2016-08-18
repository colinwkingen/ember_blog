import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1(){
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        category: this.get('category') ? this.get('category') : "",
        content: this.get('content') ? this.get('content') : "",
        image: this.get('image') ? this.get('image') : "https://placeholdit.imgix.net/~text?txtsize=33&txt=373%C3%97280&w=684&h=513",
        timestamp: this.get('timestamp') ? this.get('timestamp') : ""
      };
            console.log(params);
      this.sendAction('save2', params);
    }
  }
});
