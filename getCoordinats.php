<?php

include 'libs/db.php';

if (isset($_POST)) {
	$data = $_POST;

	if ( isset( $data['id'] ) )
		$coordinats = R::findOne('coordinats', 'ids = ?', array( $data['id'] ));
	if ( isset($coordinats) ) {
		$arr_coordinats = array();
		$arr_coordinats['x'] = $coordinats->x;
		$arr_coordinats['y'] = $coordinats->y;
	}
	echo json_encode($arr_coordinats);
}