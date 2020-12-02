	fetch("https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
		"x-rapidapi-key": "6cc200efadmsh4071dc10ae5e35fp1c79d7jsn4bbe7fe630a3"
	}
})
			.then(function (response) {
                return response.json();
            })
			
			.then(function (response) {
                console.log(response);
			})
			
			.catch(err => {
				console.log(err);
			});
