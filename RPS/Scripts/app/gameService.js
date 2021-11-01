gameApp.factory('GameService', ['$http', function ($http) {
    var GameService = {};
    GameService.fetchResultForPlayerOptions = function (playerOneOption, playerTwoOption) {
        return $http({
            method: "GET",
            url: "/Game/FetchResultForPlayerOptions",
            dataType: 'json',
            params: { playerOneOption: playerOneOption, playerTwoOption: playerTwoOption },
            headers: { "Content-Type": "application/json" }
        });
    };
    return GameService;
}]); 