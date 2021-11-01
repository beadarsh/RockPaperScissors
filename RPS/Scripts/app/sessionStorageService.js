gameApp.factory('SessionStorageService', ['$rootScope', function ($rootScope) {
    return {
        getScores: function () {
            if (sessionStorage.getItem("scores") === null) {
                return { playerOneScore: 0, playerTwoScore: 0 };
            }
            return JSON.parse(sessionStorage.getItem('scores'));
        },
        saveScores: function (playerOneScore, playerTwoScore) {
            sessionStorage.setItem('scores', JSON.stringify({ playerOneScore: playerOneScore, playerTwoScore: playerTwoScore }));
        }
    };
}]);

