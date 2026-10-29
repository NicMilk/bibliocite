# bibliocite
Une petite API REST de gestion de bibliothèque avec Laravel 12 et SQLite.

git clone https://github.com/NicMilk/bibliocite && cd bibliocite
composer install
cp .env.exemple .env
php artisan key:generate
touch database/database.sqlite
php artisan migrate --seed
php artisan serve

Réponse aux questions:
-Pourquoi l'URL commence-t-elle par /api alors que la route est déclarée /ping??
  L'URL commence par /api car dans Bootstrap/app.php les routes api.php sont automatiquement par defaut avec le préfix api.
-A quoi sert $fillable?
   Elle empeche un client d'envoyer un champ qu'elle ne peut pas modifier.
-Comment laravel transforme {author} en objet Author?
   Laravel cherche l'enregistrement dont la clé primaire vaut l'URL et renvoie directement un 404  sil n'existe pas.
-Pourquoi le serveur calcule due_at au lieu de le recevoir du cient?
   le serveur garantit que la règle Aujourd'hui+14 soit la meme pour tout les utilisateurs et ne peut se modifier qu'en un seul endroit.
