
// Create New Reservation - takes in JSON input
app.post('/api/new', function(req, res){

	var newreservation = req.body;
	newreservation.routeName = newreservation.name.replace(/\s+/g, '').toLowerCase()

	console.log(newreservation);

	characters.push(newreservation);

	res.json(newreservation);
})

