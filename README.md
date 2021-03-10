 	Au keyDown, j'aimerais que le son correspondant se mette en marche, je vais relier mes 9 sons aux 9 touches du clavier qui sont : azertyuio. Pour poubvoir le faire, je vais chercher le nombre correspondant à mes touches (avec l'event.keyCode) que je vais insérer dans ma balise audio en utilisant la  propriété data-key. J'ajoute une méthode pour jouer l’audio(play()) et une autre pour reprendre du début(currentTime()). J'ajoute une fonction qui add ma class css dans le DOM au key-down , à la fin du son la classe css doit se supprimer. 

Pour mon mobile, je mets un clique à la place du keydown ; je change la taille des disques pour que ça soit plus agencé. 

voici le plan des fichiers: 

index.html:
Importer les vocaux;
main
section 
div id
bouton id, 
audio data-key,


JS
fonction soundBoard:

écouteur d’événement au keydown
fonction: récupérer l'audio correspondant a chaque key,
		  récupérer le button

mettre une condition qui arrête la function en cas d'une touche différentes de celles séléctionnées.


.curentTime pour reprendre de zéro le son


écouteur d’événement ended pour enlever la classe css à la fin du son




function soundBoardMobile:

écouteur d’événement au click
fonction: récupérer l'audio correspondant a chaque key,
ici, pas besoin de récupérer le button car c'est au click, parcontre il faut récupérer l'id des button pour lier le son à ses id.

mettre une condition qui arrête la function en cas de click sur autre chose que les 9 disques.

.curentTime pour reprendre de zéro le son


écouteur d’événement ended pour enlever la classe css à la fin du son


CSS
Tout en bas
media screen max 500 px
Flex de 0 en haut et en bas et auto des deux cotés
width qui prend 50%
margin-top