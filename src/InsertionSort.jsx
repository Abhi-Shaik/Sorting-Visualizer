import waitforme from "./waitforme";

const InsertionSort = async(delay,setsorted,arr,setarray) => {
    for(let i=1;i<arr.length;i++){
        let id1=document.getElementById(i);
        id1.style.backgroundColor='purple';
        await waitforme(2*delay);
        let j=i;
        while(j>=1 && (arr[j-1]>arr[j])){
            let id2=document.getElementById(j);
            let id3=document.getElementById(j-1);
            id2.style.backgroundColor='yellow';
            id3.style.backgroundColor='yellow';
            await waitforme(delay);
            let temp=arr[j];
            arr[j]=arr[j-1];
            arr[j-1]=temp;
            id2.style.backgroundColor='green';
            id3.style.backgroundcolor='green';
            setarray([...arr]);
            await waitforme(delay);
            id2.style.backgroundColor='red';
            id3.style.backgroundColor='red';
            await waitforme(delay)
            j--;
        }
        id1.style.backgroundColor='red';
    }
    // console.log(arr)
    for(let i=0;i<arr.length;i++){
        const id1=document.getElementById(i);
        id1.style.backgroundColor="#32a852";
        await waitforme(delay);
    }
    setsorted(false);
}

export default InsertionSort