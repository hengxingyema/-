/**
 * Created by cailong on 16/5/31.
 */

app.directive("thNav",function(){
    return {
        restrict: 'E',
        templateUrl: '/navbar.html'


    };
});

// app.directive("thFooter",function(){
//     return {
//         restrict: 'E',
//         templateUrl: '/html/footer.html',
//         controller:function(){
// //*****************************回到顶部****************************************
//             var obtn = document.getElementById('btn');
//             //获取页面可视区的高度
//             var clientHeight=document.documentElement.clientHeight;
//             var timer = null;
//             var isTop = true;
//
//             window.onscroll=function(){
//                 var osTop=document.documentElement.scrollTop||document.body.scrollTop;
//                 if (osTop >= clientHeight){
//                     obtn.style.display="block"; //显示按钮
//                 }else {
//                     obtn.style.display="none"; //隐藏按钮
//                 }
//                 if (!isTop){
//                     clearInterval(timer);
//                 }
//                 isTop = false;
//             };
//             obtn.onclick = function(){
//                 //设置定时器
//                 timer = setInterval(function(){
//                     var osTop=document.documentElement.scrollTop||document.body.scrollTop;
//                     var ispeed = Math.floor(-osTop / 6);
//                     //获取滚动条距离顶部的高度
//                     document.documentElement.scrollTop=document.body.scrollTop=osTop+ispeed;
//                     isTop = true;
//                     if(osTop == 0){
//                         clearInterval(timer);
//                     }
//                 },30);
//             }
//
//         }
//     }
//
// });

app.controller('indexAppCtrl', function($scope, $http, $location){
    $scope.unreadNotice = false;
    $scope.chuxian = false;

    var index = navIndex;
    $scope.navShowIndex = index;
    $scope.myColors = ['white', 'white', 'white', 'white','white','white','white'];
    $scope.myColors[index] = '#3498db';


});

