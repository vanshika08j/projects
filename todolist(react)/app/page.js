 "use client"
 import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  
  const submitHandler=(e)=>{
    e.preventDefault()
    setmaintask([...maintask,{title,desc}]);
    settitle("");
    setdesc("");
    console.log(maintask);
    
  }
  const deleteHandler=(i)=>{ 
    let copytask = [...maintask]
    copytask.splice(i,1);
    setmaintask(copytask)
  
  }

  let rendertask=<h2 >No task Available</h2>;
  if(maintask.length>0){
  rendertask=maintask.map((t,i)=>{
    return ( 
    <li  key={i} className='flex items-center justify-between mb-8'>
      <div className='flex justify-between mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-lg font-medium'>{t.desc}</h6>
    </div>
    <button onClick={()=>{deleteHandler(i)}}
    className='bg-red-400 text-white px-4 py-2 rounded font-bold' >Delete</button></li>);
  
  });
}
  return (
    <><h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Vanshika's Todo List</h1>
    <form onSubmit={submitHandler}> 
      <input type="text" placeholder='Enter title' className='text-2xl border-zinc-800 border-2 m-8  px-4 py-2' value={title} onChange={(e)=>{
        settitle(e.target.value)
      }}>
        
      </input> 
      <input type="text" placeholder='Enter Description here' className='text-2xl border-zinc-800 border-2 m-8  px-4 py-2'value={desc} onChange={(e)=>{
        setdesc(e.target.value)
      }}>
 </input>
      <button className='bg-black text-white px-4 py-3 m-5 tex-xxl font-bold rounded'>Add Task</button> </form>
   <hr></hr>
   <div className='p-8 bg-slate-200'><ul>
    {rendertask}</ul></div>
    </>
  )
}

export default page
