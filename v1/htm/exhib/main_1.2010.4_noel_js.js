// JavaScript Document

var des1 = "<i><strong>EXPOSITION DE NO&Euml;L - 4&egrave;me &Eacute;dition </strong></i><br />5 d&eacute;cembre 2010 - 2 janvier 2011<br />Exposition collective<br />Le MAGASIN - Centre National d'Art Contemporain de Grenoble<br><a class='link_light11' href='http://expositiondenoel.com' target='_blank'>expositiondenoel.com</a><br />Sculptures<br /><br /><img src='../../picts/triangle_black_small.png'>&nbsp;&nbsp;<i>FA&Ccedil;ADES</i>, 2010<br />Sculpture<br>Trois verres tremp&eacute;s, main courante en m&eacute;tal<br>70 x 168 x 120 cm<br /><br /><img src='../../picts/triangle_black_small.png'>&nbsp;&nbsp;<i>DEUX-EN-UN</i>, 2009<br />Sculpture<br>Miroir, socle en medium adapt&eacute; &agrave; la ligne de d&eacute;marcation<br>entre la surface miroir et la surface d&eacute;polie<br>110 x 165 x 0,6 cm";
var des2 = "<i><strong>EXPOSITION DE NO&Euml;L - 4&egrave;me &Eacute;dition </strong></i><br />5 d&eacute;cembre 2010 - 2 janvier 2011<br />Exposition collective<br />Le MAGASIN - Centre National d'Art Contemporain de Grenoble<br><a class='link_light11' href='http://expositiondenoel.com' target='_blank'>expositiondenoel.com</a><br />Sculptures<br /><br /><img src='../../picts/triangle_black_small.png'>&nbsp;&nbsp;<i>FA&Ccedil;ADES</i>, 2010<br />Sculpture<br>Trois verres tremp&eacute;s, main courante en m&eacute;tal<br>70 x 168 x 120 cm";
var des3 = des2;
var des4 = "<i><strong>EXPOSITION DE NO&Euml;L - 4&egrave;me &Eacute;dition </strong></i><br />5 d&eacute;cembre 2010 - 2 janvier 2011<br />Exposition collective<br />Le MAGASIN - Centre National d'Art Contemporain de Grenoble<br><a class='link_light11' href='http://expositiondenoel.com' target='_blank'>expositiondenoel.com</a><br />Sculptures<br /><br /><img src='../../picts/triangle_black_small.png'>&nbsp;&nbsp;<i>DEUX-EN-UN</i>, 2009<br />Sculpture<br>Miroir, socle en medium adapt&eacute; &agrave; la ligne de d&eacute;marcation<br>entre la surface miroir et la surface d&eacute;polie<br>110 x 165 x 0,6 cm";
var des5 = des4;

button= new Image(); button.src="../../picts/triangle_black.jpg"
image1= new Image(); image1.src="../../picts/1.exhibitions/1.2010/4.expo_de_noel/clemencetorres_exhibitions_expodenoel_1_thumb.png";
image2= new Image(); image2.src="../../picts/1.exhibitions/1.2010/4.expo_de_noel/clemencetorres_exhibitions_expodenoel_2_thumb.png";
image3= new Image(); image3.src="../../picts/1.exhibitions/1.2010/4.expo_de_noel/clemencetorres_exhibitions_expodenoel_3_thumb.png";
image4= new Image(); image4.src="../../picts/1.exhibitions/1.2010/4.expo_de_noel/clemencetorres_exhibitions_expodenoel_4_thumb.png";
image5= new Image(); image5.src="../../picts/1.exhibitions/1.2010/4.expo_de_noel/clemencetorres_exhibitions_expodenoel_5_thumb.png";

function changeText(idElement){
	document.getElementById('imagedescription').innerHTML =idElement;
}

// <img src="../../picts/triangle_black.jpg"