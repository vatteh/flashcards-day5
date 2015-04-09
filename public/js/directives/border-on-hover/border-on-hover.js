app.directive('borderOnHover', function(){
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on('mouseenter', function () {
                element.css('border','2px solid black');
            });
        }
    };
});
