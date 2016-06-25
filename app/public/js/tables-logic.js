app.get('/api/:tableData?', function(req, res){

	var chosen = req.params.tableData;

	if(chosen){
		console.log(chosen);

		for (var i=0; i <tableData.length; i++){

			if (chosen == tableData[i].routeName){
				res.json(characters[i]);
				return;
			}
		}

		res.json(false);
	}

	else{
		res.json(tableData);
	}
})