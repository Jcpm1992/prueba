/*global QUnit*/

sap.ui.define([
	"prueba/prueba/controller/prueba.controller"
], function (Controller) {
	"use strict";

	QUnit.module("prueba Controller");

	QUnit.test("I should test the prueba controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});