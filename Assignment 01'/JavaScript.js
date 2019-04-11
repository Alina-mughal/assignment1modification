function validate() 
{
  
  var name = document.forms["RegForm"]["Name"];
   
 var email = document.forms["RegForm"]["EMail"];
 
   var password = document.forms["RegForm"]["Password"];

 
var passWord = document.forms["RegForm"]["CPassword"];



   if (name.value === "") 
{
 
window.alert("Please enter your name.");
   
     name.focus();
    
    return false;
   
 }

  
  if (email.value === "") 
{
        window.alert("Please enter a valid e-mail address.");
    
    email.focus();
    
    return false;
    }

 
   if (email.value.indexOf("@", 0) < 0) 
{
        window.alert("Please enter a valid e-mail address.");
 
       email.focus();
   
     return false;
    }

   

 if (email.value.indexOf(".", 0) < 0)
 {
        window.alert("Please enter a valid e-mail address.");
 
       email.focus();

        return false;
    }

  
  if (password.value === "")

 {
        window.alert("Please enter your password");
   
     password.focus();
    

    return false;
  
  }

   
 return true;
}

if (passWord.value === "")

 {
        window.alert("Please enter your password");
   
     passWord.focus();
    

    return false;
  
  }

   
 return true;
}



