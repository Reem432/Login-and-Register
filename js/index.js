var pname = document.getElementById("userName")
var pemail = document.getElementById("userEmail")
var password = document.getElementById("userPass")
var su = document.getElementById("su")
var req = document.getElementById("req")
var persons = []
var person
if(localStorage.getItem("persons") != null){
    persons = JSON.parse(localStorage.getItem("persons"))
}
   if(document.getElementById("signup") != null){
    document.getElementById("signup").addEventListener("click",function (){
        if (pname.value != "" && pemail.value != "" && password.value != "") {
            
           if (containsEmail() === false) {
             person = {
                username:pname.value,
                useremail:pemail.value,
                userpassword:password.value
            }
            persons.push(person)
            // console.log(persons);
            localStorage.setItem("persons",JSON.stringify(persons))
            document.getElementById("war").style.display = "none"
            document.getElementById("su").style.display = "block"
            req.style.display = "none"
            clear()
            
           }
        else{
            document.getElementById("war").style.display = "block"
            document.getElementById("su").style.display = "none"
            req.style.display = "none"
    
      
        }
       
        }else {
            document.getElementById("req").style.display = "block"
            document.getElementById("su").style.display = "none"
            document.getElementById("war").style.display = "none"
    
    
        }
    })
    
    function clear() {
        pname.value = ""
        pemail.value = ""
        password.value =""
    }
    
    function containsEmail() {
        for(var i = 0 ; i < persons.length ; i++){
            if (persons[i].useremail == pemail.value) {
                // console.log(persons[i].useremail);
                document.getElementById("war").innerHTML = "This Email is already Exist"
                document.getElementById("war").style.display = "block"
                req.classList.replace("d-block" , "d-none")
                clear()
                return true
            }
        }
        return false
    }
   }

if (document.getElementById("loginbtn") != null){
    var loginEmail = document.getElementById("loginEmail")
var loginPass = document.getElementById("loginPass")
var users = JSON.parse(localStorage.getItem("persons"))
// console.log(users);
var Nameide = ""
document.getElementById("loginbtn").addEventListener("click",function(){
    if(loginEmail.value != "" && loginPass.value != "") {
       for(var i  = 0 ; i < users.length ; i++){
        if (users[i].useremail == loginEmail.value && users[i].userpassword == loginPass.value){
            localStorage.setItem("Nameide" , users[i].username)
            location.href = "../home.html"
            
            document.getElementById("warlogin").style.display = "none"
        }
    }
    
    document.getElementById("warlogin").innerHTML = "Incorrect Email or password"
    document.getElementById("warlogin").style.display = "block"
}else{
    document.getElementById("warlogin").innerHTML = "All inputs is required"
    document.getElementById("warlogin").style.display = "block"

}
})
}
if(document.getElementById("welcome") != null){
document.getElementById("welcome").innerHTML = `Welcome ${localStorage.getItem("Nameide")}`
}
