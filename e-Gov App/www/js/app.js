// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform, DB) {
  $ionicPlatform.ready(function() {
   // Initialize SQLite Database
    DB.init();
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })
  
  
/**************************************** HOME VIEW - START ***************************/
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
		controller: 'HomeCtrl'
		
      }
    }
  })
/**************************************** HOME VIEW - END ***************************/  
  
  
/**************************************** SERVICES VIEW - START ***************************/
  .state('app.services', {
      url: '/services',
      views: {
        'menuContent': {
          templateUrl: 'templates/services.html',
		    controller:  'servicesCtrl'
        }
      }
    })
/**************************************** SERVICES VIEW - END ***************************/


/**************************************** INTERACT VIEW - START ***************************/
.state('app.interact', {
      url: '/interact',
      views: {
        'menuContent': {
          templateUrl: 'templates/interact.html',
		    controller:  'addFeedbackCtrl'
        }
      }
    }) 	
/**************************************** INTERACT VIEW - END ***************************/  


/**************************************** JOB VIEW - START ***************************/
 .state('app.job', {
    url: '/job',
    views: {
      'menuContent': {
        templateUrl: 'templates/job.html'
      }
    }
  })
/**************************************** JOB VIEW - END ***************************/


/**************************************** DEPARTMENTS VIEW - START ***************************/
  .state('app.departments', {
      url: '/departments',
      views: {
        'menuContent': {
          templateUrl: 'templates/departments.html',
		  controller: 'departmentCtrl'
		  
		    
        }
      }
    })
	
  .state('app.department', {
    url: "/department/:id",
    views: {
      'menuContent': {
        templateUrl: 'templates/department.html',
		controller: 'departmentIDCtrl'
		
      }
    }
  })
/**************************************** DEPARTMENTS VIEW - END ***************************/
  
  
/**************************************** GOVERNMENT VIEW - START ***************************/  
  .state('app.government', {
      url: '/government',
      views: {
        'menuContent': {
          templateUrl: 'templates/government.html',
		  controller: 'governmentCtrl'
		  
		    
        }
      }
    })
	
  .state('app.government_more', {
    url: "/government_more/:id",
    views: {
      'menuContent': {
        templateUrl: 'templates/government_more.html',
		controller: 'governmentIDCtrl'
		
      }
    }
  }) 
/**************************************** GOVERNMENT VIEW - END ***************************/
  
  
/**************************************** TEAMGAUTENG VIEW - START ***************************/
  .state('app.teamGauteng', {
      url: '/teamGauteng',
      views: {
        'menuContent': {
          templateUrl: 'templates/teamGauteng.html',
		  controller: 'teamGautengCtrl'
		  
		    
        }
      }
    })
	
	  .state('app.teamGautengMore', {
    url: "/teamGautengMore/:id",
    views: {
      'menuContent': {
        templateUrl: 'templates/teamGautengMore.html',
		controller: 'teamGautengIDCtrl'
		
      }
    }
  })
 /***************************** TEAMGAUTENG VIEW - END ************************************/
 
 
 /**************************************** EVENTS VIEW - START ***************************/
  .state('app.events', {
    url: "/government_more/:id",
    views: {
      'menuContent': {
        templateUrl: 'templates/government_more.html',
		controller: 'governmentIDCtrl'
		
      }
    }
  })
/**************************************** EVENTS VIEW - END ***************************/  


/**************************************** NEWS VIEW - START ***************************/
  .state('app.news', {
    url: '/news',
    views: {
      'menuContent': {
        templateUrl: 'templates/news.html',
		controller: 'newsCtrl'
		
      }
    }
  })
  
  .state('app.article1', {
    url: "/article1/:id",
    views: {
      'menuContent': {
        templateUrl: 'templates/article1.html',
		controller: 'articleCtrl'
		
      }
    }
  })
/**************************************** NEWS VIEW - END ***************************/  


/**************************************** CAMPAIGNS VIEW - START ***************************/
  .state('app.campaigns', {
    url: '/campaigns',
    views: {
      'menuContent': {
        templateUrl: 'templates/campaigns.html',
		controller: 'campaignsCtrl'
		
      }
    }
  })
  
   .state('app.latest_campaigns', {
    url: "/latest_campaigns/:id",
    views: {
      'menuContent': {
        templateUrl: 'templates/latest_campaigns.html',
		controller: 'campaignIDCtrl'
		
      }
    }
  })
/**************************************** CAMPAIGNS VIEW - END ***************************/  


/**************************************** MEDIA VIEW - START ***************************/ 
  .state('app.media', {
      url: '/media',
      views: {
        'menuContent': {
          templateUrl: 'templates/media.html'
        }
      }
    })
/**************************************** MEDIA VIEW - END ***************************/	


/**************************************** PREMIEROFFICE VIEW - START ***************************/
  .state('app.PremierOffice', {
      url: '/PremierOffice',
      views: {
        'menuContent': {
          templateUrl: 'templates/PremierOffice.html'
		  //controller: 'departmentCtrl'
        }
      }
    })
/**************************************** PREMIEROFFICE VIEW - END ***************************/


/**************************************** COGTA VIEW - START ***************************/
	.state('app.COGTA', {
      url: '/COGTA',
      views: {
        'menuContent': {
          templateUrl: 'templates/COGTA.html',
		  
        }
      }
    })
