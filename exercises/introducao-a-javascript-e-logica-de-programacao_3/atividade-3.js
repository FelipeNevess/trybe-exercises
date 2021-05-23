// RESOLVIDO COM A AJUDA DO GABARITO

let no = 5;
let va = '*';
let x = n;
let g = '';

for (let q = 0; q < no; q += 1){
	for (let k = 0; k <= n; k += 1){
  	if (k < x){
    	g += " ";
    }else{
    		g += va;
    }
  }
  console.log(g);
  g = '';
  x -= 1;
}
