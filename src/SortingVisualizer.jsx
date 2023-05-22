import React, { useEffect } from 'react'
import { useState } from 'react';
import { BubbleSort } from './BubbleSort';
import InsertionSort from './InsertionSort';
import MergeSort from './MergeSort';
import QuickSort from './QuickSort';
import logo from './logo.jpg';
const SortingVisualizer = () => {
    const [array, setarray] = useState([]);
    const[size,setsize]=useState(15);
    const[speed,setspeed]=useState(500);
    const[algo,setalgo]=useState("BubbleSort");
    const [sorted, setsorted] = useState(false);
    const [sortdis, setsortdis] = useState(false);// sort button disable
    const sizeHandler=(e)=>{
        setsize(e.target.value);
    }
    const speedHandler=(e)=>{
        var a=800-e.target.value; /// value for delay 
        setspeed(a);
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
            temp.push(num);
        }
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
        }
    }
    const sortHandler=(e)=>{
        setalgo(e.target.value);
    }
  return (
    <div style={{backgroundColor:'#9fb4cc'}}>   
        <div className='navbar'>
            <img src={logo} alt="Sorting Visualizer" />
            <span style={{fontSize: '2.5em',display: 'flex',alignItems: 'center' }}>Visualizer</span>
            <div  style={{display:'flex',alignItems: 'center' ,justifyContent: 'center',backgroundColor:"#091654" ,color:'white',height: "10vh",marginRight:'1.5vw'}}>
            <button className='btn' onClick={()=>GenerateArray(size)} disabled={sorted===true?true:false}>Generate Array</button>
            <button className='btn' onClick={()=>sort(algo)} disabled={(sorted===true || sortdis===true)?true:false}>Sort</button>
            <label style={{marginRight:'0.2vw'}} className='sltsort' htmlFor="sort-select" disabled={sorted===true?true:false}>Select a sorting algorithm:</label>
                <select  className='sltsort' onChange={(e)=>sortHandler(e) } disabled={sorted===true?true:false}id="sort-select">
                    <option value="BubbleSort">Bubble Sort</option>
                    <option value="InsertionSort">Insertion Sort</option>
                    <option value="MergeSort">Merge Sort</option>
                    <option value="QuickSort">Quick Sort</option>
                </select>
            <label className='btn' htmlFor="size">Array-size</label>
                <input onChange={(e)=>sizeHandler(e)} disabled={sorted===true?true:false} type="range" name="Size" value={size}id="slider-size" min="3" max="30"  />
            <label className='btn' htmlFor="speed">Speed</label>
                <input onChange={(e)=>speedHandler(e)} disabled={sorted===true?true:false} type="range" name="Speed" value={800-speed} id="slider-speed" min="200" max="600"  />
        </div>
        </div>
        <div className='container' style={{overflowY:'auto'}}>
            {
            array.map((value,idx)=>(
                <div className='array-bar' key={idx} id={idx} style={{height: `${(value)}vh` ,width:size>7?`${50/size}vw`:'8vw',backgroundColor:"#fc0303"}}></div>
            ))
        }
        </div>
    </div>
  )
}

export default SortingVisualizer