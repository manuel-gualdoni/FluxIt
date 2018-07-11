angular.module('artistModalModule').controller('ModalDemoCtrl',  ['$uibModal', '$log', '$document', 'artistFactory', function ($uibModal, $log, $document, artistFactory) {
  var $ctrl = this;

  $ctrl.animationsEnabled = true;

  $ctrl.open = function (size, parentSelector, idArtist) {
  	
    $ctrl.artist = artistFactory.get({id: idArtist});
    console.log($ctrl.artist);

    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        artist: function () {
          return $ctrl.artist;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $ctrl.openJson = function (size, parentSelector, idArtist) {
    
    $ctrl.artist = artistFactory.get({id: idArtist});
    console.log($ctrl.artist);

    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalJsonContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        artist: function () {
          return $ctrl.artist;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $ctrl.toggleAnimation = function () {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  };
}
]);

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('artistModalModule').controller('ModalInstanceCtrl', function ($uibModalInstance, artist) {
  var $ctrl = this;
  $ctrl.artist = artist;

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
