(function ( $ ) {
 
    $.fn.verticalDotNav = function() {

    	var nav = "<ul class='vertical-dot-nav'>";

 
        this.each(function() {
            var container = $(this);
            var container_offset = container.offset().top;
            container.append( container_offset);
            nav += "<li class='dot'></li>";    
        });

        nav += "</ul>";
        
        $("body").append(nav);

        var nav_height = $("vertical-dot-nav").height();
        console.log(nav_height);
 
        return this;
 
    };

 
}(jQuery));