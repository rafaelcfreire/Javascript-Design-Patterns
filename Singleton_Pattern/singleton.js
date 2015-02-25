var mySingleton = (function(){
	var instance;

	function init(){
		function privateMethod(){
			console.log("I am a private");
		}
	
	    var privateVariable = "Im also private";
	 
	    var privateRandomNumber = Math.random();

	    return {
		      // Public methods and variables
		      publicMethod: function () {
		        console.log( "The public can see me!" );
		      },
		 
		      publicProperty: "I am also public",
		 
		      getRandomNumber: function() {
		        return privateRandomNumber;
		      }	    	
	    };
	};

	return {
	    // Get the Singleton instance if one exists
	    // or create one if it doesn't
	    getInstance: function () {
	 
	      if ( !instance ) {
	        instance = init();
	      }
	 
	      return instance;
	    }
	};
})();

var myBadSingleton = (function(){
	var instance;

	function init(){

	};

	return {

	};
})();
