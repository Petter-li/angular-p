var routerApp = angular.module("routerApp", ["ui.router", "ngAnimate", "SignConModule"]);
routerApp.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
routerApp.config(function ($stateProvider, $urlRouterProvider,$qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $urlRouterProvider.otherwise("/index");
    $stateProvider.state("index", {
        url: "/index",
        views: {
            "": {
                templateUrl: "tpls/home.html",
                controller: "SignCon"
            }
        }
    }).state("index.sign", {
        url: "/sign",
        views: {
            "main@index": {
                templateUrl: "tpls/sign.html"
            }
        }
    }).state("index.login", {
        url: "/login",
        views: {
            "main@index": {
                templateUrl: "tpls/login.html"
            }
        }
    }).state("BookMain",{
        url:"/main",
        views:{
            "":{
                templateUrl:"tpls/main.html"
            }
        }
    })
});