/**************************************** COGTA VIEW - END ***************************/


/**************************************** COMMUNITYSAFETY VIEW - START ***************************/
	.state('app.Community_Safety', {
      url: '/Community_Safety',
      views: {
        'menuContent': {
          templateUrl: 'templates/Community_Safety.html',
		          }
      }
    })
/**************************************** COMMUNITYSAFETY VIEW - END ***************************/


/**************************************** E-GOVERNMENT VIEW - START ***************************/
.state('app.e-Government', {
      url: '/e-Government',
      views: {
        'menuContent': {
          templateUrl: 'templates/e-Government.html',
		 
        }
      }
    })
/**************************************** E-GOVERNMENT VIEW - END ***************************/


/**************************************** AGRICULTURE VIEW - START ***************************/
.state('app.Agriculture', {
      url: '/Agriculture',
      views: {
        'menuContent': {
          templateUrl: 'templates/Agriculture.html',
		  
        }
      }
    }) 
/**************************************** AGRICULTURE VIEW - END ***************************/


/**************************************** ECONOMICDEVELOPMENT VIEW - START ***************************/
.state('app.Economic_Development', {
      url: '/Economic_Development',
      views: {
        'menuContent': {
          templateUrl: 'templates/Economic_Development.html',
		          }
      }
    }) 
/**************************************** ECONOMICDEVELOPMENT VIEW - END ***************************/


/**************************************** Education VIEW - START ***************************/
.state('app.Education', {
      url: '/Education',
      views: {
        'menuContent': {
          templateUrl: 'templates/Education.html',
		  
        }
      }
    }) 
/**************************************** Education VIEW - END ***************************/


/**************************************** Health VIEW - START ***************************/
.state('app.Health', {
      url: '/Health',
      views: {
        'menuContent': {
          templateUrl: 'templates/Health.html',
		 
        }
      }
    }) 
/**************************************** Health VIEW - END ***************************/


/**************************************** Human_Settlement VIEW - START ***************************/
.state('app.Human_Settlement', {
      url: '/Human_Settlement',
      views: {
        'menuContent': {
          templateUrl: 'templates/Human_Settlement.html',
		  
        }
      }
    }) 
/**************************************** Human_Settlement VIEW - END ***************************/


/**************************************** Infrastructure_Development VIEW - START ***************************/
.state('app.Infrastructure_Development', {
      url: '/Infrastructure_Development',
      views: {
        'menuContent': {
          templateUrl: 'templates/Infrastructure_Development.html',
		  
        }
      }
    }) 
/**************************************** Infrastructure_Development VIEW - END ***************************/


/**************************************** Roads_Transport VIEW - START ***************************/
.state('app.Roads_Transport', {
      url: '/Roads_Transport',
      views: {
        'menuContent': {
          templateUrl: 'templates/Roads_Transport.html',
		  
        }
      }
    }) 
/**************************************** Roads_Transport VIEW - END ***************************/


/**************************************** Social_Development VIEW - START ***************************/
.state('app.Social_Development', {
      url: '/Social_Development',
      views: {
        'menuContent': {
          templateUrl: 'templates/Social_Development.html',
		          }
      }
    })
/**************************************** Social_Development VIEW - END ***************************/


/**************************************** Sports_Recreation VIEW - START ***************************/
.state('app.Sports_Recreation', {
      url: '/Sports_Recreation',
      views: {
        'menuContent': {
          templateUrl: 'templates/Sports_Recreation.html',
		 
        }
      }
    }) 
/**************************************** Sports_Recreation VIEW - END ***************************/


/**************************************** TREASURY VIEW - START ***************************/
.state('app.Treasury', {
      url: '/Treasury',
      views: {
        'menuContent': {
          templateUrl: 'templates/Treasury.html',
		  
        }
      }
    }) 
/**************************************** TREASURY VIEW - END ***************************/


/**************************************** CONTACT VIEW - START ***************************/
	  .state('app.contact', {
      url: '/contact',
      views: {
        'menuContent': {
          templateUrl: 'templates/contact.html'
        }
      }
    })
/**************************************** CONTACT VIEW - END ***************************/


/**************************************** GEOLOCATION VIEW - START ***************************/
	.state('geolocation', {
		url: '/geolocation',
        templateUrl: 'templates/geolocation.html',
        abstract : true
	})
	.state('geolocation.map', {
		url: '/map',
		views: {
		'map-tab': {
          templateUrl: 'templates/map.html',
		  controller: 'MapCtrl'
        }
      }
	})
	.state('app.types', {
		url: '/types',
		views: {
		'menuContent': {
          templateUrl: 'templates/types.html',
		  controller: 'TypesCtrl'
        }
      }
	})
	.state('geolocation.maplist', {
		url: '/maplist',
		views: {
		'maplist-tab': {
          templateUrl: 'templates/maplist.html',
		  controller: 'MapListCtrl'
        }
      }
	})
/**************************************** GEOLOCATION VIEW - END ***************************/
	.state('app.contacts', {
        url: '/contacts',
        views: {
          'menuContent': {
            templateUrl: 'templates/tab-contacts.html',
            controller: 'ContactsCtrl'
          }
        }
      })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
