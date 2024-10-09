let huidigeTijd = new Date();
console.log(huidigeTijd.getHours());

if(huidigeTijd.getHours() >= 9){
    console.log("Ik moet op school zijn");
} else if (huidigeTijd.getHours() <= 4){
    console.log("Ik moet op school zijn");
} else {
    console.log("Ik moet niet op school zijn");
}