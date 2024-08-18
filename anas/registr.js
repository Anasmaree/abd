var registrForm = document.querySelector(".registrForm");
var users=[];
registrForm.onsubmit = function(e){
   
    e.preventDefault();
    var elements=e.target.elements;
        var user = {

            name:elements[0].value,
            email:elements[1].value,
            password:elements[2].value,


        }
        users.push(user);
        console.log(users);


}