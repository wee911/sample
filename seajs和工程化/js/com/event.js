/**
 * 
 * @authors hunger (hunger@jirengu.com)
 * @date    2015-10-21 17:43:39
 * @version $Id$
 */

define("com/event", function(){

	var EventCenter = (function(){

		var events = {};

		function on(evt, handler){
			events[evt] = events[evt] || [];
			events[evt].push({
				handler: handler
			});
		}

		function fire(evt, args){
			if(!events[evt]){
				return;
			}
			for(var i=0; i<events[evt].length; i++){
				events[evt][i].handler(args);
			}
			
		}

		return {
			on: on,
			fire: fire
		}
	})();


	return EventCenter;
});



	// EventCenter.fire('text-change');
	// EventCenter.on('text-change', function(data){
	// 	console.log(data);
	// });
