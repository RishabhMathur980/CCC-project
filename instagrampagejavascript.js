function display()
{
	let x=document.getElementById('text1');
	let y=document.getElementById('text2');
	if(x.value=="rishabhmathur980@gmail.com" && y.value=="abcdef")
	{
		return true;
	}
	else
	{
		alert("password not matched");
		return false;
	}

}
