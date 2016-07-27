'use strict';

angular
  .module('individualDetail')
  .component('individualDetail', {
    template: 'TBD for {{$ctrl.slug}}',
    controller: [ '$routeParams',
      function IndividualDetailController($routeParams){
        this.slug = $routeParams.slug;
      }
    ]
  });
