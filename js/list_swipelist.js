/*global tau */
(function(){

	var page = document.getElementById( "lightsswipe" ),
		listElement = page.getElementsByClassName( "ui-swipelist-list" )[0],
		swipeList;

	/**
	 * pagebeforeshow event handler
	 * Do preparatory works and adds event listeners
	 */
	page.addEventListener( "pagebeforeshow", function() {
		// make SwipeList object
		swipeList = tau.widget.SwipeList( listElement, {
			swipeTarget: "li",
			swipeElement: ".ui-swipelist"
		});
	});

	/**
	 * pagebeforehide event handler
	 * Destroys and removes event listeners
	 */
	page.addEventListener( "pagebeforehide", function() {
		// release object
		swipeList.destroy();
	});
	
    /* ------------------ salon ---------------------------------------- */
    
    var salonSwipe = document.getElementById("salon-swipe");
    
    salonSwipe.addEventListener("swipelist.left", function(evt){
    	requestcommand(436);
    });

    salonSwipe.addEventListener("swipelist.right", function(evt){
    	requestcommand(437);
    });
    
    /* ------------------ enfant1 ---------------------------------------- */
    
    var enfant1Swipe = document.getElementById("enfant1-swipe");
    
    enfant1Swipe.addEventListener("swipelist.left", function(evt){
    	requestcommand(667);
    });

    enfant1Swipe.addEventListener("swipelist.right", function(evt){
    	requestcommand(668);
    });
	
    /* ------------------ enfant2 ---------------------------------------- */
    
    var enfant2Swipe = document.getElementById("enfant2-swipe");
    
    enfant2Swipe.addEventListener("swipelist.left", function(evt){
    	requestcommand(427);
    });

    enfant2Swipe.addEventListener("swipelist.right", function(evt){
    	requestcommand(428);
    });
    
	
}());
