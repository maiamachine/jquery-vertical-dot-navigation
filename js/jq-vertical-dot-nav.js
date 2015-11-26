(function ( $ ) {

	var default_options = {
		align : "right", 
		scroll_speed : 1000,
		dot_size: 10,
		dot_style: "circle",
		dot_color: "#fff",
		nav_color: "#666"
	}
 
    $.fn.verticalDotNav = function(options) {

    	$.extend(default_options, options);

    	var nav_height,
    		nav_pos_top, 
    		nav_styles = {},
    		nav = "<ul class='vertical-dot-nav'>",
    		dot_styles = {},
    		sections_arr = [],
    		window_height = $(window).height();

 
        this.each(function(index) {
            var container = $(this),
            	container_offset = container.offset().top;

            sections_arr.push({
            	offset : container_offset
            });
            
            nav += "<li class='dot'></li>";  
        });

        nav += "</ul>";
        
        $("body").append(nav);

        dot_styles["width"] = default_options.dot_size + "px";
       	dot_styles["height"] = default_options.dot_size + "px";
       	dot_styles["border-color"] = default_options.dot_color;

        if(default_options.dot_style === "circle") {
        	dot_styles["border-radius"] = "50%";
        }

        $(".vertical-dot-nav .dot").css(dot_styles);
       
        nav_height = $(".vertical-dot-nav").height();
        nav_pos_top = (window_height/2) - (nav_height/2);
        nav_styles["top"] = nav_pos_top + "px";
        nav_styles["background-color"] = default_options.nav_color;
 
        if(default_options.align === "left") {
        	nav_styles["left"] = 0;
        	nav_styles["border-radius"] = "0 10px 10px 0";
        } else {
        	nav_styles.right = 0;
        	nav_styles["border-radius"] = "10px 0 0 10px";
        }

    	$(".vertical-dot-nav").css(nav_styles);

        $(".vertical-dot-nav .dot").each(function(index){

        	$(this).on("mouseover", function(){
        		$(this).css("background-color", default_options.dot_color);
        	}).on("mouseout", function(){
        		if($(this).hasClass("active")){
        			$(this).css("background-color", default_options.dot_color);
        		} else {
        			$(this).css("background-color", "transparent");
        		}
        		
        	})
        	 
        	 $(this).on("click", function(){

        	 	var target_section = sections_arr[index].offset;

        		$(".vertical-dot-nav .dot").removeClass("active");
        		$(".vertical-dot-nav .dot").css("background-color", "transparent");
        		$(this).addClass("active");
        		$(this).css("background-color", default_options.dot_color);
 	 
        	 	$('html,body').animate({
			        scrollTop: target_section
			    }, default_options.scroll_speed); 	
        	 })
        	 
        })

        return this;
    };

 
}(jQuery));