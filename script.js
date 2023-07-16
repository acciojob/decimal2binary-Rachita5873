function decimalToBinary(num) {
	let rem;
	let ans="";
  while(num!=0){     
	 rem = num%2;     
	  ans=rem+ans;      
	  num=Math.floor(num/2);
  }

	return ans;
  
}

window.decimalToBinary = decimalToBinary;
