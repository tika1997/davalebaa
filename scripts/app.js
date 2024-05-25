let objects =[
    {
        objName:"phone",
        Price:1500,
        Rating:9.8,
    },
    {
        objName:"book",
        Price:15,
        Rating:9.0,
    },
    {
        objName:"car",
        Price:5000,
        Rating:5,
    },

]
console.log(objects);

let userchoose =prompt("შემოიყვანეთ 1 ან 2")

if (userchoose==="1"){
    alert("მომხმარებელმა აირჩია გაფილტვრა ფასის მიხედვით")
}
else if (userchoose==="2"){
    alert("მომხმარებელმა აირჩია გაფილტვრა რეიტინგის მიხედვით")
}
else{
    alert("მოხდა შეცდომა")
}



let object=objects.filter(object=> object.Price > 300);
console.log(object);
let object1=objects.filter(object=> object.Rating > 3);
console.log(object);
