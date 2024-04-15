/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	let	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

    $(document).ready(function() {
        $(window).scroll(function() {
            // Récupérer la position du haut de la fenêtre et la hauteur de la fenêtre
            let windowTopPosition = $(window).scrollTop();
            let windowHeight = $(window).height();

            // Récupérer la position de la section "header"
            let headerPosition = $('#header').offset().top;
            let headerHeight = $('#header').outerHeight();

            // Calculer la position du bas de la section "header"
            let headerBottomPosition = headerPosition + headerHeight;

            // Vérifier si la section "header" est visible à l'écran
            if (windowTopPosition > headerBottomPosition) {
                // Si la section "header" n'est pas visible, afficher le menu burger
                $('#burger-wrapper').fadeIn();
            } else {
                // Sinon, cacher le menu burger
                $('#burger-wrapper').fadeOut();
                if($('#burger-menu').is(':visible')) {
                    $('#burger-icon').click();
                }
            }
        });

        $('#burger-icon').on("click", function(){
            if($('#burger-menu').css('display') === 'none'){
                $('#burger-menu').css('display', 'block');
                $('#burger-wrapper').css('width', '15rem');
                $('#burger-wrapper').css('background-color', '#333');
            } else {
                $('#burger-menu').css('display','none');
                $('#burger-wrapper').css('width', '5rem');
                $('#burger-wrapper').css('background-color', 'transparent');
            }
        });

        $(document).mouseup(function(e) {
            const aside = $("#burger-wrapper");
            const menuAside = $("#burger-menu");
            const burgerButton = $('#burger-icon');
            if (aside.css('background-color') !== 'transparent' && menuAside.is(":visible")) {
            // Si la cible du clic n'est pas l'aside et n'est pas un descendant de l'aside, alors on ferme l'aside
                if (!aside.is(e.target) && aside.has(e.target).length === 0) {
                    burgerButton.click();
                }
            }
        });


});

})(jQuery);
