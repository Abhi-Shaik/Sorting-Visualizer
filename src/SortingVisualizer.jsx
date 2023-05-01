import React, { useEffect } from 'react'
import { useState } from 'react';
import { BubbleSort } from './BubbleSort';
import InsertionSort from './InsertionSort';
import MergeSort from './MergeSort';
import './styles.css'
import QuickSort from './QuickSort';
const SortingVisualizer = () => {
    const [array, setarray] = useState([]);
    const[size,setsize]=useState(20);
    const[speed,setspeed]=useState(150);
    const[algo,setalgo]=useState("BubbleSort");
    const [sorted, setsorted] = useState(false);
    const [sortdis, setsortdis] = useState(false);// sort button disable
    const sizeHandler=(e)=>{
        // console.log(e.target.value)
        setsize(e.target.value);
    }
    const speedHandler=(e)=>{
        // console.log(e)
        var a=800-e.target.value;
        // console.log(e.target.value)
        setspeed(a);
        // console.log(a);
    }
    useEffect(() => {
        GenerateArray(size);
    }, [size])
    
    const GenerateArray=(size)=>{
        const temp=[];
        for(var i=0;i<size;i++){
            const id1=document.getElementById(i);
            if(id1!==null)
                id1.style.backgroundColor="red";
            var num=Math.floor(Math.random()*(75)+7);
            // temp.push({
            //     value: num,
            //     id: i,
            // });
            temp.push(num);
        }
        // console.log(temp)
        setarray(temp);
        setsortdis(false);
    }
    const sort=(algo)=>{
        var temp=[...array];
        setsorted(true);
        setsortdis(true);
        console.log(algo);
        switch(algo){
            case "BubbleSort":
                BubbleSort(speed,temp,setarray,setsorted);
                break;
            case "InsertionSort":
                InsertionSort(speed,setsorted,temp,setarray);
                break;
            case "MergeSort":
                MergeSort(temp,setarray,2*speed,setsorted);
                break;
            case "QuickSort":
                QuickSort(temp,setarray,speed,setsorted);
                break;
            default:
                BubbleSort(speed,temp,setarray,setsorted);     
                break;           
                // console.log("fghj");
        }
        // console.log(array);;
        // console.log('hey');
    }
    const sortHandler=(e)=>{
        // console.log(e.target.value);
        setalgo(e.target.value);
    }
  return (
    <div>
        <div  style={{backgroundColor: "yellow",height: "10vh"}}>
            SortingVisualizer
            <button id='genbt' onClick={()=>GenerateArray(size)} disabled={sorted===true?true:false}>Generate Array</button>
            <button id='sbtn' onClick={()=>sort(algo)} disabled={(sorted===true || sortdis===true)?true:false}>sort</button>
            <label className='sltsort' htmlFor="sort-select">Select a sorting algorithm:</label>
            <select  className='sltsort' onChange={(e)=>sortHandler(e)} id="sort-select">
            <option value="BubbleSort">Bubble Sort</option>
            <option value="SelectionSort">Selection Sort</option>
            <option value="InsertionSort">Insertion Sort</option>
            <option value="MergeSort">Merge Sort</option>
            <option value="QuickSort">Quick Sort</option>
            </select>

            <label htmlFor="size">Array-size</label>
            <input onChange={(e)=>sizeHandler(e)} disabled={sorted===true?true:false} type="range" name="size" id="slider-size" min="3" max="30"  />
            <label htmlFor="speed">speed</label>
            <input onChange={(e)=>speedHandler(e)} disabled={sorted===true?true:false} type="range" name="speed" id="slider-speed" min="200" max="600"  />
            {/* {console.log(document.getElementById("slider-size").value)} */}
        </div>
        <div className='container'>
            {
            array.map((value,idx)=>(
                <div className='array-bar' key={idx} id={idx} style={{height: `${(value)}vh` ,width:`${50/size}vw`,backgroundColor:"#fc0303"}}></div>
            ))
        }
        </div>
    </div>
  )
}

export default SortingVisualizer