import React, { useReducer, useState } from 'react'

const reducer=(state,action)=>{

    let {type} = action
    if(type=='increase'){
        return state+1
    }

    if(type=='decrease'){
        return state-1
    }

    return state
}

var initValue = 0

export default function UseReducer() {

    // const [count, setCount] = useState(0)
    const [count,dispatch] = useReducer(reducer,initValue)
  return (
    <div>
      <h1>use Reducer</h1>
       <button onClick={()=>dispatch({type:'increase'})}>+</button>
       <h1>{count}</h1>
       <button onClick={()=>dispatch({type:'decrease'})}>-</button>
    </div>
  )
}
