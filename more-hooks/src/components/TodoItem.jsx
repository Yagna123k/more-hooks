import React from 'react'

export default function TodoItem({item:{data,isHidden},index, dispatch}) {
  return (
    <div className='item'>
        <h3>{isHidden?"This Content is Hidden":data}</h3>
        <button onClick={()=>{
            dispatch({type:"changeHidden", payload:index})
        }}>Toggle</button>
    </div>
  )
}
