
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page:
app.get('/', function(req, res){	
	res.sendFile(path.join(__routing + '/home.html'));
})

app.get('/add', function(req, res){	
	res.sendFile(path.join(__routing+ '/reserve.html'));
})

app.get('/add', function(req, res){	
	res.sendFile(path.join(__routing + '/table-logic.html'));
})

