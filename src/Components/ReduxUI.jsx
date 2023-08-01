import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { decrement, increment } from './Redux';
const ReduxUI = () => {
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
  return (


<>
<button onClick={()=>dispatch(increment())}> Increment</button>
<div>{count}</div>
<button onClick={()=>dispatch(decrement())}>Decrement</button>

</>
    
  )
}

export default ReduxUI