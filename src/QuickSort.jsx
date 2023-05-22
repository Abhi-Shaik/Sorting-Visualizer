import React from 'react'
import waitforme from './waitforme';
async function partition(arr,low,high,setarray,delay){

    let pivot=arr[high];
    let id1=document.getElementById(high);
    id1.style.backgroundColor="yellow";
    await waitforme(delay);
    let i=low-1;
    for(let j=low;j<high;j++){
        if(arr[j]<=pivot){
            i++;
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
    let temp=arr[i+1];
    arr[i+1]=arr[high];
    arr[high]=temp;
    setarray([...arr]);
    let id2=document.getElementById(i+1);
    id1.style.backgroundColor="red";
    id2.style.backgroundColor="green";
    await waitforme(2*delay);
    id2.style.backgroundColor="red";
    return i+1;
}

async function quick(arr,low,high,setarray,delay){
    if(low<high){
        let pi=await partition(arr,low,high,setarray,delay);
        await quick(arr,low,pi-1,setarray,delay);
        await quick(arr,pi+1,high,setarray,delay);
    }
}

const QuickSort = async(arr,setarray,delay,setsorted) => {
    let n=arr.length;
    await quick(arr,0,n-1,setarray,5*delay);
    for(let i=0;i<arr.length;i++){
        const id1=document.getElementById(i);
        id1.style.backgroundColor="#32a852";
        await waitforme(delay);
    }
    setsorted(false);
}

export default QuickSort;