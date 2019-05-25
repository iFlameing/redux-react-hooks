import React from 'react'
import { Store } from './Store'


const App = () => {

    const { state , dispatch } = React.useContext(Store);
    
    const add = () => {
        return dispatch({
            types: 'ADD'
          })
    }

    const sub = () => {
        return dispatch({
            types: 'SUB'
        })
    }

    return (
        <div style={{display: 'flex', flexFlow:'column',  justifyContent:'center', alignItems:'center'}}>
            <h1 style={{color: '#A4262c'}}>This is our own-config react app with redux by hooks</h1>
            <p style={{fontSize: '30px', color: 'green'}}>This is the current value of counter: {state.counter}</p>
            <button style={{ margin: '5px', padding: '5px', color: 'teal',fontSize: '20px' }} onClick={add}>Type to add to counter</button>
            <button style={{ margin: '5px', padding: '5px', color: 'purple', fontSize: '20px' }} onClick={sub}>Type to subtract from counter</button>
        </div>
    )
}

export default App;