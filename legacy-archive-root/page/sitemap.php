<?php
include 'config.php';
header("Content-Type: text/xml");

echo '<?xml version="1.0" encoding="UTF-8"?>';
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

$q = $db->query("SELECT city_slug FROM cities");

while($c = $q->fetch_assoc()){
 echo "<url>
 <loc>https://skyserver.in/page/vps-hosting/{$c['city_slug']}</loc>
 <changefreq>monthly</changefreq>
 <priority>0.8</priority>
 </url>";
}

echo '</urlset>';
