angular.module('starter.services', [])

/********************* GETHome Service - START ********************/
.service("GETHome", function($http, $q) {
baseUrl= "http://abc-group.co.za/my_gauteng_app/crud/"//"http://localhost:8080/server/crud/"
   
    function Request() {
        var request = $http({
            url:baseUrl + "homeT.php",
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }            
        });
        return ( request.then( handleSuccess, handleError ) ); 
    }
    function handleError( response ) {    
        // Otherwise, use expected error message.
        return( $q.reject( response ) );        
    }
    function handleSuccess( response ) {
        return( response.data );
    }
    return({
        Request: Request
    });
})
/********************* GETHome Service - END ********************/


/*********************GETNews Service - START ********************/
.service("GETNews", function($http, $q) {
baseUrl= "http://abc-group.co.za/my_gauteng_app/crud/"//"http://localhost:8080/server/crud/"
   
    function Request() {
        var request = $http({
            url:baseUrl + "news.php",
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }            
        });  
        return ( request.then( handleSuccess, handleError ) ); 
    }
    function handleError( response ) {   
        // Otherwise, use expected error message.
        return( $q.reject( response ) );        
    }    
    function handleSuccess( response ) {
        return( response.data );
    }   
    return({
        Request: Request
    });		
})
.service("GETNewsId", function($http, $q) {
baseUrl="http://abc-group.co.za/my_gauteng_app/crud/"//"http://localhost:8080/server/crud/"
   
    function Request(id) {
        var request = $http({
            url:baseUrl + "newsID.php",
            method: 'POST',                       
            data: {
                 'id': id
            },
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }            
        });     
        return ( request.then( handleSuccess, handleError ) ); 
    }   
    function handleError( response ) {          
        // Otherwise, use expected error message.
        return( $q.reject( response ) );        
    }  
    function handleSuccess( response ) {
        return( response.data );
    }
    return({
        Request: Request
    });	
})
/********************* GETNews Service - END ********************/


/********************* GETCampaigns Service - START ********************/
.service("GETCampaigns",function($http,$q){

baseUrl= "http://abc-group.co.za/my_gauteng_app/crud/"//"http://localhost:8080/server/crud/"
   
    function Request() {		 
        var request = $http({
            url:baseUrl + "campaigns.php",
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }            
        });    
        return ( request.then( handleSuccess, handleError ) ); 
    }
    function handleError( response ) {  
        // Otherwise, use expected error message.
        return( $q.reject( response ) );       
    }    
    function handleSuccess( response ) {
        return( response.data );
    }    
    return({
        Request: Request
    });
})
.service("GETCampaignId", function($http, $q) {
baseUrl= "http://abc-group.co.za/my_gauteng_app/crud/"//"http://localhost:8080/server/crud/"
   
    function Request(id) {
        var request = $http({
            url:baseUrl + "campaignsID.php",
            method: 'POST',                       
            data: {
                 'id': id
            },
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }            
        });
        return ( request.then( handleSuccess, handleError ) ); 
    }
    function handleError( response ) {    
        // Otherwise, use expected error message.
        return( $q.reject( response ) );        
    }    
    function handleSuccess( response ) {
        return( response.data );
    }    
    return({
        Request: Request
    });	
})
/********************* GETCampaigns Service - END ********************/


/********************* GETServices Service - START ********************/
.service("GETServices", function($http, $q) {
baseUrl= "http://abc-group.co.za/my_gauteng_app/crud/"//"http://localhost:8080/server/crud/"
   
    function Request() { 
        var request = $http({
            url:baseUrl + "services.php",
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }            
        }); 
        return ( request.then( handleSuccess, handleError ) ); 
    }
    function handleError( response ) {   
        // Otherwise, use expected error message.
        return( $q.reject( response ) );        
    }
    
    function handleSuccess( response ) {
        return( response.data );
    }
    
    return({
        Request: Request
    });
})
/********************* GETServices Service - END ********************/

/*
.service("GETEGov", function($http, $q) {
baseUrl= "http://abc-group.co.za/my_gauteng_app/crud/"//"http://localhost:8080/server/crud/"
   
    function Request() {
  
		 
        var request = $http({
            url:baseUrl + "DisplayEgov.php",
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }            
        });
		
        
        return ( request.then( handleSuccess, handleError ) ); 
    }
	
    
    function handleError( response ) {
            
        // Otherwise, use expected error message.
        return( $q.reject( response ) );        

    }
    
    function handleSuccess( response ) {
        return( response.data );
    }
    
    return({
        Request: Request
    });
	
	
})
*/

