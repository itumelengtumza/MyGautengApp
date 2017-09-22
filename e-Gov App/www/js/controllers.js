angular.module('starter.controllers', [])

/******************* Home CTRL'S - START **********************/
.controller('HomeCtrl', function($scope,GETHome) {
	
	GETHome.Request()
		.then(function(response){
			$scope.Event=response.records[0].name;
			$scope.Campaigns=response.records[1].name;
			$scope.News=response.records[2].name;
			$scope.Departments=response.records[3].name;
			$scope.Municipalities=response.records[4].name;
			$scope.Buinsess=response.records[5].name;
		},function(err){
	})
})
/******************* Home CTRL'S - END **********************/


/******************* Service CTRL'S - START **********************/
.controller('servicesCtrl', function($scope,GETServices) {
	
	GETServices.Request()
		.then(function(response){
			$scope.Dept=response.records;
		},function(err){
	})
})
/******************* Service CTRL'S - END **********************/


/******************* Map CTRL'S - START **********************/
.controller('MapCtrl', function($scope, /*GETGeo,*/ $state, $cordovaGeolocation, productService, $ionicLoading) {
	/*GETGeo.Request()
		.then(function(response){
			console.log(response)
			$scope.markers=response.records;
		},function(err){
	})
	*/
	
	$scope.lists = ['hospital','library','local_government_office','church','city_hall','courthouse','police',
	'post_office','doctor','embassy', 'school','university'];
	$scope.lists.selectedValue = 'school';
	

	
	var type = '';
	$scope.update = function(selectedItem) {
		$scope.selectedItemValue = selectedItem;
		type = selectedItem;
		mapLoad();
	}
	if (type.length == 0) {
		type = 'school';
	}

var mapLoad = function() {
    var options = {timeout: 10000, enableHighAccuracy: true};
	$ionicLoading.show({
          template: '<p>Loading...</p><ion-spinner icon="android"></ion-spinner>',
        });

    $cordovaGeolocation.getCurrentPosition(options).then(function(position){

        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		
		var addToCart = function(obj) {
		  productService.addProduct(obj);
	    };
		
		var removeFromCart = function(id) {
			productService.removeProduct(id);
		};
		
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

        google.maps.event.addListenerOnce($scope.map, 'idle', function(){

            var marker = new google.maps.Marker({
                 map: $scope.map,
                 animation: google.maps.Animation.DROP,
                 position: latLng,
                 icon:'http://i.imgur.com/fDUI8bZ.png'

            });

            var infoWindow = new google.maps.InfoWindow({
                content: "You Are Here.!"
            });
			
			infoWindow.open($scope.map, marker);
			
			/* Finding nearby places! */
			var request = { 
				location: latLng,
				radius: '500',
				type: type,
				rankby: 'distance'
			};
			
			var service = new google.maps.places.PlacesService($scope.map);
			service.nearbySearch(request, callback);
			
			var nameArray = [];
			function callback (results, status) {
				if (status == google.maps.places.PlacesServiceStatus.OK) {
					var destinationArray = [];
					for (var i = 0; i < results.length; i++) {
					  destinationArray.push(results[i].geometry.location);
					  nameArray.push(results[i].name);
					  // Add the markerto the map
					  var marker = new google.maps.Marker({
						  map: $scope.map,
						  animation: google.maps.Animation.DROP,
						  position: results[i].geometry.location
					  });
					  
					  var infoWindowContent = "<h4>" + results[i].name + "</h4>";          
		 
					  addInfoWindow(marker, infoWindowContent, results[i]);
					}
				removeFromCart();
				
				addToCart({origin:latLng, destinations:destinationArray,name:nameArray});
				}
				if(nameArray.length == 0) {
					removeFromCart();
				}
				$ionicLoading.hide();
			}
			
			
			//var records = $scope.markers;
 			
			function addInfoWindow(marker, message, record) {
 
			  var infoWindow = new google.maps.InfoWindow({
				  content: message
			  });
		 
			  google.maps.event.addListener(marker, 'click', function () {
				  infoWindow.open(map, marker);
			  });
		 
			}
       })
    }, function(error){
		$ionicLoading.hide();
		alert("Could not get location");
         console.log("Could not get location");
});};
mapLoad();
  
})

.controller('MapListCtrl', function($scope, productService) {
	
	var productList = productService.getProductList();
	
	if(productList.length == 0) {
		alert('No Nearby Places Found!');
	}
	else {
	
	

			var service = new google.maps.DistanceMatrixService();
			service.getDistanceMatrix(
			
			  {
				origins: [productList[0].origin],
				destinations: productList[0].destinations,

				  travelMode: 'DRIVING',
				  unitSystem: google.maps.UnitSystem.METRIC,
				  avoidHighways: false,
				  avoidTolls: false

			  }, callback);
			  
			  function callback(response, status) {
			  if (status == 'OK') {
				var origins = response.originAddresses;
				var destinations = response.destinationAddresses;
				$scope.resp = destinations;
				var arr = [];
				for (var i = 0; i < origins.length; i++) {
				  var results = response.rows[i].elements;
				  for (var j = 0; j < results.length; j++) {
					var element = results[j];
					
					arr.push({distance:(element.distance.value/1000).toFixed(2),destination:destinations[j], name:productList[0].name[j]});
					  }
					}
					arr.sort(function(a, b){return a.distance - b.distance});
					$scope.nearby = arr;
			
				  }
				}


	}
})
/******************* Map CTRL'S - END **********************/


