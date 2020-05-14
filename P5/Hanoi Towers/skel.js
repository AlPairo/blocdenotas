function towerOfHanoi(n,from,to,aux1,aux2,array){ 
  if (n==0) {
    return;
  }
  if (n==1) {
    array.push(["Move disk "+n+" from rod "+from+" to rod "+to]);
    return array;
  }
  towerOfHanoi(n-2,from,aux1,aux2,to,array);
  array.push(["Move disk "+(n-1)+" from rod "+from+" to rod "+aux2]);
  array.push(["Move disk "+n+" from rod "+from+" to rod "+to]);
  array.push(["Move disk "+(n-1)+" from rod "+aux2+" to rod "+to]);
  towerOfHanoi(n-2,aux1,to,from,aux2,array); 
    }