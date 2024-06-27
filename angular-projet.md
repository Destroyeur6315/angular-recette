# Angular projet

/login
/ingredients

Ajout pour le projet
* Lien avec le menu
* Première page = login  => Lien 1
Des qu'on arrive dessus elle va créé un cookie ou une valeur isAdmin = true dans le localstorage (niveau point
c'est pareil)
* Cette page redirige vers la page gestion des aliments

* liens 2 du menu => /ingredients
* mettre en place des guards
* le guard vérifie si le cookie est égale à true dès qu'on arrive dans la page /ingrédiens
    * si oui => afficher page /ingrediens
    * si non => redirige page /accueil
* Si déjà login 
    * affiche logout dans le menu
    * et si clique sur /logout => supprime le cookie ou localstorage et redirige vers accueil

* Avoir un stub de lien => avec que ingrédients autre lien bouge en fonction de login ou pas 
* Avoir au moins un ingrédient

/ingrediens
* afficher tous les ingrédiens (ingrédients dans un stub)

Route
/accueil
/ingredients

Liens dans le menu
login => lien pas page mais doit réaliser des choses 
logout => lien pas page mais doit réaliser des choses



