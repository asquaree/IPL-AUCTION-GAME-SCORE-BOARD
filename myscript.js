var x1=0,x2=0,x3=0,x4=0,x5=0,x6=0,x7=0,x8=0,x9=0,x10=0,x11=0,x12=0,x13=0,x14=0,x15=0;//SET INITAL POINT VALUES HERE
var int_money=3000;//SET INITAL MONEY ALLOTED HERE
var y1=int_money,y2=int_money,y3=int_money,y4=int_money,y5=int_money,y6=int_money,y7=int_money,y8=int_money,y9=int_money,y10=int_money,y11=int_money,y12=int_money,y13=int_money,y14=int_money,y15=int_money;

function sum(s1,s2)
{
	return  +s1+ +s2;
}
function diff(d1,d2)
{
	return +d1- +d2;
}

function sum_rev(s1,s2)
{
	return s2- s1;
}
function diff_rev(d1,d2)
{
	return +d1 + +d2;
}

function set()
{	
	document.getElementById("pt1").innerHTML=x1;
	document.getElementById("ml1").innerHTML=y1;
	document.getElementById("pt2").innerHTML=x2;
	document.getElementById("ml2").innerHTML=y2;
	document.getElementById("pt3").innerHTML=x3;
	document.getElementById("ml3").innerHTML=y3;
	document.getElementById("pt4").innerHTML=x4;
	document.getElementById("ml4").innerHTML=y4;
	document.getElementById("pt5").innerHTML=x5;
	document.getElementById("ml5").innerHTML=y5;
	document.getElementById("pt6").innerHTML=x6;
	document.getElementById("ml6").innerHTML=y6;
	document.getElementById("pt7").innerHTML=x7;
	document.getElementById("ml7").innerHTML=y7;
	document.getElementById("pt8").innerHTML=x8;
	document.getElementById("ml8").innerHTML=y8;
	document.getElementById("pt9").innerHTML=x9;
	document.getElementById("ml9").innerHTML=y9;
	document.getElementById("pt10").innerHTML=x10;
	document.getElementById("ml10").innerHTML=y10;
	document.getElementById("pt11").innerHTML=x11;
	document.getElementById("ml11").innerHTML=y11;
	document.getElementById("pt12").innerHTML=x12;
	document.getElementById("ml12").innerHTML=y12;
	document.getElementById("pt13").innerHTML=x13;
	document.getElementById("ml13").innerHTML=y13;
	document.getElementById("pt14").innerHTML=x14;
	document.getElementById("ml14").innerHTML=y14;
	document.getElementById("pt15").innerHTML=x15;
	document.getElementById("ml15").innerHTML=y15;
}
function calculate()
{	
	var team_no=document.getElementById("team_no").value;
	var pnt=document.getElementById("pnt").value;
	var price=document.getElementById("price").value;
	
	if( team_no==1)
	{
		x1=sum(pnt,x1);
		document.getElementById("pt1").innerHTML=x1;
		y1=diff(y1,price);
		document.getElementById("ml1").innerHTML=y1;
		
	}
	else if( team_no==2)
	{
		x2=sum(pnt,x2);
		document.getElementById("pt2").innerHTML=x2;
		y2=diff(y2,price);
		document.getElementById("ml2").innerHTML=y2;
		
	}
	else if( team_no==3)
	{
		x3=sum(pnt,x3);
		document.getElementById("pt3").innerHTML=x3;
		y3=diff(y3,price);
		document.getElementById("ml3").innerHTML=y3;
		
	}
	else if( team_no==4)
	{
		x4=sum(pnt,x4);
		document.getElementById("pt4").innerHTML=x4;
		y4=diff(y4,price);
		document.getElementById("ml4").innerHTML=y4;
		
	}
	else if( team_no==5)
	{
		x5=sum(pnt,x5);
		document.getElementById("pt5").innerHTML=x5;
		y5=diff(y5,price);
		document.getElementById("ml5").innerHTML=y5;
		
	}
	else if( team_no==6)
	{
		x6=sum(pnt,x6);
		document.getElementById("pt6").innerHTML=x6;
		y6=diff(y6,price);
		document.getElementById("ml6").innerHTML=y6;
		
	}
	else if( team_no==7)
	{
		x7=sum(pnt,x7);
		document.getElementById("pt7").innerHTML=x7;
		y7=diff(y7,price);
		document.getElementById("ml7").innerHTML=y7;
		
	}
	else if( team_no==8)
	{
		x8=sum(pnt,x8);
		document.getElementById("pt8").innerHTML=x8;
		y8=diff(y8,price);
		document.getElementById("ml8").innerHTML=y8;
		
	}
	else if( team_no==9)
	{
		x9=sum(pnt,x9);
		document.getElementById("pt9").innerHTML=x9;
		y9=diff(y9,price);
		document.getElementById("ml9").innerHTML=y9;
		
	}
	else if( team_no==10)
	{
		x10=sum(pnt,x10);
		document.getElementById("pt10").innerHTML=x10;
		y10=diff(y10,price);
		document.getElementById("ml10").innerHTML=y10;
		
	}
	else if( team_no==11)
	{
		x11=sum(pnt,x11);
		document.getElementById("pt11").innerHTML=x11;
		y11=diff(y11,price);
		document.getElementById("ml11").innerHTML=y11;
		
	}
	else if( team_no==12)
	{
		x12=sum(pnt,x12);
		document.getElementById("pt12").innerHTML=x12;
		y12=diff(y12,price);
		document.getElementById("ml12").innerHTML=y12;
		
	}
	else if( team_no==13)
	{
		x13=sum(pnt,x13);
		document.getElementById("pt13").innerHTML=x13;
		y13=diff(y13,price);
		document.getElementById("ml13").innerHTML=y13;
		
	}
	else if( team_no==14)
	{
		x14=sum(pnt,x14);
		document.getElementById("pt14").innerHTML=x14;
		y14=diff(y14,price);
		document.getElementById("ml14").innerHTML=y14;
		
	}
	else if( team_no==15)
	{
		x15=sum(pnt,x15);
		document.getElementById("pt15").innerHTML=x15;
		y15=diff(y15,price);
		document.getElementById("ml15").innerHTML=y15;
		
	}
	
}
	
