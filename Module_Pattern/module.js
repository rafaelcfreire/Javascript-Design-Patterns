var myNamespace = ( function(){
	var myPrivateVar, myPrivateMethod;

	myPrivateVar = 0;

	myPrivateMethod = function(foo) {
		console.log(foo);
	};

	return {
		myPublicVar: ++myPrivateVar,

		myPublicFunction: function(bar){
			myPrivateVar++;
			myPrivateMethod(bar);
		}
	};
})();

myNamespace.myPublicFunction("Rafael");
console.log(myNamespace.myPublicVar);