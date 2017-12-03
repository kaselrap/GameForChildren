<?php

include 'libs/db.php';
if (isset($_POST)) {
	$data = $_POST;
	
	if ( isset( $data['id'] ) && isset( $data['x'] ) && isset( $data['y'] ) ) {
		$id = $data['id'];
		$x = (int)$data['x'];
		$y = (int)$data['y'];
	}
	if ( isset($id) && isset($x) && isset($y)) {
		$is = R::findOne('coordinats', 'ids = ?', array($id));
	}
	if ( $is ) {
		$coordinats = R::load('coordinats', $is->id);
		$coordinats->x = $x;
		$coordinats->y = $y;
		R::store($coordinats);
		echo 'load save';
	} else if ( isset( $data['id'] ) && isset( $data['x'] ) && isset( $data['y'] ) ) {
		$coordinats = R::dispense('coordinats');
		$coordinats->ids = $data['id'];
		$coordinats->x = $data['x'];
		$coordinats->y = $data['y'];
		R::store($coordinats);
		echo 'new save';
	}
}