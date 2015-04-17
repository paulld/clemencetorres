// JavaScript Document

var des1 = "<table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td class='text_11'><i><strong>DIMENSIONS VARIABLES</strong></i><br />4 juillet / 19 ao&ucirc;t 2012<br>Exposition collective<br>Institut d'art contemporain, Villeurbanne, Rh&ocirc;ne-Alpes<br>Sculpture<br><a class='link_light11' href='http://www.i-art-c.org/fr/insitu_expositions2012-DimensionsVariables.html#expo' target='_blank'>www.i-art-c.org/fr/insitu_expositions2012-DimensionsVariables</a><br><br><img src='../../picts/triangle_black_small.png'>&nbsp;&nbsp;<i>TOISES</i>, 2011<br>Sculpture, 1/5<br>M&eacute;tal, syst&egrave;me t&eacute;l&eacute;scopique<br>Dimension variable selon le d&eacute;ploiement de la <i>Toise</i><br>par rapport &agrave; la hauteur sous plafond (max. 5m)<br>© Blaise Adilon, 2012</td></tr><tr><td class='spacer8'>&nbsp;</td></tr><tr><td class='text_11'><a class='link_light11' href='../../pdf/clemencetorres_communiquedepresse_IAC_Dimensions-variables_FR.pdf' target='_blank'><img src='../../picts/more.jpg' height='20'>&nbsp;&nbsp;T&eacute;l&eacute;charger le communiqu&eacute; de presse</a></td></tr><tr><td class='spacer2'>&nbsp;</td></tr><tr><td class='text_11'><a class='link_light11' href='../../pdf/clemencetorres_guideduvisiteur_IAC_Dimensions-variables.pdf' target='_blank'><img src='../../picts/more.jpg' height='20'>&nbsp;&nbsp;T&eacute;l&eacute;charger le guide du visiteur</a></td></tr></table>";
var des2 = des1;

button= new Image(); button.src="../../picts/triangle_black.jpg";
image1= new Image(); image1.src="../../picts/1.exhibitions/4.2012/3.IAC/clemencetorres_exposition_iac_1.png";
image2= new Image(); image2.src="../../picts/1.exhibitions/4.2012/3.IAC/clemencetorres_exposition_iac_2.png";

function changeText(idElement){
	document.getElementById('imagedescription').innerHTML =idElement;
}

// <img src="../../picts/triangle_black.jpg"