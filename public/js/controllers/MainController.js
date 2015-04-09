app.controller('MainController', function ($scope, FlashCardsFactory) {

    $scope.flashCards = [];

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.card = {
        question: null,
        category: null,
        answers: [
            { text: null, correct: false },
            { text: null, correct: false },
            { text: null, correct: false }
        ]
    };

    $scope.submitCard = function (card) {
        FlashCardsFactory.addFlashCard(card).then(function (newCard) {
            console.log(newCard);
        });
    };

    $scope.chosenCategory = 'All';

    $scope.getCategoryCards = function (category) {
        $scope.chosenCategory = category || 'All';
        $scope.loading = true;
        $scope.failed = false;
        FlashCardsFactory.getFlashCards(category).then(function (cards) {
            $scope.loading = false;
            $scope.flashCards = cards;
        }).catch(function(err){
            $scope.loading = false;
            $scope.error = err;
        });
    };

    $scope.getCategoryCards();

});
