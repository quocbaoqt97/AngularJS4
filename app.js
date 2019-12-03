(function(){
  angular.module('webapp',[])
  .controller('webappcontroller',webappcontroller)
  .filter('Name',NameFilter)
  .filter('Truth',TruthFilter);
  webappcontroller.$inject = ['$scope','NameFilter'];
  function webappcontroller ($scope,NameFilter){
    $scope.blur = function(){
      var message = $scope.textt;
      $scope.textt_1 = NameFilter(message);
    };
    }
    function NameFilter(){
      return function(input){
        input = input || "";
        input = input.replace("you","Alex");
        return input;
      };
  }
  function TruthFilter(){
    return function (input,addin1,addin2){
      input = input||"";
      input = input.concat(addin1,addin2);
      return input;
    };
  }


})();
