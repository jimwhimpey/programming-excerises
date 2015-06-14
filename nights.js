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
    bookingDays = bookingNights.map(function(bookingNight){ return bookingNight + 1; });
    totalDaysRequested = bookingDays.reduce(function(totalDays, bookingDay) { return totalDays + bookingDay; }),
    totalDaysRequired = totalDaysRequested + (numberOfBookings - 1),
    optimalBookings = bookingDays.slice(0);

console.log("totalDaysRequested", totalDaysRequested);
console.log("totalDaysRequired", totalDaysRequired);

// Go from the end of the bookings backwards finding the smallest
// booking we can remove to get us under the days required number

function removeShortestStay(bookings) {
	
	var shortestStay = Math.min.apply(this, bookings),
	    shortestStayIndex = optimalBookings.indexOf(shortestStay);
		
	console.log("shortestStay", shortestStay);
	
	// Does removing this stay bring us under the number of days we have?
	if (totalDaysRequired - shortestStay <= totalDaysRequested) {
		// YEP!
		optimalBookings.splice(shortestStayIndex, 1);
	} else {
		// Nope. Remove this one from the array and remove the next shortest
		optimalBookings.splice(shortestStayIndex, 1);
		removeShortestStay(optimalBookings);
	}
	
	console.log("optimalBookings", optimalBookings);
	
}

// We have to include the first day
bookingDays.splice(0, 1);
removeShortestStay(bookingDays);

// Map back to nights
var optimalBookingNights = optimalBookings.map(function(bookingDay) { return bookingDay - 1; });

console.log("Maximum number of nights:", optimalBookingNights.reduce(function(total, night) { return total + night; }));
console.log("Made up of:", optimalBookingNights);
