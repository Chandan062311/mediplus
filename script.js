function validate()
{
    let fname=document.myform.fname.value;
    let Fno=document.myform.Fno.value;
    let PhoneNo=/^\d{10}$/
    let name=/^[a-zA-Z]+$/
    if(fname.match(name))
    {
        alert("Name is not valid")
    }
    if(Fno.match(PhoneNo))
    {
        return true;
    }
    else{
        alert("invalid phoneno")
    }
}