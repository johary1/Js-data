// data type
let string = "my text";
let number = 23;
let boolean = false;
let myVar; // undefined
let Myvar1 = null; // object

// array === Crochets   vs object accolades
let myArray = ["Lyon","Paris","Nice"];
let myArray1 = ["Bordeaux", 24, true, [1,2], {nom:"Denis"}];
//console.log(myArray1[4].nom);

let myObject = {
    pseudo: "Paul",
    age: 33,
    technos: ["Js","React","NodeJs"],
    admin: false,
};
/*
myObject.pwd = "1234noob";
console.log(myObject);
*/

let myData = [

    {
        pseudo: "Paul",
        age: 25,
        technos: ["Js","React","NodeJs"],
        admin: false,
    },
    {
        pseudo: "Christine",
        age: 23,
        technos: ["CSS","PHP","NodeJs"],
        admin: false,
    },
    {
        pseudo: "Durand",
        age: 37,
        technos: ["PYTHON","Django","NodeJs"],
        admin: true,
    },
    
];
//console.log(myData[2].technos);
//-------------------Structure de controle--------------------
let w = 0;
while(w < 10){
    w++;
    //console.log("la valeur de w est de : " + w);
}

let d = 0;

do {
    d++;
    //console.log(d);
}while(d<5);

// boucle for
for (const user of myData) {
    //document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

for (i = 0; i < myData.length; i++){
    //console.log(myData[i].technos[1]);
    //document.body.innerHTML += "<h2>" + myData[i].pseudo + "</h2>";
}

document.body.addEventListener('click', (e) => {
    //console.log(e.target.id);
    
    switch (e.target.id) {
       case "javascript":
         document.body.style.background = "yellow";
         break;
       case "php":
         document.body.style.background = "teal";
         break;
       case "python":
         document.body.style.background = "pink";
         break;
       default:
        null;
    }
});

