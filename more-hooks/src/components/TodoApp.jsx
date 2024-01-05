import React, { useReducer, useRef } from 'react'
import TodoItem from './TodoItem'
const initialValue = [
    {
        data:"First item",
        isHidden: false
    }
]



const todoReducer = (state, action)=>{
    if(action.type == 'Add_Item'){
        return [
          ...state,
            {
                data: action.payload,
                isHidden: false
            }
        ]
    }
    if(action.type == 'changeHidden'){
        return state.map((e,i)=>{
            return i == action.payload ? {...e, isHidden: !e.isHidden}:e
        })
    }
    return state
}



export default function TodoApp() {

    const [todo, dispatch] =  useReducer(todoReducer, initialValue)
    const input = useRef(null);
  return (
    <div>
      <input ref={input} type="text" onKeyDown={(e)=>{
        if(e.key == "Enter"){
            dispatch({type:'Add_Item',payload:e.target.value})
            e.target.value = null
        }
      }}/>
    
    {todo.map((e,i)=>{
        return <TodoItem key={i} item={e} index={i} dispatch={dispatch}/>
    })}
    <button onClick={()=>{
      window.scrollTo({top:0,behavior:"smooth"})
      input.current.focus()
    }}>Get back writing {" "}</button>


    </div>
  )
}
