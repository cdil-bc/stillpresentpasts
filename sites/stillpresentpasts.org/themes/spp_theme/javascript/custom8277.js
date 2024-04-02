//Javascript for Still Present Pasts UI 
//-------------------------------------------------------------------------------------------------------

$(document).ready(function() {  

// Jquery media - adds player to flvs and mp3s http://malsup.com/jquery/media/
   $.fn.media.defaults.flvPlayer = '/sites/stillpresentpasts.org/themes/spp_theme/mediaplayer/player.swf';
    $.fn.media.defaults.mp3Player = '/sites/stillpresentpasts.org/themes/spp_theme/mediaplayer/player.swf';
    $.fn.media.defaults.autoplay = 1;
    $.fn.media.defaults.bgColor = '#000';
    //$('a.video').media( { width: 500, height: 400 } );
    $('a.media').media( { width: 250, height: 20 } );
    $('a.audio').media( { width: 250, height: 20 } );

// 6.25 tabs From http://jqueryfordesigners.com/jquery-tabs/
$(function () {
    var tabContainers = $('div.field-field-video-embed > div');
    
    $('div.field-field-video-embed a').click(function () {
        tabContainers.hide().filter(this.hash).show();
        
        $('div.field-field-video-embed a').removeClass('selected');
        $(this).addClass('selected');
        
        return false;
    }).filter(':first').click();
  });
     
  

// COMMENTS ----------------------------------------------------------------

    //move add comment field to top
    $("#comments-title").after($('div.box'));	
    
    //hide add comment box if there are comments
     var myFile = document.location.toString();
   if (!myFile.match('comment/reply')) { // the URL contains this string
    if ( $("div.comment").length > 0 ) { 
    $('div.box-inner div.content').addClass("hidden");
    // show the add comments box
 	$("h2.title:contains('Post new comment')").append(' 코멘트 남기').click(function() {
	$('div.box-inner div.content').show('slow');
	$(this).hide();
 	return false;
 	 });
    } else {
    $("h2.title:contains('Post new comment')").hide();
    } 
    }   
     
// KOREAN TRANSLATIONS ----------------------------------------------------------------  
  
    //add Korean text for location http://idesweb.bc.edu/stillpresentpasts/node/add/connection
  $("body.page-node-add-connection legend:contains('Location')").append(' 위치:');  
   
   //Change page titles
   $("#content-header h1:contains('Site map')").append(' 사이트맵'); 
   $("body.page-node-add-story h1:contains('Create Your Story')").after('<h1 class="title">Share Your Story 여러분의 이야기</h1>').remove();
   $("body.page-node-add-connection h1:contains('Create Connection')").after('<h1 class="title">Your Connection</h1>').remove();
   $("body.page-contact h1:contains('Contact')").after('<h1 class="title">Contact Us 관리자 연락하기</h1>').remove();
      $("h2#comments-title:contains('Comments')").append(' 사이트맵코멘트'); 
   
     
// INSTALLATION PAGES ----------------------------------------------------------------

//move "images" link next to description/exerpt links
  $("body.node-type-installation .field-field-imagefile").before($('.slideshow-link'));
  $("body.node-type-installation .field-field-video-embed").before($('.videopages-slideshow-link'));	
  
//move "comments" link next to description/exerpt links
  $("body.node-type-installation .field-field-imagefile").before($('#view-comments'));
  $("body.node-type-installation .field-field-video-embed").before($('#view-comments'));

//Move next/previous links next to page title	
    $("h1.title").after($('a.page-next'));
    $("h1.title").after($('a.page-previous'));
    $(".book-navigation .page-links").remove();
    
// move right sidebar in to the left when there is an embeded movie
   if ($('.field-field-video-embed').length > 0) {
   $(".node-type-installation #sidebar-right").css("margin-left","550px");
    }	
      
// TWEAKS TO PARTICULAR PAGES ----------------------------------------------------------------

// move frontpage slideshow from bottom of the page to within the main body
    $("body.front img.placeholder").remove(); //remove the default image placeholder	
    $("body.front #slideshow-images img").show(); //show the images, which are hidden in css in case js is turned off
	$("body.front div#slideshow-placeholder").prepend($('#slideshow_container')); 	
   
//Boodaechigae: special tweaks for page since it has both an image and video  
   var myFile = document.location.toString();
   if (myFile.match('boodaechigae')) { // the URL contains this string
      $(".field-field-imagefile").before($('.slideshow-link'));
   $(".field-field-imagefile").before($('#view-comments'));
   $(".node-type-installation #sidebar-right").css("margin-left","600px");
    }
    
//Boodaechigae: fixes duplicate image link showing up just on boodaechigae installation
  $("body.page-boodaechigae a.slideshow-link").eq(1).remove();

//Gallery Photos: remove unnecessary slideshowlink from Gallery photos page
  $('body.page-gallery a.slideshow-link').remove();

// Node edit forms: collapse all fieldsets by default
	var myFile = document.location.toString();
	if (myFile.match('edit') && myFile.match('node')) { // the URL contains this string
	$("fieldset").addClass('collapsible').addClass('collapsed');
	}	
	
//Connection pages: Replace "your name" with "Submitted by" 
  $("body.node-type-connection .field-field-connectionname .field-label-inline-first:contains('Your Name 이름(선택):')").after('Submitted by  ').remove(); 

// MISC TWEAKS ----------------------------------------------------------------

   //removes "More information about formatting options" from submission forms 
  $("a:contains('More information about formatting options')").remove();	
  
  //remove the word "captcha" since it means nothing to users
  $("legend:contains('CAPTCHA')").remove(); 
  
 // Submission form confirmations: adds links back to originating pages
 if ($('div.messages').length > 0) {
   $("h1:contains('Access denied')").remove();
   $("div#content-area:contains('You are not authorized to access this page.')").remove();
   $("div.messages ul li:contains('Connection')").append(' <a href="http://idesweb.bc.edu/stillpresentpasts/making-connections">Return to Making Connections</a>');
    $("div.messages ul li:contains('Your Story')").append(' When your story has been approved, you can view it on the <a href="http://idesweb.bc.edu/stillpresentpasts/stories">Contributed Stories.</a> page');
   }	

// JQUERY LOCAL SCROLL PLUGIN ----------------------------------------------------------------

  //creates animated scrolling affect with page anchors   
  $.localScroll();
  $.localScroll.hash();

// JQUERY CYCLE PLUGIN (this needs to be at the end of page so as not to conflict with other stuff --------------------------------

// image slideshow
$('#slideshow-images')  
.cycle({ 
    fx:     'fade', 
   speed:  'fast' 
});

//stops frontpage slideshow from running in the background once a user clicks to pop-up an image
$('#slideshow-images a').click(function() {
$('#slideshow-images').cycle('pause');
});

//adds a link to show all excerpts on section pages
$('body.node-type-section span.all_excerpts').click(function() {
$('.field-field-slideshow-text div').clone().appendTo('.field-field-sectionbottom').removeAttr("style").css('width','510px').eq(0).css('margin-top','15px');
$('#slideshow-text').remove();
$('#nav').remove();
$('span.all_excerpts').remove();
}); 

//text slideshow on section pages
$('#slideshow-text')
.after('<div id="nav">') 
.cycle({ 
    fx:      'fade',
   pager:  '#nav',  
   speed:    2000,
   containerResize: 1,
   height: '40px', 
   timeout:  10000 
});

});