console.log("hello");

let $i = document.querySelector(".inner");

let $p = document.createElement("p");
$p.textContent = "hello \n world";

$i.prepend($p)

