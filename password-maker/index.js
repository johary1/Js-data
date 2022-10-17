const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$!^¨;,#*&?_-";
const rangeValue = document.getElementById('pwd-length');
const passwordOutput = document.getElementById('pwd-output');
console.log(passwordOutput);


function generatePassword () {
    let data = [];
    let password = "";
    if(lowercase.checked) data.push(...dataLowercase)
    if(uppercase.checked) data.push(...dataUppercase)
    if(numbers.checked) data.push(...dataNumbers)
    if(symbols.checked) data.push(...dataSymbols)

    if(data.length === 0){
        alert("Veuillez séléctionner des critères");
        return;
    }

    for(i = 0; i < rangeValue.value; i++){
        password += data[Math.floor(Math.random()* data.length)];
    }

    passwordOutput.value = password;
    // copy pwd
    passwordOutput.select();
    document.execCommand("copy");

    generateButton.textContent = "Copié !"

    setTimeout(()=> {
        generateButton.textContent = "Générer un mot de passe";
    },2000);

}

generateButton.addEventListener('click',generatePassword);
   
