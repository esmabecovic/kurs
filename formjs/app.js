
function validation(){
    console.log("function called");
    let name = document.querySelector(".name")
    let email = document.querySelector(".email")
    let username = document.querySelector(".username")
    let password = document.querySelector(".password").value
    let confirmPassword = document.querySelector(".passwordcon").value
    let number = document.querySelector(".mobile")
    if(password !== confirmPassword){
        alert('Error')
    }
    
}