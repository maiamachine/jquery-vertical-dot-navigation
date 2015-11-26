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
    		jq_dot,
    		jq_nav,
    		nav_styles = {},
    		nav = "<ul class='vertical-dot-nav'>",
    		dot_styles = {},
    		sections_arr = [],
    		window_height = $(window).height(),
    		click_scroll = false;

 
        this.each(function(index) {
            var container = $(this),
            	container_offset = container.offset().top;

            sections_arr.push({
            	name : "section-" + index,
            	offset : container_offset
            });

            nav += "<li class='dot' data-target='section-"+index+"'></li>";  
        });

      

        nav += "</ul>";
        
        $("body").append(nav);

    	jq_nav = $(".vertical-dot-nav"),
    	jq_dot = $(".vertical-dot-nav .dot");

        dot_styles["width"] = default_options.dot_size + "px";
       	dot_styles["height"] = default_options.dot_size + "px";
       	dot_styles["border-color"] = default_options.dot_color;

        if(default_options.dot_style === "circle") {
        	dot_styles["border-radius"] = "50%";
        }

        jq_dot.css(dot_styles);
        nav_height = jq_nav.height();
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

    	jq_nav.css(nav_styles);

        jq_dot.each(function(index){

        	$(this).on("mouseover", function(){
        		$(this).css("background-color", default_options.dot_color);
        	}).on("mouseout", function(){
        		if($(this).hasClass("active") === false){
        			$(this).css("background-color", "transparent");
        		} 	
        	})
        	 
        	 $(this).on("click", function(){

        	 	var target_section = sections_arr[index].offset;
        	 	click_scroll = true;
        		jq_dot.removeClass("active");
        		jq_dot.css("background-color", "transparent");
        		$(this).addClass("active");
        		$(this).css("background-color", default_options.dot_color);
 	 
        	 	$('html,body').animate({
			        scrollTop: target_section + 1
			    }, default_options.scroll_speed); 

        	 	setTimeout(function(){ 
        	 		click_scroll = false; 
        	 	}, default_options.scroll_speed);
			    
        	 })
        	 
        })

        var checkScrollPos = function() {

			var scroll_pos = $(window).scrollTop();

	    	for(var i=sections_arr.length - 1; i > -1; i--){
	    		if(sections_arr[i].offset < scroll_pos) {

	    			target_dot = $(".vertical-dot-nav .dot[data-target='"+sections_arr[i].name+"']");
	    			jq_dot.removeClass("active");
	    			jq_dot.css("background-color", "transparent");
	    			target_dot.addClass("active");
	    			target_dot.css("background-color", default_options.dot_color);

	    			return;
	    		}
	    	}
		}
 

        $(window).scroll(function(){

        	if(click_scroll) {
        		return;
        	} else {
        		checkScrollPos();
        	}

        })

        checkScrollPos();

        return this;
    };

 
}(jQuery));