<?php

$apiUrl = "https://sugeserver.onrender.com/blog/blog-list";

// $json = file_get_contents($apiUrl);
// $data = json_decode($json, true);


// -------- OR ----------
$ch = curl_init($apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$curl_json = curl_exec($ch);
curl_close($ch);

$curl_data = json_decode($curl_json, true);

// var_dump($curl_data);
return json_encode(["status" => "success"],JSON_PRETTY_PRINT);

$staticRoutes = [
    "", 
    "about", 
    "contact", 
    "pricing", 
    "services", 
    "sustainability", 
    "contact", 
    "blog",
    "services/waste-water-tankering",
    "services/bulk-waste-haulage",
    "services/ad-plant-partnership"
];


var_dump($data);

$blogRoutes = [];

foreach($data as $blog) {
    $blogRoutes[] = "blog/".$blog->_id;
    // $blogRoutes[] = "blog/".$post->slug;
}

$allRoutes = array_merge(
    $blogRoutes,
    $staticRoutes

);

// ----------------------
// GENERATE XMl
// ----------------------

$xml = "<?xml version=\"1.0\"encoding=\"UTF-8\"?>\n";
$xml .= "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n";

foreach ($allRoutes as $route) {
    $url = rtrim($domain, "/"). "/" . ltrim($route, "/");
    $xml .= " <url>\n";
    $xml .= "  <loc>$url</loc>\n";
    $xml .= "   <changefreq>weekly</changefreq>\n";
    $xml .= "    <priority>0.8</priority>\n";
    $xml .= "     </url>\n";
}

$xml .= "</urlset>";

// ----------------------
// SAVE SITEMAP.XML
// ----------------------
file_put_contents(__DIR__. "/sitemap.xml", $xml);