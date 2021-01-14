       
       /*///// JEU === Pierre Feuille Ciseaux Lézard Spock \\\\\*\ 
        -----------------------------------------------------------

/* la constante BOUTONS contient les 5 boutons avec la class="boutonChoix" */
const BOUTONS = document.querySelectorAll("button.boutonChoix");
console.log(BOUTONS);

let pointsDuJoueur = 0;
let pointsDeIA = 0;

/* ( déclaration du compteur de boutons ; compteur plus petit que le nombre de boutons ; compteur augmente */
for(let i = 0; i < BOUTONS.length; i++)
{
    /* pour chaque bouton du compteur, on écoute l'Event "click", auquel on attache une fonction */
    BOUTONS[i].addEventListener("click", function() 
    {   
        /* initialisation des constantes JOUEUR et IA */
        const JOUEUR = BOUTONS[i].innerHTML;
        const IA = BOUTONS[Math.floor(Math.random() * BOUTONS.length)].innerHTML;

        /* Affichage des actions du Joueur et de l'IA */
        actionJOUEUR.innerHTML = "- Action du Joueur :" + JOUEUR;
        actionIA.innerHTML = "- Action de l' I.A : " + IA;

        /* variable qui va remplacer le HTML de id="zoneResultat" */
        //let resultat = "";

        /* conditions de victoire, égalité ou défaite */ 
        /* attention aux espace dans les boutons HTML pour l'égalité stricte ("Ciseaux" != " Ciseaux ") */
        if ((JOUEUR == " Pierre " && IA == " Ciseaux ") || (JOUEUR == " Pierre " && IA == " Lézard ") ||
            (JOUEUR == " Feuille " && IA == " Pierre ") || (JOUEUR == " Feuille " && IA == " Spock ") ||
            (JOUEUR == " Ciseaux " && IA == " Feuille ") || (JOUEUR == " Ciseaux " && IA == " Lézard ") ||
            (JOUEUR == " Lézard " && IA == " Spock ") || (JOUEUR == " Lézard " && IA == " Feuille ") ||
            (JOUEUR == " Spock " && IA == " Ciseaux ") || (JOUEUR == " Spock " && IA == " Pierre "))
        {
            resultat = " Gagné ! ";
        }
        else if (JOUEUR === IA )
        {
            resultat = " Égalité... ";
        }
        else
        {
            resultat = " Perdu ! ";
        }
        
        /* remplacement du HTML de id="zoneResultat" */
        document.getElementById("ZoneResultat").innerHTML = resultat;
        /* ne fonctionnait pas */
        // ZoneResultat.innerHTML = resultat;

        console.log(`Joueur : ${JOUEUR} VS Intelligence Artificielle : ${IA}`);
        console.log(resultat);

        compteurDePoints(resultat);

        console.log("\n Compteur de points :");
        console.log(pointsDuJoueur);
        console.log(pointsDeIA);

        victoireFinPartie(pointsDuJoueur, pointsDeIA);

        arreterJeu();

        relancerJeu();

    });

} 
  ////////////////////
   //* FONCTIONS *//
  ///////////////////

function compteurDePoints()
{
    let pointsJoueur = pointsDuJoueur;
    let pointsIA = pointsDeIA;

    if(resultat == " Gagné ! ")
    {
        pointsJoueur = pointsJoueur + 1;
        //console.log(pointsJoueur);
        pointsDuJoueur = pointsJoueur;

        points_JOUEUR.innerHTML = "Points du Joueur : " + pointsDuJoueur;
        //document.getElementById("points_JOUEUR").innerHTML = "Points du Joueur : " + pointsDuJoueur;
        console.log("Joueur : " + pointsDuJoueur);
    }
    else if(resultat == " Perdu ! ")
    {
        pointsIA = pointsIA + 1;
        //console.log(pointsIA);
        pointsDeIA = pointsIA;

        points_IA.innerHTML = "Points de l' I.A : " + pointsDeIA;
        //document.getElementById("points_IA").innerHTML = "Points de l' I.A : " + pointsDeIA;
        console.log("IA : " + pointsDeIA);
    }
    else
    {
        points_JOUEUR.innerHTML = "Points du Joueur : " + pointsDuJoueur;
        points_IA.innerHTML = "Points de l' I.A : " + pointsDeIA;
    }

    document.getElementById("points_IA").innerHTML = "Points de l' I.A : " + pointsDeIA;
}

function victoireFinPartie()
{
    let pointsTotauxJoueur = pointsDuJoueur ;
    let pointsTotauxIA = pointsDeIA ;

    if( pointsTotauxJoueur >= 3 )
    {
        document.getElementById("ZoneVictoire").innerHTML = " Victoire du Joueur ! "
        let scoreFinalJoueur = pointsDuJoueur;
        let scoreFinalIA = pointsDeIA;
    }
    else if( pointsTotauxIA >= 3 )
    {
        document.getElementById("ZoneVictoire").innerHTML = " Victoire de l' I.A ... "
        let scoreFinalJoueur = pointsDuJoueur;
        let scoreFinalIA = pointsDeIA;
    }
    else
    {
        document.getElementById("ZoneVictoire").innerHTML = " Victoire de : ... "
    }
}

function arreterJeu()
{
    if(pointsDuJoueur >= 3 || pointsDeIA >= 3)
    {
        document.getElementById("boutonsChoixActions").style.display = "none";
    }
}

function relancerJeu()
{
    let pointsFinPartieJoueur = pointsDuJoueur ;
    let pointsFinPartieIA= pointsDeIA ;

    if(pointsDuJoueur >= 4 || pointsDeIA  >= 4)
    {
        location.reload(true);
    }
}