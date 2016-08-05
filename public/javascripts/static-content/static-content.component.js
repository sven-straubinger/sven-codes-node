'use strict';

angular.
  module('staticContent').
  component('staticContent', {
    templateUrl: '/javascripts/static-content/static-content.template.html',
    controller: function StaticContentController() {
        this.slug = 'imprint';
    }
  });
