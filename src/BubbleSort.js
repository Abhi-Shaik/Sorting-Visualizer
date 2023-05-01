import waitforme from "./waitforme";

export const BubbleSort = async (delay,arr,setArray,setsorted) => {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            // let flag=true;
            const id1=document.getElementById(j);
            const id2=document.getElementById(j+1);
            // console.log(id1);
            // console.log(id2);
            id1.style.backgroundColor="green";
            id2.style.backgroundColor="green";
            await waitforme(delay)
            if (arr[j] > arr[j + 1]) {
                // flag=true;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                id1.style.backgroundColor="purple";
                id2.style.backgroundColor="purple";
                setArray([...arr]);
                await waitforme(delay);
                // flag=false;
            }
            id1.style.backgroundColor="red";
            id2.style.backgroundColor="red";
            // await waitforme(delay);
            // if(flag===true)
            // setArray([...arr]);
        }
    }
    for(let i=0;i<arr.length;i++){
        const id1=document.getElementById(i);
        id1.style.backgroundColor="#32a852";
        await waitforme(delay);
    }
    setsorted(false)
};