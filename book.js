var app=angular.module("myApp",[]);
app.controller("saveoption",function($scope,$timeout,$http){
        $scope.si=true;
        $scope.store=[]
        $scope.name="";
        $scope.number="";
        $scope.count=0;
        $scope.dup=[];
        $scope.dup1=[]
        if($scope.store.length==0){
            $scope.hi=true;
            $scope.message="No Contacts Found Till now";
        }
        $scope.save=function(){
        if($scope.name!="" && $scope.number!=""){
          var check=$scope.dup.includes($scope.number)
          var check1=$scope.number.length;
          if(check1!=10){
            $scope.message="Number must be 10 digits";
            $timeout(function(){
                $scope.message="";
            },1000)
          }
          else if(check==false){
              
            $scope.store.push({
                na:$scope.name,
                ph:$scope.number
            })
            $scope.dup.push($scope.number)
            $scope.hi=false;
            $scope.name="";
            $scope.number="";
            $scope.message="Contact Saved";
            $timeout(function(){
                $scope.message="";
            },1000)
          }
          else{
            $scope.message="Number Already Exists !!!";
            $timeout(function(){
                $scope.message="";
            },1000)
          } 
       } 
        else{
          $scope.message="Complete All Fields !!!";
          $timeout(function(){
            $scope.message="";
        },1000)
        }
      }
      $scope.hi=true;
      $scope.delete=function(x){
        $scope.store.splice(x-1,1)
        $scope.dup.splice(x-1,1)
        if($scope.store.length==0){
            $scope.hi=true;
            $scope.message="No Contacts Found Till now";
        }
        $scope.message="Contact Deleted Successfully";
        $timeout(function(){
            $scope.message="";
        },1000)
    }
    $scope.sort=function(y){
        $scope.so=y
    }
    $scope.update=function(g){
        $scope.si=false;
        $scope.bye=true;
        var k=$scope.store[g]
        var count=0
        $scope.name=k.na
        $scope.number=k.ph
        console.log($scope.dup)
        console.log(count)
         $scope.save1=function(){

           count=0;
           if($scope.number.length==10){
              for(let i=0;i<$scope.dup.length;i++){
                if($scope.number==$scope.dup[i]  && i!=g){
                    count+=1;
                }
              }
              if(count==0 && $scope.number.length==10){
              $scope.store[g].na=$scope.name
              $scope.store[g].ph=$scope.number
              $scope.dup[g]=$scope.number
              $scope.si=true;
              $scope.bye=false;
              $scope.message="Contact Updated Successfully";
              $timeout(function(){
                  $scope.message="";
              },1000)
              $scope.name=""
              $scope.number=""
              console.log($scope.dup)
            }
            else{
              $scope.message="Number Already Exists !!!";
              $timeout(function(){
                  $scope.message="";
              },1000)
            }
          }
          else{
            $scope.message="Mobile number Must Be 10 Digits";
            $timeout(function(){
                $scope.message="";
            },1000)
          }
         }
       
    }
    $scope.execute=function(){
      var data={
        "userId":10,
        "id": 101,
        "title":"Nitesh",
        "body":"Setti"
      }
      $http.post("https://jsonplaceholder.typicode.com/posts",JSON.stringify(data)).then(function(response){
        console.log(response)
      })
    }
});