function display()
{
	let x=document.getElementById('text1');
	let y=document.getElementById('text2');
	if(x.value.trim()=="" && y.value.trim()=="")
	{
		return true;
	}
	else
	{
		alert("password not matched");
		return false;
	}

}
