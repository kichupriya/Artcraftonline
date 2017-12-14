$(function() {
	// solving the active menu problem
	switch (menu) {
	case 'About us':
		$('#about').addclass('active');
		break;
	case 'contact us':
		$('#contact').addclass('active');
		break;

	default:
		$('#home').addclass('active');
		break;
	}	

});