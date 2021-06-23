const app = angular.module("todoApp",[]);

app.filter('capitalize',function(){
    return function(input){
        return (angular.isString(input) && input.length > 0) ? input.charAt(0).toUpperCase() + input.substr(1) : input;
    }
});

// ng-model="task" placeholder="Enter Task Here..."