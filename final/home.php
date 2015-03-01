
<!DOCTYPE html>
<html lang="en-US">
<head> 


<title>Keenan Erwin Dot Com</title>
 

<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="waypoints.min.js"></script>   
<script src="keenanerwin.js"></script> 
<script src="gen_validatorv31.js" type="text/javascript"></script>


<link rel="stylesheet" type="text/css" media="screen and (orientation: landscape)" href="http://yui.yahooapis.com/2.9.0/build/reset-fonts-grids/reset-fonts-grids.css">
<link href="http://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="keenanerwin.css">
<link rel="SHORTCUT ICON" href="images/keenanerwin.ico"> 


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="awesomeness">
<meta name="author" content="Keenan Erwin">


</head>




<body>


<div class="background-image"></div>


<div id="lightbox-background" style="position:fixed; background-color:rgba(0,0,0,0.5); width:100%; height:100%; z-index:2; top:0; left:0; background-size: cover;">
	</div>  


<img id="lucy-photo" width="504" src="images/lucy.jpg" alt="Photo of Lucy" /> 


<div class="container">

	<div class="header">
		<h1 class="header-line-1">YOU HAVE ENTERED THE</h1>
		<h1 class="header-line-2">Keenan Erwin dot com</h1>
	</div> 

	<div class="container-2">
		<h2 id="stuff-ive-made">STUFF I'VE MADE</h2>
			<ul class="nav">						
				<li><a id="web" style="display:block;">Web</a>
					<ul id="pure-lonboards-certificates">
						<li><a href="http://www.keenanerwin.com/purelongboards.com/">Pure Longboards (in progress)</a></li> 
						<li><a href="http://www.codepen.io/keenanerwin/">Codepen</a></li>							
						<li><a href="http://www.refsnesdata.no/certification/w3certified.asp?email=keenanerwin@gmail.com">Certificates</a></li>
					</ul>
				</li> 
				<li><a id="baby">Baby</a></li>	
				<li><a id="brand-media">Brand Media</a>
					<ul>  
						<li><a id="saddleback-leather-co" href="http://www.pinterest.com/keenanerwin/stuff-ive-worked-on/">Saddleback Leather Co.</a></li> 
					</ul>
				</li>
			</ul>
		<h2 style="margin-top: 6px;" id="talk-to-me">TALK TO ME</h2>
			<ul class="nav">
				<li><a id="twitter" href="http://twitter.com/mountainbeard">Twitter</a></li> 
				<li><a id="email">Email</a></li> 
			</ul>		
	</div>
	 
	     
	 
	<!-- Email Form -->

	<div id="email-form" style="position:absolute; display: inline-block; left:50%; margin-top:40px; margin-left:-232px; border-width: 2px; border-color: rgb(255, 255, 255); border-style: solid; width: 460px; height: 437px; z-index:4;">
		<div style="margin-top:20px;">
			<form method="POST" name="contactform" action="contact-form-handler.php"> 

				<p class="name-label" style="position: absolute; left: 17px; top: 21px; font-size: 37px; color: rgb(255, 255, 255); line-height: 1.2; letter-spacing: 1.5px;">NAME</p> 
				<input class="name-input" style="position: absolute; right: 20px; border: 0; width: 267px; height: 40px; padding: 0 12px 0; font-size: 27px; line-height: 1.2; text-align: left;" type="text" name="name" tabindex="1">

				<p class="email-label" style="position: absolute; left: 17px; top: 75px; font-size: 37px; color: rgb(255, 255, 255); line-height: 1.2; letter-spacing: 0.9px;">EMAIL</p> <br>
				<input class="email-input" style="position: absolute; top: 74px; left: 149px; border: 0; width: 267px; height: 40px; padding: 0 12px 0; font-size: 27px; line-height: 1.2; text-align: left;" type="text" name="email" tabindex="2"> <br>

				<p class="message-label" style="position: absolute; top: 129px; left: 17px; font-size: 37px; color: rgb(255, 255, 255); line-height: 1.2; letter-spacing: 3.2px;">MESSAGE</p> <br>

				<div style="position: absolute; top: 129px; left:232px; background:white; height:39px; width:6px;"></div>	

				<input id="submit-button" type="submit" style="position: absolute; top: 125px; left: 253px; opacity: 0.7; color:#000000; letter-spacing: 0.2px; background:#ffea00; height:47px; width:187px; border:3px solid #000000; font-size: 32.4px; line-height: 1.2;" value="+          +" tabindex="-1">
				<input id="hidden-submit-button" class="hidden" type="submit" style="position: absolute; top: 125px; left: 253px; color:#000000; background:#ffea00; height:47px; width:187px; border:3px solid #000000; font-size: 32.4px; line-height: 1.2;" value="+ FIRE! +" tabindex="4">
				
				<textarea class="message-input"  style="position: absolute; top: 183px; left: 13px; width: 408px; height: 215px; padding: 12px; font-size: 18px; line-height: 1.2; resize: none;" name="message" tabindex="3"></textarea>
			</form>
		</div>
	</div>

	<a class="photo-credit" href="http://www.nilssonlee.se/">Photo by Jonas Nilsson Lee</a>
		
	</div>


	<script>
		var frmvalidator  = new Validator("contactform");
		frmvalidator.addValidation("name","req","Whoops. Can I have your name, please?"); 
		frmvalidator.addValidation("email","req","If you don't give me your email, I can't email you back!"); 
		frmvalidator.addValidation("email","email","lol that's not an email address"); 
	</script>




</body>


</html>