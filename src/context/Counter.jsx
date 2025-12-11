import { useContext } from 'react';
import { useCounter } from './Provider'

const Counter = () => {
    const { count, dispatch ,setName} = useCounter();
    console.log(count)
    return (
        <div>
            <h1>Count Value : {count}</h1>
            <div className='flex gap-10'>
                <h1 onClick={() => dispatch({ type: "increment" })} className='bg-amber-300 p-5 w-fit'>+</h1>
                <h1 onClick={() => dispatch({ type: "decrement" })} className='bg-amber-300 p-5 w-fit'>-</h1>
                <h1 onClick={() => dispatch({ type: "reset" })} className='bg-amber-300 p-5 w-fit'>Reset</h1>
                <input type="text" placeholder='Enter your name' name='name' onChange={(e)=>setName(e.target.value)} />
            </div>
        </div>
    )
}

export default Counter;

