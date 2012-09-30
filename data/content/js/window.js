//Window Controls
	
//Helper function with logic to toggle the action of the maximize 
//button between maximize and restore.
var maximizeWindow = function(event){
	switch(window.frame.state){
		case 'maximized' :
			window.frame.restore();
			$(document.body).removeClass('maximized');
		break;
		
		case 'normal' :
			window.frame.maximize();
			$(document.body).addClass('maximized');
		break;
	};		
};

//Helper function with logic to toggle the action of the fullscreen 
//button between fullscreen and restore.
var fullscreenWindow = function(event){
	switch(window.frame.state){
		case 'fullscreen' :
			window.frame.restore();
			$(document.body).removeClass('fullscreen');
		break;
		
		case 'normal' :
			window.frame.fullscreen();
			$(document.body).addClass('fullscreen');
		break;
	};		
};

//Sets title of the window to the document's <title> tag
$('.app-title .text').text(document.title);

//Moves the window when dragging the custom title bar
$('.title-drag').on('mousedown', function(event){window.frame.drag();});


$('.title-bar').on('dblclick', function(event){maximizeWindow(event)});

//Closes the app and all child windows... for individual windows that are not the main window, call window.frame.hide()
$('.title-bar .close-button').on('click', function(event){window.close();});

//Minimizes the application window when the minimize button is clicked
$('.title-bar .minimize-button').on('click', function(event){window.frame.minimize();});

//Maximizes the application window when the maximize button is clicked
//With the helper function, a CSS class called "maximized" is added to the <body> tag to allow alternative styling
$('.title-bar .maximize-button').on('click', function(event){maximizeWindow(event)});

//On Mac OS, where the fullscreen button is visible, this makes the application window enter fullscreen mode.
//With the helper function, a CSS class called "fullscreen" is added to the <body> tag to allow alternative styling
$('.title-bar .fullscreen-button').on('click', function(event){fullscreenWindow(event)});	

//Shifts the z-index of hovered window controls to make sure the hovered button is always on top.
//Useful for adding glows and effects to window controls.
$('.window-controls .button')
	.on('mouseover', function(event){
		$(this).css('z-index', 2);}
	)
	.on('mouseout', function(event){
		$(this).css('z-index', 0);}
);