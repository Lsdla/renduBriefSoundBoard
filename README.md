Je veux que quand je clique sur une touche du clavier, que le son correspondant à ce clavier se mette en marche; comme je n’ai que 9 sons, je vais les relier qu’à 9 touches du clavier qui sont : azertyuio. 
Pour ça je vais chercher le nombre correspondant à mes touches que je vais insérer dans ma balise audio la propriété data-key; je vais utiliser l'événement keydown. J'ajoute une méthode pour jouer l’audio et une autre pour reprendre du début. J'ajoute une fonction qui supprime ma class créee avec le DOM pour lier mon css, à la fin du son la classe css doit se supprimée. Une fois que tout fonction je ferrai le css en créant des classList avec les nom que j’ai déjà dans mon css et pour finir j’ajouterai mon media queri pour la version mobile. 

Pour mon mobile, je mets un clique à la place du keydown ; je change la taille de disques. 
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