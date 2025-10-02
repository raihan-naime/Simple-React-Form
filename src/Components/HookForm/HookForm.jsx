import React from 'react';
import UseInputField from '../../Hooks/UseInputField/UseInputField';

const HookForm = () => {
    const [name, nameOnChange] = UseInputField('');
    const [email, emailOnChange] = UseInputField('');
    const [password, passwordOnChange] = UseInputField('');

    const handleSubmit = e =>{
        e.preventDefault();
        console.log('submit', name, email, password);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} onChange={nameOnChange} type="text" /> <br />   
                <input defaultValue={email} onChange={emailOnChange}  type="email" name="email"  /> <br />
                <input defaultValue={password} onChange={passwordOnChange} type="password" name="password"  /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;