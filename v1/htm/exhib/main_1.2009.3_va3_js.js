// JavaScript Document

var des1 = "<i><strong>V=A<sup>3</sup></strong></i><br />12 - 21 mai 2009<br />Exposition collective, espace d'exposition SpaceKraft Pompadour, Lyon<br />Installation in situ<br /><br /><img src='../../picts/triangle_black_small.png' />&nbsp;&nbsp;<i>&Eacute;QUILAT&Eacute;RAL</i>, 2009<br />Installation in situ<br />Barre en acier d&eacute;coup&eacute;e sur mesure<br />et encastr&eacute;e d'une extr&eacute;mit&eacute; &agrave; l'autre de l'espace,<br>formant un angle droit entre l'ar&ecirc;te oblique et l'ar&ecirc;te au sol<br />820 x 630 cm";
var des2 = des1;
var des3 = des1;
var des4 = des1;
var des5 = des1;

button= new Image(); button.src="../../picts/triangle_black.jpg"
image1= new Image(); image1.src="../../picts/1.exhibitions/2.2009/3.va3/clemencetorres_exhibitions_va3_1_thumb.png";
image2= new Image(); image2.src="../../picts/1.exhibitions/2.2009/3.va3/clemencetorres_exhibitions_va3_2_thumb.png";
image3= new Image(); image3.src="../../picts/1.exhibitions/2.2009/3.va3/clemencetorres_exhibitions_va3_3_thumb.png";
image4= new Image(); image4.src="../../picts/1.exhibitions/2.2009/3.va3/clemencetorres_exhibitions_va3_4_thumb.png";
image5= new Image(); image5.src="../../picts/1.exhibitions/2.2009/3.va3/clemencetorres_exhibitions_va3_5_thumb.png";

function changeText(idElement){
	document.getElementById('imagedescription').innerHTML =idElement;
}

// <img src="../../picts/triangle_black.jpg"