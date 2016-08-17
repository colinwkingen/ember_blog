import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },
  actions: {
    newPost(myTitle, myAuthor, myCategory, myContent, myImage, myTimestamp) {
      var inputs = {
        title: myTitle,
        author: myAuthor,
        category: myCategory,
        content: myContent,
        image: myImage ? myImage : "https://placeholdit.imgix.net/~text?txtsize=33&txt=373%C3%97280&w=684&h=513",
        timestamp: myTimestamp
      };
      console.log(inputs);
      var newArticle = this.store.createRecord('article', inputs);
      newArticle.save();
      // this.sendAction('realNewPost', inputs);
    },
    // realNewPost(params) {
    //   var newArticle = this.store.createRecord('article', inputs);
    //   newArticle.save();
    // }
  }
});
