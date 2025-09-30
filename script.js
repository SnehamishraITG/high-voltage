let form = document.getElementById("form-data");
let first=document.getElementById("first-name")
let last=document.getElementById("Last-name")
let mail=document.getElementById("email")
let phone=document.getElementById("phone")
let cricket = document.getElementById("Cricket");
let Reading = document.getElementById("Reading");
let Riding = document.getElementById("Riding");
let Other = document.getElementById("other_hobbie");
let Tv = document.getElementById("TV")
let textarea=document.getElementById("msg")



function firstname(val,obj){
    let errors = document.getElementById("name")
    errors.innerText = "";
    if (val.value.trim().length < 6){
        errors.innerText = "please enetr minimum 6 charcter";
        errors.style.color = "red";
        return false;
    } 
    else if(val.value[0] <="A" || val.value[0] <="a" ){
         errors.innerText = "please enetr valid name";
          errors.style.color = "red";
         return false;
    }else {
        obj.firstName=val.value;
        return true;
    }
};
function lastname(val,obj) {
    let errors = document.getElementById("srname")
    errors.innerText = "";
    if (val.value.trim().length < 6) {
        errors.innerText = "please enetr minimum 5 charcter";
        errors.style.color = "red";
        return false;
    } 
    else if(val.value[0] <="A" || val.value[0] <="a" ){
         errors.innerText = "please enetr valid  last name";
         return false;
    }
    else {
         obj.lastname=val.value;
        return true;
    }
}
function checknumber(number,obj){
    let reg = /\D/;
    let errors = document.getElementById("number")
    errors.innerText = "";
    if (reg.test(number.value) || number.value.length > 10 || number.value.length < 10) {
        errors.innerText = "please enter valid number"
        errors.style.color = "red";
        return false;
    }
    else {
         obj.Number=number.value;
        return true;
    }
};

let dataform={
    hobbies:[],
};


function submit(){
}

form.addEventListener("submit",((e)=>{
 e.preventDefault();
 let radiobuttons=document.getElementsByName("gender");
 firstname(first,dataform)
lastname(last,dataform)
checknumber(phone,dataform)
if (cricket.checked) {
        dataform.hobbies.push(cricket.value);
    }
    if (Reading.checked) {
        dataform.hobbies.push(Reading.value);
    }
    if (Riding.checked) {
        dataform.hobbies.push(Riding.value);
    }
    if (Other.checked) {
        dataform.hobbies.push(Other.value);
    }
    if (Tv.checked) {
        dataform.hobbies.push(Tv.value);
    }
    if(dataform.hobbies.length<1){
        alert("Please select atleast one hobby");
    }
    if(radiobuttons[0].checked){
        let errors=document.getElementById("gen");
          errors.innerText="";
         dataform.gender=radiobuttons[0].value;
         console.log(dataform)
         return true;
    }
    else if(radiobuttons[1].checked){
        let errors=document.getElementById("gen");
          errors.innerText="";
          dataform.gender=radiobuttons[1].value;
          console.log(dataform)
          return true;
    }
    else if(radiobuttons[2].checked){
         let errors=document.getElementById("gen");
          errors.innerText="";
         dataform.gender=radiobuttons[2].value;
         console.log(dataform)
          return true;
    }
    else{
        let errors=document.getElementById("gen");
        errors.innerText = "this filed is required";
        errors.style.color = "red";
        console.log(dataform)
        return false;
    };
}));


