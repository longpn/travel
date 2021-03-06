var app = angular.module('travelApp', ['ui.router', 'datatables', 'angular-md5','ngFileUpload',
    'ui.bootstrap.datetimepicker','ui-notification']);
app.factory('ConfigService', [function() {
    return {
        host: 'http://localhost:9014',
        hostImage:'http://localhost:9012'    
    };
}]);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push(function($q, $state, $window) {
        if ($window.localStorage.token != undefined) {
            $httpProvider.defaults.headers.common['x-access-token'] = $window.localStorage.token;
        }
        return {
            'response': function(response) {
                //Will only be called for HTTP up to 300
                return response;
            },
            'responseError': function(rejection) {
                if (rejection.status === 403) {
                    $state.go('login');
                }
                return $q.reject(rejection);
            }
        };
    });
}]);
