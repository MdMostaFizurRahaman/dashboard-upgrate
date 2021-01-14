$(document).ready(function () {
	// js for balances__item btn
	$(".balances__item").click(function () {
		$(this).toggleClass("balances__item_design");
	});
	// container full/short on click function
	// $(".balances__item").click(function () {
	// 	var columns_container = $(".dynamic-columns");
	// 	if (!columns_container.hasClass("expanded")) {
	// 		$(".balances_chart_toggle").removeClass("col-lg-9");
	// 		$(".balances_chart_toggle").addClass("col-lg-7 offset-lg-2");
	// 		$(".household__toggle").removeClass("col-lg-9");
	// 		$(".household__toggle").addClass("col-lg-7 offset-lg-2");
	// 		$(".balances_chart_toggle_combo").removeClass("col-lg-12");
	// 		$(".balances_chart_toggle_combo").addClass("col-lg-10 offset-lg-2");
	// 		// card text alignment
	// 		$(".single__wizards span.h6").removeClass("align-self-end");
	// 		$(".single__wizards span.h6").addClass("align-self-center");
	// 		columns_container.toggleClass("expanded");
	// 	} else {
	// 		$(".balances_chart_toggle").removeClass("col-lg-7 offset-lg-2");
	// 		$(".balances_chart_toggle").addClass("col-lg-9");
	// 		$(".household__toggle").removeClass("col-lg-7 offset-lg-2");
	// 		$(".household__toggle").addClass("col-lg-9");
	// 		$(".balances_chart_toggle_combo").removeClass(
	// 			"col-lg-10 offset-lg-2"
	// 		);
	// 		$(".balances_chart_toggle_combo").addClass("col-lg-12");
	// 		// card text alignment
	// 		$(".single__wizards span.h6").addClass("align-self-end");
	// 		$(".single__wizards span.h6").removeClass("align-self-center");
	// 		columns_container.toggleClass("expanded");
	// 	}
	// });

	// setting__tools_area hide / show
	$(".first_menu").click(function () {
		let setting__tools_area = $(".setting__tools_area");
		setting__tools_area.addClass("visible");
		setting__tools_area.removeClass("invisible");
		document.querySelector('.first_menu img').src = "../../../assets/images/png/dashboard/dashboard-toggle_white.png";
	});
	$(".second_menu").click(function () {
		let setting__tools_area = $(".setting__tools_area");
		setting__tools_area.addClass("invisible");
		setting__tools_area.removeClass("visible");
		document.querySelector('.first_menu img').src = "../../../assets/images/png/dashboard/dashboard-toggle_dark.png";
	});

	// datepicker js one

	$input1 = $(".select_date1");
	var options = {
		format: "mm/dd/yyyy",
		container: "#custom__pos_1",
		todayHighlight: true,
		autoclose: true,
		orientation: "bottom",
	};
	$input1.datepicker(options);
	$input1.data("datepicker").hide = function () {};
	$input1.datepicker("show");

	// datepicker js two

	$input2 = $(".select_date2");
	var options2 = {
		format: "mm/dd/yyyy",
		container: "#custom__pos_2",
		todayHighlight: true,
		autoclose: true,
		orientation: "bottom",
	};
	$input2.datepicker(options2);
	$input2.data("datepicker").hide = function () {};
	$input2.datepicker("show");

	// datepicker js three

	$input3 = $(".select_date3");
	var options3 = {
		format: "mm/dd/yyyy",
		container: "#custom__pos_3",
		todayHighlight: true,
		autoclose: true,
		orientation: "bottom",
	};
	$input3.datepicker(options3);
	$input3.data("datepicker").hide = function () {};
	$input3.datepicker("show");

	// datepicker js 4

	$input4 = $(".select_date4");
	var options4 = {
		format: "mm/dd/yyyy",
		container: "#custom__pos_4",
		todayHighlight: true,
		autoclose: true,
		orientation: "bottom",
	};
	$input4.datepicker(options4);
	$input4.data("datepicker").hide = function () {};
	$input4.datepicker("show");

	// datepicker js 5

	$input5 = $(".select_date5");
	var options5 = {
		format: "mm/dd/yyyy",
		container: "#custom__pos_5",
		todayHighlight: true,
		autoclose: true,
		orientation: "bottom",
	};
	$input5.datepicker(options5);
	$input5.data("datepicker").hide = function () {};
	$input5.datepicker("show");

	// datepicker js 6

	$input6 = $(".select_date6");
	var options6 = {
		format: "mm/dd/yyyy",
		container: "#custom__pos_6",
		todayHighlight: true,
		autoclose: true,
		orientation: "bottom",
	};
	$input6.datepicker(options6);
	$input6.data("datepicker").hide = function () {};
	$input6.datepicker("show");

	// datepicker js 7

	$input7 = $(".select_date7");
	var options7 = {
		format: "mm/dd/yyyy",
		container: "#custom__pos_7",
		todayHighlight: true,
		autoclose: true,
		orientation: "bottom",
	};
	$input7.datepicker(options7);
	$input7.data("datepicker").hide = function () {};
	$input7.datepicker("show");

	// datepicker js 8

	$input8 = $(".select_date8");
	var options8 = {
		format: "mm/dd/yyyy",
		container: "#custom__pos_8",
		todayHighlight: true,
		autoclose: true,
		orientation: "bottom",
	};
	$input8.datepicker(options8);
	$input8.data("datepicker").hide = function () {};
	$input8.datepicker("show");

	// datepicker js 9

	$input9 = $(".select_date9");
	var options9 = {
		format: "mm/dd/yyyy",
		container: "#custom__pos_9",
		todayHighlight: true,
		autoclose: true,
		orientation: "bottom",
	};
	$input9.datepicker(options9);
	$input9.data("datepicker").hide = function () {};
	$input9.datepicker("show");

	// datepicker js 10

	$input10 = $(".select_date10");
	var options10 = {
		format: "mm/dd/yyyy",
		container: "#custom__pos_10",
		todayHighlight: true,
		autoclose: true,
		orientation: "bottom",
	};
	$input10.datepicker(options10);
	$input10.data("datepicker").hide = function () {};
	$input10.datepicker("show");

	// $("#datetimepicker02").datetimepicker();

	$("ul.legend__buttons li a").on("click", function (e) {
		e.preventDefault();
	});
	$("ul.legend__buttons li").on("click", function () {
		$(this).parent().find("li.active").removeClass("active");
		$(this).addClass("active");
	});
});



var marker = document.querySelector('#marker')
var item = document.querySelectorAll('.item')

var legendBtnItem = document.querySelectorAll('.legend__buttons .item')
var legendMarker = document.querySelector('#legendMarker')

const indicator = e => {
	marker.style.left = e.offsetLeft + "px"
	marker.style.width = e.offsetWidth + "px"
}

const indicator2 = e => {
	legendMarker.style.left = e.offsetLeft + "px"
	legendMarker.style.width = e.offsetWidth + "px"
}

item.forEach(link => {
	link.addEventListener('click', (e) => {
		indicator(e.target)
	})
})

legendBtnItem.forEach(link => {
	link.addEventListener('click', (e) => {
		console.log(e)
		indicator2(e.target)
	})
})
