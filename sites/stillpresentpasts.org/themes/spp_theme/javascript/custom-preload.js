//UI Javascript that needs to be loaded before Drupal JS files
//-------------------------------------------------------------------------------------------------------

//remove the first image in installation slideshows to prevent duplication
$(document).ready(function() {  

     //create a link to the image galleries by duplicating one of the other images
     //if the installation image field exists
     if ($('div.field-field-imagefile').length > 0) { 
     //clone just the link and the text link
     $(".field-field-imagefile a").clone().appendTo(".node").append("Images 이미지").addClass('slideshow-link');    

     //remove the link that is created from the theme template for field_slideshow_image
     $('a.videopages-slideshow-link').remove();
     }
     
	
     });	 

