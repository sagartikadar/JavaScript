let adj={
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}
let shop={
    1: "Engine",
    2:"Food",
    3: "Garment"
};
let word={
    1: "Bros",
    2: "Limited",
    3: "Hub"
};

let r_adj=Math.floor(Math.random()*3)+1;
let r_shop=Math.floor(Math.random()*3)+1;
let r_word=Math.floor(Math.random()*3)+1;

console.log(`Your shop name is ${adj[r_adj]} ${shop[r_shop]} ${word[r_word]}`);

let strng=`Your shop name is ${adj[r_adj]} ${shop[r_shop]} ${word[r_word]}`;
document.getElementById("printt").innerHTML = strng;
