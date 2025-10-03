import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Brother = () => {
    const [money, setMoney] = use(MoneyContext)
    return (
        <div>
            <h2>Brother</h2>
            <button onClick={()=>{setMoney(money + 1000)}}>Add 1000 TK</button>
        </div>
    );
};

export default Brother;