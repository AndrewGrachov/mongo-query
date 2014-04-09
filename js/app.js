$(function() {
	var db = {
			fruits:[
					{name:'Banana', price:20,redundantField:'ololo'},
					{name:'Apple', price:10,tags:['Africa','Turkey']},
					{name:'Orange', price:20},
					{name:'Pineapple', price:20},
					{name: 'Cucumber', price:56, suppliers: [{name:'anonymous',subSuppliers:[{name:'1',address:'blahblah'}]}]}
					],
			beverages:[ {name:'CocaCola',price:15,suppliers:['one','two','three']},
						{name:'MongoCola',price:10,suppliers:['one','two','three','four','five','six']},
						{name:'Pepsi',price:25,suppliers:['one','two','three','four','five']},
						{name: 'BoobCola',price:999,suppliers:['one','two','three']},
						{name: 'ZeroVatkaCola',price:1000,suppliers:['one','two','three'],someArray:['one','two','three']}
					]
		};

	$('#json-tree').JSONView(JSON.stringify(db));



	$("#submit-search-form").submit(function(e) {
		e.preventDefault();
		var searchValue = $("#command-form").val()
		var regex = new RegExp('(^db\..*\..*)',"i");
		if(!regex.test(searchValue)) {
			$("#result").html('Malformed query');
		}
		else {
			$("#result").html('');
			var splitted = searchValue.split('.')
			var collection = splitted[1];
			splitted.shift();
			splitted.shift();
			var command = splitted.join(".");
			result = _(db[collection]);

			var queryResult;
			try {
				queryResult = eval("_(db[collection])."+command);
				queryResult = queryResult || {};
				$("#result").JSONView(JSON.stringify(queryResult));
			}
			catch(e) {
				queryResult = e;
				$("#result").html(e);
			}


			$('#json-tree').JSONView(JSON.stringify(db));
		}
		return false;
	});

});