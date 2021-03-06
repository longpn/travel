'use strict';

app.config(function($stateProvider, $urlRouterProvider, $transitionsProvider) {

    $transitionsProvider.onStart({
        to: function(state) {
            return state.requireAuthen === undefined ? true : false;
        }
    }, function($transition$, $state, userService) {
        if (!userService.isLogin()) {
            return $state.go('login');
        }

    });

    $urlRouterProvider.otherwise('/login');

    $stateProvider        
        .state('home', {
            url: '/',
            views: {
                'header@': {
                    templateUrl: '/app/shared/header.html',
                    controller: 'headerCtrl'
                },
                'content@': {
                    templateUrl: '/app/shared/content.html',
                },
                'footer@': {
                    templateUrl: '/app/shared/footer.html',
                }
            }
        })
        .state('login', {
            url: '/login',
            views: {
                'login@': {
                    templateUrl: '/app/components/login/login.html',
                    controller: 'loginCtrl'
                }
            },
            requireAuthen: false
        })        
        .state('home.travel', {
            url: '/travel',
            views: {
                'content@': {
                    templateUrl: '/app/components/travel/listing.html',
                    controller: 'travelCtrl'
                }
            },
            requireAuthen: false
        })
        .state('home.detail', {
            url: '/detail',
            views: {
                'content@': {
                    templateUrl: '/app/components/travel/detail.html',
                    controller: 'travelDetailCtrl'
                }
            },
            requireAuthen: false
        })
});
