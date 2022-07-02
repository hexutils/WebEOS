
var myAnim = function() {
    var animWidth, $this=$(this);
    if( $this.parent().hasClass('ui-sortable-helper') ) { 
	return; 
    }
    if( $this.hasClass('wide') ){
	animWidth="50ex";
	if( $this.hasClass('thumb') ) {
	    /// this.src = this.src.replace(".","_thumb.");
	    this.src = this.src.substring( 0, this.src.lastIndexOf(".") ) + "_thumb" + this.src.substring( this.src.lastIndexOf(".") );
	}
    }else{
	animWidth="150ex";
	if( this.src.indexOf("_thumb" ) != -1){
	    $this.addClass('thumb');
	}
	this.src = this.src.replace("_thumb","");
    }
    $this.toggleClass('wide').animate({width: animWidth}, "fast");
}

$(document).ready(function(){
	$("img").click(myAnim);
	$("img").dblclick(myAnim);
	$( "#piccont" ).sortable({
		revert: true
		    });
    });
