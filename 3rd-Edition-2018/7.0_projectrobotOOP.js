// Project: A Robot - Build an Automaton - OOP in ES6
// Village of Meadowfield
// Robots deliver parcels to destinations until done

function makeVillage(name,roads){
	var name = name || 'Meadowfield';
	var roads = roads || [
		"Alice's House-Bob's House",   "Alice's House-Cabin",
		"Alice's House-Post Office",   "Bob's House-Town Hall",
		"Daria's House-Ernie's House", "Daria's House-Town Hall",
		"Ernie's House-Grete's House", "Grete's House-Farm",
		"Grete's House-Shop",          "Marketplace-Farm",
		"Marketplace-Post Office",     "Marketplace-Shop",
		"Marketplace-Town Hall",       "Shop-Town Hall"
	];

	// convert endpoints to places
	// use Map to split each ele into subarr of endpoints
	// use Reduce to flatten
	// use Set to remove duplicates. automatically converts arr into unique set
	// use Array.from(set) to convert back to array
	// or use Set.size() to get length
	var places = Array.from(
		new Set( roads.map(points => points.split('-')).reduce((arr,points) => arr.concat(points),[]) )
	);
	
	// chart visual of village graph

	return new Village(name,places,roads);
}

function makeRobots(arr){
	var arr= arr || ['Claude', 'Maude'];
	return arr.map(bot => new Robot(bot));
}

// classes
class Village {
	constructor(name,places,roads){
		this.name=name;
		this.roads=roads;
		this.places=places;
		this.roadGraph=this.buildGraph(this.roads);
		this.deliveries=this.generateDeliveries(4,this.places);
	}

	buildGraph(roads){
		let graph={};

		// "Alice's House-Bob's House" => ["Alice's House", "Bob's House"]
		let endPoints=roads.map(points => points.split('-'));

		// ['Alice's House', 'Bob's House'] => {"Alice's House": ["Bob's House", "Cabin"]}
		for(let [from,to] of endPoints){
			addPoint(from,to);
			addPoint(to,from);
		}

		function addPoint(beg,end){
			if(graph.hasOwnProperty(beg)) {
				graph[beg].push(end);
			}else{
				graph[beg]=[end];
			}
		}

		return graph;
	}

	generateDeliveries(n,places){
		// Array(3).fill(4); //=> [4,4,4] => ["Alice's House","Cabin","Town Hall"]
		let deliveries=Array(n).fill(places).map(ele => ele[Math.floor(Math.random()*ele.length)]);
		return deliveries;
	}

	findPath(origin,destination){
		let path=[];
		return path;
	}

	findRoute(graph, from, to) { // from eloquent js
		// assumes there is always a path
		// how is this the shortest path rather than the first path
		let paths = [{at: from, route: []}];
		for (let i = 0; i < paths.length; i++) {
			let {at, route} = paths[i];
			for (let place of graph[at]) {
				if (place == to) return route.concat(place);
				if (!paths.some(p => p.at == place)) {
					paths.push({at: place, route: route.concat(place)});
				}
			}
		}
		return null;
	}
}

class Robot {
	constructor(name,type){
		this.name=name;
		this.type={};
		this.location='Post Office';
	}

	getDelivery(deliveries){
		console.log(this.name + ' is leaving ' + this.location + ' delivering to '+ deliveries[0]);
		return deliveries.shift();
	}

	beginDeliveries(village){
		let robot=this;
		let deliveries=village.deliveries; // console.log('\nDeliveries Left: ', deliveries, '\n');

		new Promise(function(resolve, reject) { // get delivery
			console.log(this);
			console.log("***" + robot.name + ' has started deliveries!');
			resolve(robot.getDelivery(deliveries));

		}).then(function(destination) { // find route

			let route= village.findRoute(village.roadGraph,robot.location,destination);
			route.forEach(p => {
				(p === destination )?
			  	console.log(robot.name + ' has reached ' + destination) :
				console.log(robot.name + ' is at ' + p + ' enroute to deliver to ' + destination);
			});
			return destination;

		}).then(function(destination) { // complete delivery

			console.log("***" + robot.name + ' has completed deliveries!');
			robot.location=destination;
			if(deliveries.length>0){ robot.beginDeliveries(village)}

		});
	}
}

// init
(function(){

	let village= makeVillage();
	let robots= makeRobots();

	// start robots
	robots.forEach(bots => bots.beginDeliveries(village));

})();