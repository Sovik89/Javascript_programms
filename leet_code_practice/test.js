function solve(A, B){
    let hm_map = {}
    let out_arr = []
    for(let i=0;i<A.length;i++){
        if(A[i] in hm_map)
        {
            hm_map[i] +=1;
        }
        else{
            hm_map[i] = 1;
        }
    }
    for(let j=0;j<B.length;j++){
        if(B[j] in hm_map)
        {
            out_arr.push(hm_map[B[j]]);
        }
        else{
            out_arr.push(0);
        }
    }
    return out_arr;
}


console.log(solve([6,3,3,6,7,8,7,3,7],[10,9,8]))