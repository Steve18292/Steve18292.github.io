// JavaScript Document

$ (document).ready(function()
	{
		$(window).scroll(function()
		{
			$('#counter').text($(window).scrollTop());
			$('#backgroundImg').css('top', $(window).scrollTop() * 0.08- 'px');

			if($(window).scrollTop() >=1254)
					{
						$('#facts').css('top', $(window).scrollTop() * 1- 'px');
						$('#end').hide();
					}
			if($(window).scrollTop() >=1250)
					{
						$('#facts').css('top', $(window).scrollTop() * 1- 'px');
						$('#fact1').animate({left:400},1000);
					}
			if($(window).scrollTop() >=1350)
					{
        				$("#fact2").slideDown("slow");
					}
			if($(window).scrollTop() >=2900)
					{
						$('#facts').css('top', $(window).scrollTop() * 1- 'px');
						$('#fact3').slideUp("slow");
					}
			if($(window).scrollTop() >=3800)
					{
						$('#fact4').animate({left:400},2000).fadeOut('slow');
					}
			if($(window).scrollTop() >=3800)
					{
						$('#facts').css('top', $(window).scrollTop() * 1- 'px');
						$('#fact5').animate({left:400},3000);
					}

			if($(window).scrollTop() >=4750)
					{
						$('#facts').css('top', $(window).scrollTop() * 1- 'px');
						$('#fact6').animate({left:400},1500);
					}
			if($(window).scrollTop() >=5700)
					{
						$('#facts').css('top', $(window).scrollTop() * 1- 'px');
						$('#fact7').animate({left:400},1000);
					}
			if($(window).scrollTop() >=6600)
					{
						$('#facts').css('top', $(window).scrollTop() * 1- 'px');
						$('#fact8').animate({left:400},2000);
					}
			if($(window).scrollTop() >=7500)
					{
						$('#facts').css('top', $(window).scrollTop() * 1- 'px');
						$('#fact9').animate({left:400},1000);
					}
			if($(window).scrollTop() >=9300)
					{
						$('#facts').css('top', $(window).scrollTop() * 1- 'px');
						$('#fact10').animate({left:400},2000);
					}
			if($(window).scrollTop() >=10200)
					{
						$('#facts').css('top', $(window).scrollTop() * 1- 'px');
						$('#fact11').animate({left:400},1500);
						$( "#toggle" ).toggle( "slide" );
					}
			if($(window).scrollTop() >=11000)
					{
						$('#facts').css('top', $(window).scrollTop() * 1- 'px');
						$('#fact12').animate({left:-400},4000).fadeIn('slow');
						$('#end').show();
						$("#fact12").slideUp("slow");
					}
			});	
	});
$(document).ready(function(){
		$("#div2").hide();
		$("#buttonMan").click(function(){
			$("#div1").hide();
			$("#div2").fadeIn();
		});
});
$(document).ready(function(){
    	$(".buttonMan").click(function(){
        $("buttonMan").slideUp();
    });
});
$(document).ready(function(){
    $(".btn1").click(function(){
        $("#fact10").slideUp();
    });
    $(".btn2").click(function(){
        $("#fact10").slideDown();
    });
});