/********************* GETDepartment Service - START ********************/
.service("GETDepartment", function($http, $q) {
baseUrl= "http://abc-group.co.za/my_gauteng_app/crud/"//"http://localhost:8080/server/crud/"
   
    function Request() { 
        var request = $http({
            url:baseUrl + "department.php",
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }            
        });
        return ( request.then( handleSuccess, handleError ) ); 
    }
    function handleError( response ) {            
        // Otherwise, use expected error message.
        return( $q.reject( response ) );        
    }  
    function handleSuccess( response ) {
        return( response.data );
    }
    return({
        Request: Request
    });
})
.service("GETDepartmentID", function($http, $q) {
baseUrl= "http://abc-group.co.za/my_gauteng_app/crud/"//"http://localhost:8080/server/crud/"
   
    function Request(id) { 
        var request = $http({
            url:baseUrl + "departmentID.php",
            method: 'POST',                       
            data: {
                 'id': id
            },
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }            
        });
        return ( request.then( handleSuccess, handleError ) ); 
    }   
    function handleError( response ) {           
        // Otherwise, use expected error message.
        return( $q.reject( response ) );        
    }   
    function handleSuccess( response ) {
        return( response.data );
    }
    return({
        Request: Request
    });	
})
/********************* GETDepartment Service - END ********************/


/********************* GETGovernment Service - START ********************/
.service("GETGovernment", function($http, $q) {
baseUrl= "http://abc-group.co.za/my_gauteng_app/crud/"//"http://localhost:8080/server/crud/"
   
    function Request() {
        var request = $http({
            url:baseUrl + "government.php",
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }            
        });  
        return ( request.then( handleSuccess, handleError ) ); 
    }
    function handleError( response ) {            
        // Otherwise, use expected error message.
        return( $q.reject( response ) );        
    }  
    function handleSuccess( response ) {
        return( response.data );
    }    
    return({
        Request: Request
    });	
})

.service("GETGovernmentID", function($http, $q) {
baseUrl="http://abc-group.co.za/my_gauteng_app/crud/"//"http://localhost:8080/server/crud/"
   
    function Request(id) {
        var request = $http({
            url:baseUrl + "governmentID.php",
            method: 'POST',                       
            data: {
                 'id': id
            },
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }            
        });
        return ( request.then( handleSuccess, handleError ) ); 
    }
    function handleError( response ) {   
        // Otherwise, use expected error message.
        return( $q.reject( response ) );        
    }
    function handleSuccess( response ) {
        return( response.data );
    }
    return({
        Request: Request
    });
})
/********************* GETGovernment Service - END ********************/


/********************* GETteamGauteng Service - START ********************/
.service("GETteamGauteng",function($http,$q){

baseUrl="http://abc-group.co.za/my_gauteng_app/crud/"//"http://localhost:8080/server/crud/"
   
    function Request() {
        var request = $http({
            url:baseUrl + "teamGauteng.php",
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }            
        });
        return ( request.then( handleSuccess, handleError ) ); 
    }
    function handleError( response ) {            
        // Otherwise, use expected error message.
        return( $q.reject( response ) );        
    } 
    function handleSuccess( response ) {
        return( response.data );
    }    
    return({
        Request: Request
    });	
})
.service("GETteamGautengID", function($http, $q) {
baseUrl= "http://abc-group.co.za/my_gauteng_app/crud/"//"http://localhost:8080/server/crud/"
   
    function Request(id) { 
        var request = $http({
            url:baseUrl + "teamGautengID.php",
            method: 'POST',                       
            data: {
                 'id': id
            },
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }            
        }); 
        return ( request.then( handleSuccess, handleError ) ); 
    }  
    function handleError( response ) {         
        // Otherwise, use expected error message.
        return( $q.reject( response ) );       
    }  
    function handleSuccess( response ) {
        return( response.data );
    }   
    return({
        Request: Request
    });
})
/********************* GETteamGauteng Service - END *********************/


/********************** For MAP - START *************************************/
.service('productService', function() {
 var product = [], addProduct, getProductList, removeProduct;
     addProduct = function(obj) {
        product.push(obj);
     };
     getProductList = function(){
        return product;
     };
     removeProduct = function() {
        product = [];
     };
     return {
        addProduct: addProduct,
        removeProduct: removeProduct,
        getProductList: getProductList
     };
})
/********************** For MAP - END *************************************/

