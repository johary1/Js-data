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
// Methodes Objects
document.body.innerHTML = myData
.filter((user) => user.admin === false)
.filter((user) => user.technos.includes("NodeJs"))
.sort((a,b) => b.age - a.age)
.map((user) => 
`
    <div class="user-card">
        <h2>${user.pseudo}</h2>
        <p>Age: ${user.age}</p>
        <p>Langages: ${user.technos}</p>
        <p>Status: ${user.admin ? "Modérateur" : "Membre"}</p>
    </div>


`).join("");
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

// ________________method String_________________
let string1 = "Js est un langage POO";
/*console.log(typeof(string1));
console.log(eval(parseInt("2") + 3));*/
//console.log(isNaN(string1)); // isNotANumber

//dernière lettre string1
//console.log(string1[string1.length-1]);
console.log(string1.indexOf("u"));

//let newString = string1.slice(14);
let newString = string1.slice(0,14);
console.log(newString);
//console.log(string1.split("i"));
console.log(string1.toLowerCase());
console.log(string1.toUpperCase());

// ________________method Numbers_________________

let num = 45.4567;
let numString = "34.879 is a number";
console.log(num.toFixed(2)); //x chiffre après le virgule en argument
console.log(parseInt(numString)); // 34
console.log(parseFloat(numString)); // 34.879

// ________________method Math_________________
console.log(Math.PI);
console.log(Math.round(4.1)); // 4
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.7)); // 5
console.log(Math.floor(Math.random() * 50)); // 1 et 50

// ________________method Arrays_________________

let arr1 = ["Js","Php","Python"];
let arr2 = ["Ruby","Java"];

let newArr = arr1.concat(arr2);
console.log(newArr);

let newArr1 = [...arr1,...arr2]; // spread operator
console.log(newArr1);
console.log(arr1.join(" & ")); // Js & Php & Python
console.log(newArr.slice(2,3)); // python
newArr.forEach((languages) => console.log(languages)); //Js Php Python Ruby Java
console.log(newArr.every((language) => language === "Php")); // false
console.log(newArr.some((language) => language === "Php")); // true

let shift = newArr.shift();
console.log(shift);// supprimer le 1er element du array (Js)
console.log(newArr.pop()); // supprimer le dernier element du array (Java)

const newArray2 = newArr.splice(1,2, "SQL");// remplace l'element à l'index fourni
console.log(newArr);
const newArr3 = arr1.splice(0,1, ...newArr1);
console.log(newArr3);

/** Important */
let arrNumb = [4,89,3,12,7];
console.log(arrNumb.reduce((x,y) => x + y)); //total des sommes
arrNumb.push(17,9); // rajouter 17  et 9
console.log(arrNumb);

/** Filter Sort Map */
//filter
console.log(arrNumb.filter((number)=>number > 10)); // filtre chiffre > 10
//console.log(arrNumb.sort());
console.log(arrNumb.sort((a,b) => a - b)); // trie ordre croissant b - a pour l'inverse

/*document.body.innerHTML = arrNumb
.map((number) => `<li> ${number}</li>`)
.join("");*/



