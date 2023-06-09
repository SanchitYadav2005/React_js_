import React from 'react';
import useFormHook from './hooks/useFormHook';

function SimpleFormHooks(){
    const [email, updateEmail, resetEmail] = useFormHook("");
    return(
        <div>
            <h1>This is your input ....{email}</h1>
            <input type='text' value={email} onChange={updateEmail}/>
            <button onClick={resetEmail}>Reset</button>
        </div>
    )
}

export default SimpleFormHooks;