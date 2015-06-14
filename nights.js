/* 
	Provide a set of positive integers (an array of integers). Each integer represent number of 
	nights user has requested at a hotel. If you are a host, you need to design and implement 
	an algorithm to find out the maximum number a nights you can accommodate. The constrain 
	is that you have to reserve at least one day between each request.

	Example:
	1) Input: [1, 2, 3] ===> output: 4, because you will pick 1 and 3
	2) input: [5, 1, 2, 6] ===> output: 11, because you will pick 5 and 6
	3) input: [5, 1, 2, 6, 20, 2] ===> output: 27, because you will pick 5, 2, 20
*/

var bookingNights = [5, 1, 2, 6, 20, 2],
    numberOfBookings = bookingNights.length,
    totalNightsRequested = bookingNights.reduce(function(totalNights, booking) { return totalNights + booking; }),
    // 1 night buffer between bookings to allow for cleaning
    totalNightsRequired = totalNightsRequested + (numberOfBookings - 1),
    // We'll remove non-optimal bookings from this array
    optimalBookings = bookingNights.slice(0);

console.log("totalNightsRequested", totalNightsRequested);
console.log("totalNightsRequired", totalNightsRequired);

// Go from the end of the bookings backwards finding the smallest
// booking we can remove to get us under the nights required number
function removeShortestStay(bookings) {
	
	var shortestStay = Math.min.apply(this, bookings),
	    bookingsShortestStayIndex = bookings.indexOf(shortestStay),
	    optimalShortestStayIndex = optimalBookings.indexOf(shortestStay);
	
	console.log("------------------------------");
	console.log("bookings", bookings);
	console.log("shortestStay", shortestStay);
	console.log("totalNightsRequired - shortestStay", totalNightsRequired - shortestStay);
	console.log("totalNightsRequested", totalNightsRequested);
	
	// Does removing this stay bring us under the number of days we have?
	if (totalNightsRequired - shortestStay <= totalNightsRequested) {
		// YEP! No more recursion
		optimalBookings.splice(optimalShortestStayIndex, 1);
	} else {
		// Nope. Remove this one from the array and remove the next shortest
		totalNightsRequired = totalNightsRequired - shortestStay;
		optimalBookings.splice(optimalShortestStayIndex, 1);
		bookings.splice(bookingsShortestStayIndex, 1);
		removeShortestStay(bookings);
	}
	
}

// We have to include the first day so don't pass it 
// into the recursive function
bookingNights.splice(0, 1);
removeShortestStay(bookingNights);

console.log("Maximum number of booked nights:", optimalBookings.reduce(function(total, night) { return total + night; }));
console.log("Made up of:", optimalBookings);
