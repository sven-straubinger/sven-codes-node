'use strict';

angular
  .module('individualDetail')
  .component('individualDetail', {
    templateUrl: 'javascripts/individual-detail/individual-detail.template.html',
    controller: [ '$routeParams',
      function IndividualDetailController($routeParams){
        this.slug = $routeParams.slug;
      }
    ]
  });
