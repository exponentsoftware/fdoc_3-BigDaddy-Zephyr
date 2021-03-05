		const users = [
		{
				_id: 'ab12ex',
				username: 'Alex',
				email: 'alex@alex.com',
				password: '123123',
				createdAt:'17/05/2019 9:00 AM',
				isLoggedIn: false
		},
		{
				_id: 'fg12cy',
				username: 'Asab',
				email: 'asab@asab.com',
				password: '123456',
				createdAt:'17/05/2019 9:30 AM',
				isLoggedIn: true
		},
		{
				_id: 'zwf8md',
				username: 'Brook',
				email: 'brook@brook.com',
				password: '123111',
				createdAt:'17/05/2019 9:45 AM',
				isLoggedIn: true
		},
		{
				_id: 'eefamr',
				username: 'Martha',
				email: 'martha@martha.com',
				password: '123222',
				createdAt:'17/05/2019 9:50 AM',
				isLoggedIn: false
		},
		{
				_id: 'ghderc',
				username: 'Thomas',
				email: 'thomas@thomas.com',
				password: '123333',
				createdAt:'17/05/2019 10:00 AM',
				isLoggedIn: false
		}
		];

		const products = [
	{
		_id: 'eedfcf',
		name: 'mobile phone',
		description: 'Huawei Honor',
		price: 200,
		ratings: [
			{ userId: 'fg12cy', rate: 5 },
			{ userId: 'zwf8md', rate: 4.5 }
		],
		likes: []
	},
	{
		_id: 'aegfal',
		name: 'Laptop',
		description: 'MacPro: System Darwin',
		price: 2500,
		ratings: [],
		likes: ['fg12cy']
	},
	{
		_id: 'hedfcg',
		name: 'TV',
		description: 'Smart TV:Procaster',
		price: 400,
		ratings: [{ userId: 'fg12cy', rate: 5 }],
		likes: ['fg12cy']
	}
];



function addUser(user){

	for(var i=0;i<users.length;i++){

		if(users[i].username.toLowerCase()==user.username.toLowerCase()){
			return "Username already exists"
		}
	}
	users.push(user);
	return "User added"

}

// console.log(users)

function signIn(user){

for(var i=0;i<users.length;i++){
if(users[i].username.toLowerCase()==user.username.toLowerCase()){
			if(users[i].password==user.password){

				return "Signed In";
			}
			else return "incorrect password"
		}
	
}
return "username incorrect"
}


function rateProduct(rating){
for(var i=0;i<products.length;i++){
	if(products[i].name.toLowerCase()==rating.name.toLowerCase()){
		products[i].ratings.push(rating.rating)
	}


}
}
// rateProduct(rating);
// console.log(products);
// console.log(products[1].ratings)
var productname="laptop";
var name="Anuj";

function averageRating(name){
	var sum=0;
for(var i=0;i<products.length;i++){
	if(products[i].name.toLowerCase()==productname.toLowerCase()){
		for(var j=0;j<products[i].ratings.length;j++){
			sum=sum+products[i].ratings[j].rate;
		}
		console.log(sum/products[i].ratings.length);
	}
}
}


function likeProduct(name, productname){

for(var i=0;i<products.length;i++){
	if(products[i].name.toLowerCase()==productname.toLowerCase()){
		for(var j=0;j<products[i].likes.length;j++){
			
				if(products[i].likes[j].toLowerCase()==name.toLowerCase()){

				console.log("Product Unliked");

			}
			
	}console.log("Product Liked");
			
	}


}

}

(likeProduct(name,productname));
// console.log(products[2].ratings[0].rate);
// averageRating(productname)
var user={
		_id: 'hexvwf',
		username: 'Anuj',
		email: 'asab@asab.com',
		password: '123456',
		createdAt:'17/05/2019 9:30 AM',
		isLoggedIn: true
	};
// console.log(addUser(user))
// console.log(signIn(user))










// console.log(users[0].username);