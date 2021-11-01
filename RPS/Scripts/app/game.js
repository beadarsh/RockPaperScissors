(function (angular) {
    'use strict';
    function GameController($window, Constants, SessionStorageService, GameService) {
        var ctrl = this;
        ctrl.winnerText = "";

        ctrl.gameTypeSelectionChange = function () {
            // alert(ctrl.currentGameTypeSelection);
            ctrl.resetSelectionChange();
            ctrl.fetchMatchResults();
        };

        ctrl.resetSelectionChange = function () {
            ctrl.resetSelectionForPlayerOne();
            ctrl.resetSelectionForPlayerTwo();
        };

        ctrl.resetSelectionForPlayerOne = function () {
            if (ctrl.currentGameTypeSelection === Constants.PlayerVsComputerOption || (ctrl.currentGameTypeSelection === Constants.DifferentEachTimeOption && ctrl.lastPlayedGameType === Constants.ComputerVsComputerOption)) {
                ctrl.playerOneRPSSelection = null;
                ctrl.lastPlayedGameType = Constants.PlayerVsComputerOption;
                return;
            }
            ctrl.playerOneRPSSelection = ctrl.getRandomSelection();
            ctrl.lastPlayedGameType = Constants.ComputerVsComputerOption;
        };

        ctrl.resetSelectionForPlayerTwo = function () {
            if (ctrl.lastPlayedGameType === Constants.PlayerVsComputerOption) {
                ctrl.player2RPSSelection = null;
                return;
            }
            ctrl.player2RPSSelection = ctrl.getRandomSelection();
        };

        ctrl.onPlayerSelectionChange = function (playerOneSelection) {
            ctrl.playerTwoRPSSelection = ctrl.getRandomSelection();
            ctrl.playerOneRPSSelection = playerOneSelection;
            ctrl.fetchMatchResults();
            // alert(playerOneSelection);
        };

        ctrl.fetchMatchResults = function () {
            GameService
                .fetchResultForPlayerOptions(ctrl.playerOneRPSSelection, ctrl.player2RPSSelection)
                .then(ctrl.successCallback, ctrl.errorCallback);
        };

        ctrl.successCallback = function (response) {
            ctrl.winnerText = ctrl.getResponseText(response.data);
            ctrl.updateScores(response.data);
            ctrl.showReplayGameOption = true;
        }

        ctrl.errorCallback = function (response) {
            // $window.alert(response.data.Message);
        };

        ctrl.getRandomSelection = function () {
            return Math.floor(Math.random() * 2) + 1; // Get random value between 1 to 3
        };

        ctrl.getResponseText = function (result) {
            switch (result) {
                case Constants.RPSGameResult.PlayerOne:
                    return 'Player One Wins';
                case Constants.RPSGameResult.PlayerTwo:
                    return 'Player Two Wins';
                case Constants.RPSGameResult.Draw:
                    return 'Its a Draw';
            }
        }

        ctrl.updateScores = function (result) {
            switch (Constants.RPSGameResult[result]) {
                case Constants.RPSGameResult.PlayerOne:
                    ctrl.scores.playerOneScore++;
                    SessionStorageService.saveScores(ctrl.scores.playerOneScore, ctrl.scores.playerTwoScore);
                    break;
                case Constants.RPSGameResult.PlayerTwo:
                    ctrl.scores.playerTwoScore++;
                    SessionStorageService.saveScores(ctrl.scores.playerOneScore, ctrl.scores.playerTwoScore);
                    break;
                default:
                    return;
            }
        }

        ctrl.$onInit = function () {
            ctrl.currentGameTypeSelection = "PVC"; // Player vs Computer is the default option
            ctrl.lastPlayedGameType = "PVC";
            ctrl.scores = SessionStorageService.getScores();
            // alert(ctrl.currentSelection);
            // ctrl.playerOneRPSSelection = null;
            //alert(Constants.RPSGameSelectedOption.Rock);
        }
    }

    angular.module('gameApp').component('game', {
        templateUrl: '../../Content/views/game/game.html',
        controller: GameController
    });
})(window.angular);