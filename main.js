    function User (id, firstName, lastName, age, email) {
          this.id = id;
          this.firstName = firstName;
          this.lastName = lastName;
          this.age = age;
          this.email = email;

          this.autorization = function(auto) { 
          	if (confirm("are you authorized?") == true) {
          			return alert("user is authorized");
          			}else{ 
          			return alert("user is not logged in");
   			}
   		}
   	}
    
	let user = new User(1, "Mirber", "Kozhonberdiev", 20, "Mirbek@mail.ru");
	console.log(user); 
	user.autorization(); 

	
	function Post(id, userId, publication, likes, dateOfDownload){ 
	this.id = id; 
	this.userId = userId; 
	this.publication = publication; 
	this.likes = likes; 
	this.dateOfDownload = dateOfDownload; 

}
	var now = new Date();
	let post = new Post(1, user.id, "picture, my-Self", 15, now);
	console.log(post);

	//передал в конструктор id поста и юзера таким образом связал
	function Comment(postId, userId, longComment, shirtComment) { 
		this.postId = postId;
		this.userId = userId; 
		this.longComment = longComment; 
		this.shirtComment = shirtComment; 
	}
	//в аргументах напрямую указал поле id у post и user
	let comment = new Comment(post.id, user.id, "AAAAAAAA-dddddddddd", "aaaaaaa"); 
	console.log(comment); 

/*	var publication = ""; 
	var likes = parseInt(); 
	*/
	let posts = [post]; 
	console.log(posts);

	/*addPost = function(publication, likes) { 
		alert("What do you want to add publication or likes?"); 
		if (confirm("publication") == true) {
			publication = console.log(promt("write something")); 
			return publication; 
		}else{ 
			(confirm("поставьте лайк" == true)); 
			return likes; 
			
	}*/




	