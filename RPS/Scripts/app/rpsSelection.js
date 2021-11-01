(function (angular) {
    'use strict';
    function RpsSelectionController(Constants) {
        var ctrl = this;
        ctrl.selectionOptions = Constants.RPSGameSelectedOption;
        ctrl.selectionChange = function (value) {
            if (ctrl.selection == null) {
                ctrl.selection = value;
                ctrl.onSelectionChange({ selectedOption: value });
            }
        };
        ctrl.$onInit = function () {
            // alert(ctrl.selection);
        };
    }

    angular.module('gameApp').component('rpsSelection', {
        templateUrl: '../../Content/views/game/rpsSelection.html',
        controller: RpsSelectionController,
        bindings: {
            selection: '<',
            onSelectionChange: '&'
        }
    });
})(window.angular);