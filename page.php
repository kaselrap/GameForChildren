<?php
header('Content-Type: application/json');

include 'functions.php';
if ( isset ( $_POST ) && !empty( $_POST ) ) {
	$data = $_POST;
	$errors = array();

	if ( ! isset( $data['functionname'] ) ) {
		$errors[] = 'No function name!';
	}
	if ( ! isset( $data['params'] ) ) {
		$errors[] = 'No parametres!';
	}
	if ( empty( $errors ) ) {
		switch ($data['functionname']) {
			///////////////////////////////////
			//Добавление пользователя
			///////////////////////////////////
			case 'add_user':
				if ( isset ( $data['params']['login'] ) ) {
					if ( add_user($data['login']) ) {
						echo 'User was registered';
					} 
					else {
						echo 'Error user registration';
					}
				}
				break;
			////////////////////////////////////
			//Изменение параметров пользователя
			///////////////////////////////////
			case 'set_params_user':
				if ( isset ( $data['params']['id'] ) ) {
					$params = array();
					$id = $data['params']['id'];
					foreach ($data['params'] as $key => $value) {
						if ( isset ( $data['params'][$key] ) ) {
							if ( $key != 'id' ) {
								$params[$key] = (int)$value;
							}
						}
					}
					if ( set_params_user($id, $params) ) {
						echo 'data users was changed';
					} else {
						echo 'failure for changed data';
					}
				}
				break;
			//////////////////////////////////////
			//Получение параметров пользователя
			/////////////////////////////////////
			case 'get_params_user':
				if ( isset ( $data['params']['id'] ) ) {
					$user = get_params_user($data['params']['id']);
					echo json_encode($user);
				}
				break;
			//////////////////////////////////////
			//Есть ли такой пользователь
			/////////////////////////////////////
			case 'isUser':
				if ( isset ( $data['params']['login'] ) ) {
					return isUser($data['params']['login']);
				}
				break;
			default:
				echo 'Not found function ' . $data['functionname'];
				break;
		}
	}
}