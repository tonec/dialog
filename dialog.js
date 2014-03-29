// ======================================
// Dialog Box
// ======================================

(function ( $ ) {

	$.fn.dialog = function ( content, target, backToElement ) {
		var self = this,
			position = $( 'body' ).scrollTop();

		var dialog = $( '<div id="dialog-wrap" class="dialog-wrap"> \
							<div class="dialog-header clearfix"> \
								<a class="dialog-close button button--event" href="#" title="Close"><span>Close</span></a> \
							</div> \
							<div class="dialog-inner"> \
								<div class="dialog clearfix" id="dialog"> \
									<div class="content"> \
									</div> \
								</div> \
							</div> \
						</div>' );

		dialog.find( '.content' ).append( content  );
		
		openDialog();

		$( 'html, body' ).on( 'click.dialog_close', function ( event ) {
			closeDialog();
			event.stopPropagation();
		});

		function openDialog () {
			$( target ).append( dialog );
			$( '.page .wrapper, .footer' ).hide();
			$( 'body' ).scrollTop( 0 );
		}

		function closeDialog ( ) {
			$( '.page .wrapper, .footer' ).show();
			dialog.remove();

			$( 'html, body' ).stop().animate({
				scrollTop: position
			}, 1 );

			$( 'html, body' ).off( 'click.dialog_close' );
		}
	};
})( jQuery );