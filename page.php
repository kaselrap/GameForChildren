<?php

include 'functions.php';
if ( isset ( $_GET ) && !empty( $_GET ) ) {
	$data = $_GET;
	///////////////////////////////////
	//Добавление пользователя
	///////////////////////////////////
	// if ( isset ( $data['login'] ) ) {
	// 	if ( add_user($data['login']) ) {
	// 		echo 'registered';
	// 	} 
	// 	else {
	// 		echo 'failure for registration';
	// 	}
	// }
	////////////////////////////////////
	//Изменение параметров пользователя
	///////////////////////////////////
	// if ( isset ( $data['id'] ) ) {
	// 	$params = array();
	// 	$id = $data['id'];
	// 	foreach ($data as $key => $value) {
	// 		if ( isset ( $data[$key] ) ) {
	// 			if ( $key != 'id' ) {
	// 				$params[$key] = (int)$data[$key];
	// 			}
	// 		}
	// 	}
	// 	if ( set_params_user($id, $params) ) {
	// 		echo 'data users was changed';
	// 	} else {
	// 		echo 'failure for changed data';
	// 	}
	// }
	//////////////////////////////////////
	//Получение параметров пользователя
	/////////////////////////////////////
	// if ( isset ( $data['id'] ) ) {
	// 	$user = get_params_user($data['id']);
	// 	print_r($user);
	// }
}