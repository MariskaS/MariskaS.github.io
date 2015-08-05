﻿$(function () {

	var router = new kendo.Router(); //router - маршрутизатор(управляет маршрутами приложения)

	router.route("/thanks", function () {
		$.ajax({
			url: "template/thanks/thanks.html",
			success: function (data) {
				// hide preloader
				// render content

				var thanks = new kendo.View(
					data, { model: kendo.observable({ foo: "Благодарности" }) });

				$("#view").html(thanks.render())
			},
			error: function () {
				// hide preloader
				// show error
			}
		});
	});

	router.route("/news", function () {
		$.ajax({
			url: "template/news/news.html",
			success: function (data) {
				// hide preloader
				// render content

				var news = new kendo.View(
					data, { model: kendo.observable({ foo: "Новости" }) });

				$("#view").html(news.render())
			},
			error: function () {
				// hide preloader
				// show error
			}
		});
	});

	router.route("/events", function () {
		$.ajax({
			url: "template/events/events.html",
			success: function (data) {
				// hide preloader
				// render content

				var events = new kendo.View(
					data, { model: kendo.observable({ foo: "Мероприятия" }) });

				$("#view").html(events.render())
			},
			error: function () {
				// hide preloader
				// show error
			}
		});
	});

	router.route("/what_to_do", function () {
		$.ajax({
			url: "template/what_to_do/what_to_do.html",
			success: function (data) {
				// hide preloader
				// render content

				var whatToDo = new kendo.View(
					data, { model: kendo.observable({ foo: "Что сделанно" }) });

				$("#view").html(whatToDo.render())
			},
			error: function () {
				// hide preloader
				// show error
			}
		});
	});

	router.route("/reports", function () {
		$.ajax({
			url: "template/reports/reports.html",
			success: function (data) {
				// hide preloader
				// render content

				var reports = new kendo.View(
					data, { model: kendo.observable({ foo: "Отчеты" }) });

				$("#view").html(reports.render())
			},
			error: function () {
				// hide preloader
				// show error
			}
		});
	});

	router.route("/directory", function () {
		$.ajax({
			url: "template/directory/directory.html",
			success: function (data) {
				// hide preloader
				// render content

				var directory = new kendo.View(
					data, { model: kendo.observable({ foo: "Справочник" }) });

				$("#view").html(directory.render())
			},
			error: function () {
				// hide preloader
				// show error
			}
		});
	});


	router.start();

	$("#thanks").click(function (e) {
		e.preventDefault();
		router.navigate("/thanks");
	});

	$("#news").click(function (e) {
		e.preventDefault();
		router.navigate("/news");
	});

	$("#events").click(function (e) {
		e.preventDefault();
		router.navigate("/events");
	});

	$("#whatToDo").click(function (e) {
		e.preventDefault();
		router.navigate("/what_to_do");
	});

	$("#reports").click(function (e) {
		e.preventDefault();
		router.navigate("/reports");
	});

	$("#directory").click(function (e) {
		e.preventDefault();
		router.navigate("/directory");
	});
});