var SignConModule = angular.module("SignConModule", []);
SignConModule.controller("SignCon",function ($scope) {
    $scope.userData = {};
    $scope.checkChoice1 = function () {
        $scope.onOff = false;
        $scope.check1 = true;
        $scope.check2 = false;
    }
    $scope.checkChoice2 = function () {
        $scope.onOff = true;
        $scope.check1 = false;
        $scope.check2 = true;
    }
})
SignConModule.directive("compare", function () {
    return {
        restrict: "AE",
        require: "ngModel",
        scope: {
            orgText: "=compare"
        },
        link: function (scope, ele, attrs, con) {
            con.$validators.compare = function (v) {
                return v == scope.orgText;
            }
            scope.$watch("orgText", function () {
                con.$validate();
            })
        }
    }
}).directive("logina",function($timeout){
    return {
        restrict:"AE",
        replace:true,
        template:"<a ui-sref=\".login\" class=\"login\" ng-click=\"checkChoice2()\" ng-class=\"{active:check2}\">登陆</a>",
        link:function(scope,ele,attrs,con){
            $timeout(function () {
               ele.trigger("click");
            }, 100);
        }
    }
});
