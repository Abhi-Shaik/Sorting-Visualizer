import waitforme from "./waitforme"

async function merge(arr,l,m,r,setarray,delay){
    let ls=m-l+1;
    let rs=r-m;
    let larr= new Array(ls);
    let rarr= new Array(rs);
    for(let i=0;i<ls;i++){
        larr[i]=arr[l+i];
    }
    for(let i=0;i<rs;i++){
        rarr[i]=arr[m+1+i];
    }
    let i=0;
    let j=0;
    let k=l;
    while(i<ls && j<rs){
        let id1=document.getElementById(i+l);
        let id2=document.getElementById(j+1+m);
        id1.style.backgroundColor="yellow";
        id2.style.backgroundColor="yellow";  
        await waitforme(delay);
        if(larr[i]<rarr[j]){
            arr[k++]=larr[i++];
        }
        else
            arr[k++]=rarr[j++];
        setarray([...arr]);
        id1.style.backgroundColor="red";
        id2.style.backgroundColor="red";
        await waitforme(delay);
    }
    while(i<ls){
        let id1=document.getElementById(i+l);
        id1.style.backgroundColor="yellow";
        arr[k++]=larr[i++];
        await waitforme(delay);
        setarray([...arr]);
        id1.style.backgroundColor="red";
        await waitforme(delay);
    }
    while(j<rs){
        let id1=document.getElementById(j+m+1);
        id1.style.backgroundColor="yellow";
        arr[k++]=rarr[j++];
        await waitforme(delay);
        setarray([...arr]);
        id1.style.backgroundColor="red";
        await waitforme(delay);
    }
}

async function mergefun(arr,l,r,setarray,delay){
    if(l>=r)
        return;
    let m=l+Math.floor((r-l)/2);
    await mergefun(arr,l,m,setarray,delay);
    await mergefun(arr,m+1,r,setarray,delay);
    await merge(arr,l,m,r,setarray,delay);
}
const MergeSort=async(arr,setarray,delay,setsorted)=>{
    let n=arr.length;
    await mergefun(arr,0,n-1,setarray,delay);
    console.log(arr)
    setsorted(false);
}
export default MergeSort;