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
	if ( $user = R::findOne('users', $user_id) ) {
		$data = array();
		foreach ($user as $key => $value) {
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