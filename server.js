//* Test Technique Les copains par Clément


    var fs = require('fs'); 
    var inputRD;


    inputRD = fs.readFileSync('./input5.txt', 'utf8').split('\n'); // Récupération du fichier text dans une variable nommée inputRD
 
    ContestResponse(); //On appelle la fonction ContestResponse()

 function ContestResponse(){ // Prototype de la fonction ContestResponse
     var recupmesNotes= inputRD[0].split(' '); //On récupère les données en les séparants par des espaces
     var mesNotes = recupmesNotes.map(e => parseInt(e)); //On dispose de façon organisé la variable recupmesNotes
     var nbProcheCopain = parseInt(inputRD[2]); //On formatte les données en int puis on récupère la valeur d'une partie d'inputRD
     nbProcheCopain=JSON.stringify(nbProcheCopain); // On réorganise les valeur nbProcheCopain sous forme de JSON
     console.log('Dans la rep '+inputRD);   // On affiche dans la console la réponse obtenu par le buffer fs
     var recupNoteCopain = inputRD.splice(3) //On coupe inputRD à partir du 3ème éléments inclus
     noteCopain= recupNoteCopain.map(n => n.split(' ').map(e => parseInt(e))); //On réalise la réorganisation de la variable noteCopain
     
     var noteCopain = noteCopain.map(notes => {
         var ecart = notes.slice(0, 5).map((n, i) => Math.abs(n - mesNotes[i])); 
         var ecarttotal = ecart.reduce((acc, n) => acc + n); //On réduit ecart à l'aide de l'accumulateur et de n
         return {
            ecarttotal: ecarttotal,
            nouvelleNote: notes[5]
         }
     })
     noteCopain.sort((a, b) => a.ecarttotal - b.ecarttotal); //On réalise le tri de noteCopain en fonction de a.ecarttotal - b.ecarttotal
     
          
     console.log('La notePote est de :'+JSON.stringify(noteCopain));
     ProcheCopain = noteCopain.slice(0, nbProcheCopain);
     console.log('La truePote est de :'+JSON.stringify(ProcheCopain));     
     console.log(noteCopain);
     console.log(ProcheCopain);
     var moyenne = Math.floor(ProcheCopain.reduce((acc, n) => acc + n.nouvelleNote, 0) / nbProcheCopain);
     console.log('La note moyenne est de :'+' '+moyenne);
 }
 
