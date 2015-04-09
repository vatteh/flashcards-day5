app.directive('flashCard', function(ScoreFactory){
    return {
        restrict: 'E',
        templateUrl: '/js/directives/flash-card/flash-card.html',
        scope: {
            card: '='
        },
        link: function(scope) {
            scope.answered = false;
            scope.answeredCorrectly = null;
            scope.answerQuestion = function (answer) {
                if (scope.answered) return;
                scope.answered = true;
                scope.answeredCorrectly = answer.correct;
                if (answer.correct) ScoreFactory.correct++;
                else ScoreFactory.incorrect++;
            };
        }
    };
});
