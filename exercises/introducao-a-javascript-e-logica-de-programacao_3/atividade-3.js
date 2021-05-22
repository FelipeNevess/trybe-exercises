// RESOLVIDO COM A AJUDA DO GABARITO

let n = 5;
let v = '*';
let x = n;
let g = '';

for (let q = 0; q < n; q += 1){
	for (let k = 0; k <= n; k += 1){
  	if (k < x){
    	g += " ";
    }else{
    		g += v;
    }
  }
  console.log(g);
  g = '';
  x -= 1;
}