/******************* Interact CTRL'S - START **********************/
.controller('addFeedbackCtrl', function($scope, $http, $ionicHistory){
	
	$scope.user = {'name':'', 'email':'', 'comments':''};
	
	$scope.lists = ['Choose Category','Transport','Health','Education','e-Government'];
	$scope.lists.selectedValue = $scope.lists[0];
	
	$scope.selectedClass = "valueNotSelected";
	$scope.update = function(selectedItem) {
		$scope.selectedItemValue = selectedItem;
		$scope.selectedClass = "valueSelected";
		if ($scope.lists.selectedValue == $scope.lists[0]) {
			$scope.selectedClass = "valueNotSelected";
		}			
	}
	
	$scope.resetTextFields = function() { 
		$scope.master = {};
		if ($scope.form) {
		   $scope.form.$setPristine();
		   $scope.form.$setUntouched();
		}
		$scope.user = angular.copy($scope.master);
		$scope.lists.selectedValue = $scope.lists[0];
		$scope.selectedClass = "valueNotSelected";
		$scope.user = {'name':'', 'email':'', 'comments':''};
	}
	
  $scope.addFeedback = function(){
	  if ($scope.user.name.length == 0 || $scope.user.email.length == 0 || $scope.user.comments.length == 0 ||
			$scope.lists.selectedValue == $scope.lists[0])
			{
				alert('Please Enter All Fields!');
			}
		else {
    $http.post("http://abc-group.co.za/my_gauteng_app/crud/insert_feedback.php",
      {
        'name':$scope.user.name,
        'email':$scope.user.email, 
        'category':$scope.lists.selectedValue, 'comments':$scope.user.comments})
      .success(function(data){
        console.log("Feedback successfully sent");
		alert('Feedback successfully sent');
        console.log({
          'name':$scope.user.name,
          'email':$scope.user.email,
          'category':$scope.lists.selectedValue, 'comments':$scope.user.comments});
		  $scope.resetTextFields();
      });
    $ionicHistory.goBack();
  }
  }
})
/******************* Interact CTRL'S - END **********************/


/******************* Government CTRL'S - START **********************/
.controller('governmentCtrl', function($scope,GETGovernment) {
	
	GETGovernment.Request()
		.then(function(response){
			$scope.Gov=response.records;
		},function(err){
	})


})
.controller('governmentIDCtrl', function($scope,GETGovernmentID,$stateParams) {
	$scope.id= $stateParams.id

	GETGovernmentID.Request($scope.id)
		.then(function(response){
			console.log(response)
			$scope.Gov=response.records;
		},function(err){
	})


})
/******************* Government CTRL'S - END **********************/


/******************* TEAMGAUTENG CTRL'S - START *********************/
.controller('teamGautengCtrl', function($scope,GETteamGauteng) {
	
	GETteamGauteng.Request()
		.then(function(response){
		
			$scope.teamGauteng=response.records;
		},function(err){
	})


})
.controller('teamGautengIDCtrl', function($scope,GETteamGautengID,$stateParams) {
	
	$scope.id= $stateParams.id

	GETteamGautengID.Request($scope.id)
		.then(function(response){
			
			$scope.teamGauteng=response.records;
		},function(err){
	})


})
/******************* TEAMGAUTENG CTRL'S - END *********************/

/*display Egov*/
/*.controller('departmentCtrl', function($scope,GETEGov) {
	
	GETEGov.Request()
		.then(function(response){
			console.log(response)
			$scope.Dept=response.records;
		},function(err){
	})


})
*/

/******************* Department CTRL'S - START **********************/
.controller('departmentCtrl', function($scope,GETDepartment) {
	
	GETDepartment.Request()
		.then(function(response){
		
			$scope.Dept=response.records;
		},function(err){
	})


})
.controller('departmentIDCtrl', function($scope,GETDepartmentID,$stateParams) {
	$scope.id= $stateParams.id

	GETDepartmentID.Request($scope.id)
		.then(function(response){
			console.log(response)
			$scope.Dept=response.records;
		},function(err){
	})


})
/******************* Department CTRL'S - END **********************/


