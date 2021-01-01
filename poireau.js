//On prend le pistolet
setWeapon(WEAPON_PISTOL); //coûte 1PT

//On récupère l'ennemi le plus proche
var enemy = getNearestEnemy();

//On avance vers l'ennemi
moveToward(enemy);

//On essaye de lui tirer dessus !
useWeapon(enemy);