function roll()
{
	var d1=document.getElementById('d1');
    var d2=document.getElementById('d2');
	var s3=document.getElementById('status');
	var t1=Math.floor(Math.random()*6)+1;
	var t2=Math.floor(Math.random()*6)+1;
	var t3= t1+t2;
	d1.innerHTML = t1;
	d2.innerHTML = t2;
	s3.innerHTML = "SUM OF THE NO IS="+t3;
	if(t1==t2)
	{
		s3.innerHTML += "<b>  CONGRATS!!! YOU GOT ONE EXTRA CHANCE</b>";
	}
}