/*.service("Timer", function($http, $q) {
baseUrl= "http://localhost/db/"
   
    function Request(id,status,value,from,to) {
  
		 
        var request = $http({
            url:baseUrl + "Timer.php",
            method: 'POST',                       
            data: {
                 'id': id,
				 'status':status,
				 'value':value,
				 'from':from,
				 'to':to
            },
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }            
        });
		
        
        return ( request.then( handleSuccess, handleError ) ); 
    }
    
    function handleError( response ) {
            
        // Otherwise, use expected error message.
        return( $q.reject( response ) );        

    }
    
    function handleSuccess( response ) {
        return( response.data );
    }
    
    return({
        Request: Request
    });
	
	
})*/

/************************************ FOR SQLITE DATABASE - START *********************************/
.constant('DB_CONFIG', {
	name: 'DB',
	tables: [
		{
			name: 'contact',
			columns: [
				{ name: 'id', type: 'integer primary key autoincrement' },
				{ name: 'firstName', type: 'text' },
				{ name: 'lastName', type: 'text' },
				{ name: 'middleName', type: 'text' },                    
				{ name: 'title', type: 'text' },
				{ name: 'company', type: 'text' },
				{ name: 'phone', type: 'text' },
				{ name: 'email', type: 'text' },
				{ name: 'address', type: 'text' },
				{ name: 'city', type: 'text' },
				{ name: 'state', type: 'text' },
				{ name: 'zip', type: 'text' }
			]
		}
	]
})

.factory('DB', function($q, DB_CONFIG) {
    var self = this;
    self.db = null;
    self.init = function() {
        if (window && window.sqlitePlugin) { self.db = window.sqlitePlugin.openDatabase({name: DB_CONFIG.name}); }
        else { self.db = window.openDatabase(DB_CONFIG.name, '1.0', 'database', -1); }
        angular.forEach(DB_CONFIG.tables, function(table) {
            var columns = [];
            angular.forEach(table.columns, function(column) {
                columns.push(column.name + ' ' + column.type);
            });
            var query = 'CREATE TABLE IF NOT EXISTS ' + table.name + ' (' + columns.join(',') + ')';
            self.query(query);
        });
    };
    self.query = function(query, bindings) {
        bindings = typeof bindings !== 'undefined' ? bindings : [];
        var deferred = $q.defer();
        if (!self.db) { self.init(); }
        self.db.transaction(function(transaction) {
            transaction.executeSql(query, bindings, function(transaction, result) {
                deferred.resolve(result);
            }, function(transaction, error) {
                deferred.reject(error);
            });
        });
        return deferred.promise;
    };
    self.fetchAll = function(result) {
        var output = [];
        for (var i = 0; i < result.rows.length; i++) {
            output.push(result.rows.item(i));
        }
        return output;
    };
    self.fetch = function(result) {
        return result.rows.item(0);
    };
    return self;
})
// Methods to interact with a table
.factory('Table', function(DB) {
    var self = this;
    self.getAll = function(tableName) {
        var query = 'SELECT * FROM ' + tableName;
        return DB.query(query).then(function(result){ return DB.fetchAll(result); });
    };
    self.getAllOrderedByColumn = function(tableName, columnName, descending) {
        var query = 'SELECT * FROM ' + tableName + ' ORDER BY ' + columnName
        if (descending) { query = query + ' DESC' }
        return DB.query(query).then(function(result){ return DB.fetchAll(result); });
    };
    self.getById = function(tableName, idColumnName, id) {
        var sql = "SELECT * FROM " + tableName + " WHERE " + idColumnName + " = ?";
        return DB.query(sql, [id])
        .then(function(result){
            if (result.rows.length > 0) {
                return DB.fetchAll(result);
            }
            else {
                return null;
            }
        });
    };
    self.getByQuery = function(query) {
        return DB.query(query)
        .then(function(result){
            if (result.rows.length > 0) {
                return DB.fetchAll(result);
            }
            else {
                return null;
            }
        });
    };
    self.create = function(obj) {
        var sql = obj.getInsertStatement();
        var params = obj.getInsertParams();
        return DB.query(sql, params)
        .then(function(result) { return result; });
    }
    self.deleteById = function(tableName, idColumnName, id) {
        var sql = "DELETE FROM " + tableName + " WHERE " + idColumnName + " = ?";
        return DB.query(sql, [id])
        .then(function(result){ return result; });
    }
    self.update = function(obj) {
        var sql = obj.getUpdateStatement();
        var params = obj.getUpdateParams();
        return DB.query(sql, params)
        .then(function(result) { return result; });
    }
    self.delete = function(obj)
    {
        var sql = obj.getDeleteStatement();
        return DB.query(sql)
        .then(function(result){ });
    }
    self.executeSqlStatement = function(sql) {
        return DB.query(sql)
        .then(function(result){ return result; });
    }
    return self;
})
/************************************ FOR SQLITE DATABASE - END *********************************/