import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('article', {path: '/article/:article_id'});
  this.route('about');
  this.route('category', {path: '/:category_name'})
  this.route('admin', {path: '/admin'}, function() {
    this.route('new');
    this.route('edit',{path: '/edit/:article_id'});
  })

  this.route('contact');
});

export default Router;
