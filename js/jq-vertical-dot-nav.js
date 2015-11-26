(function ( $ ) {
 
    $.fn.verticalDotNav = function() {

    	var sections_arr = [],
    		nav = "<ul class='vertical-dot-nav'>",
    		nav_height = 0,
    		nav_pos_top = 0,
    		window_height = $(window).height();

 
        this.each(function(index) {
            var container = $(this),
            	container_offset = container.offset().top;

            sections_arr.push({
            	offset : container_offset
            });
            
            container.append(container_offset);
            nav += "<li class='dot'></li>";  
        });

        nav += "</ul>";
        
        $("body").append(nav);

        nav_height = $(".vertical-dot-nav").height();
        nav_pos_top = (window_height/2) - (nav_height/2);

        $(".vertical-dot-nav").css("top", nav_pos_top + "px");

        $(".vertical-dot-nav .dot").each(function(index){
        	 
        	 $(this).on("click", function(){
        	 	var target_section = sections_arr[index].offset;
        	 	 
        	 	$('html,body').animate({
			        scrollTop: target_section
			    }, 1000); 	
        	 })
        	 
        })

        return this;
    };

 
}(jQuery));