function undo()
{
	var team_no=document.getElementById("team_no").value;
	var pnt=document.getElementById("pnt").value;
	var price=document.getElementById("price").value;
	
	if( team_no==1)
	{
		x1=sum_rev(pnt,x1);
		document.getElementById("pt1").innerHTML=x1;
		y1=diff_rev(y1,price);
		document.getElementById("ml1").innerHTML=y1;
		
	}
	else if( team_no==2)
	{
		x2=sum_rev(pnt,x2);
		document.getElementById("pt2").innerHTML=x2;
		y2=diff_rev(y2,price);
		document.getElementById("ml2").innerHTML=y2;
		
	}
	else if( team_no==3)
	{
		x3=sum_rev(pnt,x3);
		document.getElementById("pt3").innerHTML=x3;
		y3=diff_rev(y3,price);
		document.getElementById("ml3").innerHTML=y3;
		
	}
	else if( team_no==4)
	{
		x4=sum_rev(pnt,x4);
		document.getElementById("pt4").innerHTML=x4;
		y4=diff_rev(y4,price);
		document.getElementById("ml4").innerHTML=y4;
		
	}
	else if( team_no==5)
	{
		x5=sum_rev(pnt,x5);
		document.getElementById("pt5").innerHTML=x5;
		y5=diff_rev(y5,price);
		document.getElementById("ml5").innerHTML=y5;
		
	}
	else if( team_no==6)
	{
		x6=sum_rev(pnt,x6);
		document.getElementById("pt6").innerHTML=x6;
		y6=diff_rev(y6,price);
		document.getElementById("ml6").innerHTML=y6;
		
	}
	else if( team_no==7)
	{
		x7=sum_rev(pnt,x7);
		document.getElementById("pt7").innerHTML=x7;
		y7=diff_rev(y7,price);
		document.getElementById("ml7").innerHTML=y7;
		
	}
	else if( team_no==8)
	{
		x8=sum_rev(pnt,x8);
		document.getElementById("pt8").innerHTML=x8;
		y8=diff_rev(y8,price);
		document.getElementById("ml8").innerHTML=y8;
		
	}
	else if( team_no==9)
	{
		x9=sum_rev(pnt,x9);
		document.getElementById("pt9").innerHTML=x9;
		y9=diff_rev(y9,price);
		document.getElementById("ml9").innerHTML=y9;
		
	}
	else if( team_no==10)
	{
		x10=sum_rev(pnt,x10);
		document.getElementById("pt10").innerHTML=x10;
		y10=diff_rev(y10,price);
		document.getElementById("ml10").innerHTML=y10;
		
	}
	else if( team_no==11)
	{
		x11=sum_rev(pnt,x11);
		document.getElementById("pt11").innerHTML=x11;
		y11=diff_rev(y11,price);
		document.getElementById("ml11").innerHTML=y11;
		
	}
	else if( team_no==12)
	{
		x12=sum_rev(pnt,x12);
		document.getElementById("pt12").innerHTML=x12;
		y12=diff_rev(y12,price);
		document.getElementById("ml12").innerHTML=y12;
		
	}
	else if( team_no==13)
	{
		x13=sum_rev(pnt,x13);
		document.getElementById("pt13").innerHTML=x13;
		y13=diff_rev(y13,price);
		document.getElementById("ml13").innerHTML=y13;
		
	}
	else if( team_no==14)
	{
		x14=sum_rev(pnt,x14);
		document.getElementById("pt14").innerHTML=x14;
		y14=diff_rev(y14,price);
		document.getElementById("ml14").innerHTML=y14;
		
	}
	else if( team_no==15)
	{
		x15=sum_rev(pnt,x15);
		document.getElementById("pt15").innerHTML=x15;
		y15=diff_rev(y15,price);
		document.getElementById("ml15").innerHTML=y15;
		
	}
}
	

