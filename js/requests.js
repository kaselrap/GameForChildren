var host = "http://"+window.location.hostname;
$.ajax({
	type: "POST",
	url: host + "/page.php",
	dataType: 'json',
	data:{
		functionname: 'add_user', // пишешь какую функцию хочешь взять, список находится в page.php(set_params_user, get_params_user, add_user, isUser)
		params: { // это наш масив параметров
			id : 1, //сюда передаешь id пользователя
			study_yourself : 25, 
		}
	},
	success: function(data){
		//делай с данными data хранит в себе уже готовые к использованию объекты
		//console.log(data['id']);
	}
});