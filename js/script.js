// some scripts

// jquery ready start
$(document).ready(function () {
	// jQuery code

	var html_download = '<a href="http://bootstrap-ecommerce.com/templates.html" class="btn btn-dark rounded-pill" style="font-size:13px; z-index:100; position: fixed; bottom:10px; right:10px;">Download theme</a>';
	$('body').prepend(html_download);


	//////////////////////// Prevent closing from click inside dropdown
	$(document).on('click', '.dropdown-menu', function (e) {
		e.stopPropagation();
	});




	//////////////////////// Bootstrap tooltip
	if ($('[data-toggle="tooltip"]').length > 0) {  // check if element exists
		$('[data-toggle="tooltip"]').tooltip()
	} // end if


	$(".slider-items-owl").owlCarousel({
		items: 6,
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 3,
				nav: false
			},
			1000: {
				items: 5,
				nav: true,
				loop: false
			}
		}
	});


});
// jquery end

