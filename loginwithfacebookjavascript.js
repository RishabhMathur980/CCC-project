function alert_message()
{
	let a=document.getElementById('text1');
	let b=document.getElementById('text2');
	let c=document.getElementById('text3');
	let d=document.getElementById('text4');
	if(a.value.trim()=="" || b.value.trim()=="" || c.value.trim()=="" || d.value.trim()=="")
	{
		alert("information not provided");
	}
	
// 	else if()
// 	{
// 		alert("name not provided");
        	
// 	}

// 	else if(c.value.trim()=="")
// 	{
// 		alert("username not provided");
	
// }
// 	else if(d.value.trim()=="")
// 	{
// 			alert("password not provided");

//}
else
{
	alert("account created succesfully");
}
 
}