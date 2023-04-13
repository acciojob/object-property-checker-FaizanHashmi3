const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	var flag=false;
	for(var i in sampleObject)
		{
			if(key==i)
			{
				flag = true;
				break;
			}
		}
	return flag;
	
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));


