gameApp.factory('SessionStorageService', ['$rootScope', function ($rootScope) {
    return {
        getScores: function () {
            if (sessionStorage.getItem("scores") === null) {
                return { playerOneScore: 0, playerTwoScore: 0 };
            }
            return sessionStorage.getItem('scores');
        },
        saveScores: function (playerOneScore, playerTwoScore) {
            sessionStorage.setItem('scores', { playerOneScore: playerOneScore, playerTwoScore: playerTwoScore });
        }
    };
}]);