/******************* Campaigns CTRL'S - START **********************/
.controller('campaignsCtrl', function($scope,GETCampaigns) {
	
	GETCampaigns.Request()
		.then(function(response){
		
			$scope.News=response.records;
		},function(err){
	})


})
.controller('campaignIDCtrl', function($scope,GETCampaignId,$stateParams) {
	
	$scope.id= $stateParams.id

	GETCampaignId.Request($scope.id)
		.then(function(response){
			
			$scope.News=response.records;
		},function(err){
	})


})
/******************* Campaigns CTRL'S - END **********************/


/******************* News CTRL'S - START **********************/
.controller('newsCtrl', function($scope,GETNews) {
	
	GETNews.Request()
		.then(function(response){
		
			$scope.News=response.records;
		},function(err){
	})


})
.controller('articleCtrl', function($scope,GETNewsId,$stateParams) {
	
	$scope.id= $stateParams.id

	GETNewsId.Request($scope.id)
		.then(function(response){
			
			$scope.News=response.records;
		},function(err){
	})


})
/******************* News CTRL'S - END **********************/


/******************* For sqlite CTRL'S - START **********************/
.controller('ContactsCtrl', function ($scope, $ionicModal, Table) {
	function Contact (o) {
		this.tableName = "contact";
		this.keyFieldName = "id";
		
		this.id = 0;
		this.firstName = "";
		this.lastName = "";
		this.middleName = "";
		this.title = "";
		this.company = "";
		this.phone = "";
		this.email = "";
		this.address = "";
		this.city = "";
		this.state = "";
		this.zip = "";
	 
		this.parseObject = function(o) {
			if (!!o.id) { this.id = o.id; }
			if (!!o.firstName) { this.firstName = o.firstName; }
			if (!!o.lastName) { this.lastName = o.lastName; }
			if (!!o.middleName) { this.middleName = o.middleName; }
			if (!!o.title) { this.title = o.title; }
			if (!!o.company) { this.company = o.company; }
			if (!!o.phone) { this.phone = o.phone; }
			if (!!o.email) { this.email = o.email; }
			if (!!o.address) { this.address = o.address; }
			if (!!o.city) { this.city = o.city; }
			if (!!o.state) { this.state = o.state; }
			if (!!o.zip) { this.zip = o.zip; }
		}
		 this.getInsertStatement = function() {
			return "INSERT INTO " + this.tableName +  
			"(firstName, lastName, middleName, title, company, phone, email, address, city, state, zip)" +
			" Values (? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ?)" ;
		}
		this.getInsertParams = function() {
			return [
			this.firstName,
			this.lastName, 
			this.middleName,
			this.title,
			this.company,
			this.phone,
			this.email,
			this.address,
			this.city,
			this.state,
			this.zip
			];
		}
		this.getUpdateStatement = function() {
			return "UPDATE " + this.tableName + 
			" SET firstName = ? " + 
			", lastName = ? " + 
			", middleName = ? " + 
			", title = ? " +
			", company = ? " +
			", phone = ? " + 
			", email = ? " + 
			", address = ? " + 
			", city = ? " + 
			", state = ? " + 
			", zip = ? " + 
			" WHERE " + this.keyFieldName + " = ? ";
		}
		this.getUpdateParams = function () {
			return [
				this.firstName,
				this.lastName, 
				this.middleName,
				this.title,
				this.company,
				this.phone,
				this.email,
				this.address,
				this.city,
				this.state,
				this.zip,
				this.id
			]; 
		}
		this.getDeleteStatement = function() {
			return "DELETE FROM " + this.tableName + " WHERE " + this.keyFieldName + " = '" + this.id + "' ";
		}
		this.GetDirtyStatement = function() {
			return 'SELECT * FROM ' + this.tableName + ' WHERE IsDirty = 1;'; 
		}
		
		if (!!o) {
			this.parseObject(o);
		}
	}
	
    $scope.Init = function () {
      // Retrieve from Sqlite
      Table.getAll(new Contact().tableName).then(function (contacts) {
        var o = [];
        angular.forEach(contacts, function (contact) {
          o.push(new Contact(contact));
        })
        $scope.contacts = o;
      })
      $ionicModal.fromTemplateUrl('templates/contact-add.html', { 
        scope: $scope, animation: 'slide-in-up'
      }).then(function (modal) {
        $scope.AddModal = modal;
      });
    }
    $scope.remove = function (contact) {
      // Delete from Sqlite
      Table.deleteById(new Contact().tableName, new Contact().keyFieldName, contact.id).then(function (contacts) {
        $scope.contacts.splice($scope.contacts.indexOf(contact), 1);
      });
    };
    $scope.add = function () {
      $scope.newContact = new Contact();
      $scope.AddModal.show();
    };
    $scope.save = function () {
      // Save to Sqlite database:
      Table.create($scope.newContact).then(function (result) {
        if (result) {
          $scope.newContact.id = result.insertId;
          //$scope.contacts.push($scope.newContact);
        }
        $scope.AddModal.hide();
      });
    }
    $scope.Init();
  })
 /******************* For sqlite CTRL'S - END **********************/

