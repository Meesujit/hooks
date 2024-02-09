import React, { useReducer, useState } from 'react'
// import AiFillAccountBook from 'react-icon/Ai';

 

export default function Playground(){
    return ( 
    <div className="text-center mt-10">
        <div className="mb-10">
        <h1 className='text-3xl text-orange-500'>Playground for Hooks in React.</h1>
        <pre className='text-zinc-500 mt-5'>What ever you want to test put it below.</pre>
        </div>
        <Hooks />
        <StateTutorial />
        <ReducerTutorial />
        

    </div>
    
    
    )
}



function Hooks(){
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
    }
  return (
    <div >
        <h2 className='text-2xl font-semibold text-zinc-400'>Increment useState</h2>
        {counter}
        <button className='btn mx-5 bg-zinc-500 text-white p-4 mt-4 border rounded-md hover:bg-zinc-200 hover:text-black' onClick={increment}>Increment</button>
    </div> 
  )
}

function StateTutorial(){
    const [inputValue, setInputValue] = useState('');

    const onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }

    return(
        <div className='mt-10'>
            <h2 className='text-2xl font-semibold text-zinc-400 mb-9'>Playing with Text using useState.</h2>
            <input type="text" placeholder='Enter your text' onChange={onChange} className='border-4 border-indigo-500/50 rounded-md' />
            <pre className=''>
            {inputValue}
            </pre>
        </div>
    )
}

// useReducer Tutorial

const reducer = (state, action) =>{
    switch(action.type){
        case "INCREMENT":
            return {counter: state.counter + 1, showText: state.showText};
        case 'toggleShowText':
            return {counter: state.counter, showText: !state.showText};
        default :
            return state
    }

}
function ReducerTutorial(){
    // useReducer
   const [state, dispatch] = useReducer(reducer, {counter: 0, showText: true})

       
        
    return(
        <div className="mt-10">
            <h2>
                {state.counter}
            </h2>
            <button 
            className='btn mx-5 bg-zinc-500 text-white p-4 mt-4 border rounded-md hover:bg-zinc-200 hover:text-black' 
            onClick={() => {
                dispatch({type: 'INCREMENT'})
                dispatch({type: 'toggleShowText'})
            }}>
                Click Here
            </button>
            {state.showText && <pre>This a Text</pre>}

            <div>
        {/* <span>This user have {this.props.count}</span> */}
        <Icon glyph="star" />
      </div>

        </div>
    )
}
