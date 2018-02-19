<?php

include 'libs/db.php';

function add_user ($login) {
	isUser($login);
	$user = R::dispense( 'users' );
    $user->login = $login;
    $user->job = 0;
    $user->education = 0;
    $user->day = 0;
    $user->money = 0;
    $user->studyDistance = 0;
    $user->studyFull = 0;
    $user->studyYourself = 0;
    $user->studyDone = 0;
    $room = R::dispense('room');
    $room->vibro_plate = 0;
    $room->table_PC = 0;
    $room->bed = 0;
    $room->books = 0;
    $room->curtain = 0;
    $room->lamp_table = 0;
    $room->lamp_top = 0;
    $room->poster = 0;
    $room->TV = 0;
    $room->scooter = 0;
    $room->planet_system = 0;
    $room->robot_vacuum_cleaner = 0;
    $room->jetpack = 0;
    $room->wardrobe = 0;
    $room->robot = 0;
    $room->sneakers = 0;
    $room->guitar = 0;
    $room->chair = 0;
    $room->table = 0;
    $room->PC = 0;
    $room->phone = 0;
    $room->paret = 0;
    $room->plate_and_cup = 0;
    $room->cactus = 0;
    $user->room = $room;
    R::store($user);
    return true;
}
function set_params_user ( $user_id, $params = array() ) {
	$data = array();
	if ( !empty( $params ) ) {
		foreach ($params as $key => $value) {
			if ( isset ($params[$key]) ) {
				$data[$key] = (int)$params[$key];
			}
		}
	}
	$user = R::load('users', $user_id);
	foreach ($params as $key => $value) {
		if ( isset ($data[$key]) ) {
			$user->$key = $data[$key];
		}
	}
	R::store($user);
	return true;
}
function get_params_user ( $user_id ) {
	if ( $user = R::findOne('users', 'id = ?', array($user_id)) ) {
		$data = array();
		foreach ($user as $key => $value) {
			$data[$key] = $value;
		}
		return $data;
	}
}
function set_params_room( $room_id, $params = array() ) {
	$data = array();
	if ( !empty( $params ) ) {
		foreach ($params as $key => $value) {
			if ( isset ($params[$key]) ) {
				$data[$key] = (int)$params[$key];
			}
		}
	}
	$room = R::load('room', $room_id);
	foreach ($params as $key => $value) {
		if ( isset ($data[$key]) ) {
			$room->$key = $data[$key];
		}
	}
	R::store($room);
	return true;
}
function get_params_room ( $room_id ) {
	if ( $room = R::findOne('room', 'id = ?', array($room_id)) ) {
		$data = array();
		foreach ($room as $key => $value) {
			$data[$key] = $value;
		}
		return $data;
	}
}
function isUser ( $login ) {
	if ( R::count('users', 'login = ?', array($login)) > 0 ) {
		return false;
	}
	return true;
}
function counting_time_salary ( $education, $speciality, $hours ) {
	$work_json = file_get_contents('http://' . $_SERVER['HTTP_HOST'] . '/lang/ru.json');
	$work = json_decode($work_json,true);

	for ($i=0; $i < 8; $i++) { 
		if( ++$work['work'.$i]['eduction'] == $education && ++$work['work'.$i]['speciality'] == $speciality ) {
			$salary = round((int)$work['work'.$i]['salaryInOur'] * (int)$hours);
		}
	}
	return $salary;	
}