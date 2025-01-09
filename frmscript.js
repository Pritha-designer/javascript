function validate()
{
    const name=document.getElementById("name").value;
    const nameError=document.getElementById("name-error");
    nameError.textContent="";
    let nameregex = /^[a-zA-Z0-9_]{5,19}$/;

    if(name=="" || (!nameregex.test(name)) )
    {
        nameError.textContent="name should be minimum 6 to 20 charecters";
        return false;
    }
    
    const email=document.getElementById("email").value;
    const emailError=document.getElementById("email-error");
    emailError.textContent="";
    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(email=="" || !emailregex.test(email))
    {
        emailError.textContent="email should be letter,number,symbols with @";
        return false;
    }
    
    const password=document.getElementById("pwd").value;
    const pwdError=document.getElementById("pwd-error");
    pwdError.textContent="";
    let passwordregex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/;

    if(password=="" || !passwordregex.test(password))
    {
        pwdError.textContent="Password should be letter,number & symbols with minimum 8 characters";
        return false;
    }

    const address=document.getElementById("address").value;
    const addressError=document.getElementById("address-error");
    addressError.textContent="";
    if(address=="" )
    {
        addressError.textContent="please update your address";
        return false;

    }
    
    const phone=document.getElementById("phone").value;
    const phoneError=document.getElementById("phone-error");
    phoneError.textContent="";
    let phoneregex = /^(?=.*[0-9]).{10}$/;
    if(phone=="" || !phoneregex.test(phone))
    {
        phoneError.textContent="please update your phone";
        return false;
    }
   
    return true;
}