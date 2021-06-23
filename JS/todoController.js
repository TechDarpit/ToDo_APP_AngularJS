app.controller("todoController", function($scope,$filter){
    $scope.task="";
    $scope.tasks=[];
    $scope.remainingCount = 0;

    $scope.$watch('tasks',function(){
        $scope.remainingCount = $filter('filter')($scope.tasks,{status:false}).length;
    },true);

    $scope.addTask = function(){

        let field=document.form.taskInput;
        let err=document.getElementById("error");
        if(field.value==""){
            err.style.display="block";
            return false;
        }
        else{
            err.style.display="none";
        }
        
        let taskObj = {title:$scope.task , status:false};
        $scope.tasks.push(taskObj);
        $scope.task="";
        
    }

    $scope.removeTask = function(idx){
        $scope.tasks.splice(idx,1);
    }

    $scope.clearAll = function(idx){
        $scope.tasks=[];
    }

    $scope.clearCompleted = function(idx){
        $scope.tasks = $scope.tasks.filter(function(task){
            return !task.status;
        })
    }
});
