function display()
{
	var x=document.getElementById('check1');
    var y=document.getElementById('check2');
    if(x.value.trim()=="" || y.value.trim()=="")
    {
      alert("wrong username or password!!!");
    }
}