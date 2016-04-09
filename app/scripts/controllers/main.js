'use strict';

/**
 * @ngdoc function
 * @name tabler.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of tabler
 */
angular.module('tabler')
  .controller('MainCtrl', function($scope) {
    var minNumber = 2;

    $scope.maxNumber = 13;
    $scope.state = 'init';

    $scope.start = function () {
      $scope.x = getRandomInt(minNumber, $scope.maxNumber);
      $scope.y = getRandomInt(minNumber, $scope.maxNumber);
      $scope.state = 'awaitingAnswer';
    };

    $scope.checkAnswer = function (x, y, answer) {
      $scope.isAnswerCorrect = answer === x * y;
      $scope.answer = null;
      $scope.state = 'checkedAnswer.' + ($scope.isAnswerCorrect ? 'correct' : 'incorrect');
    };

    $scope.hasAnswered = function () {
      return $scope.state.indexOf('checkedAnswer') === 0;
    };

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  });
