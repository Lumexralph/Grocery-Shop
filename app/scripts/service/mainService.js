angular.module('mod2LabApp')
      .factory('MainService', ['$http', '$q', mainService]);

function mainService($http, $q) {
  
  var service = {
    message: getMessage
  }

  return service;

  function getMessage() {
    var deferred = $q.defer();

    $http.get('http://localhost:3000/welcome').then((result) => deferred.resolve(result));

    return deferred.promise;
    
  }


}