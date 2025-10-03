import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({asset}) => {
    const [money, setMoney] = use(MoneyContext)

    return (
        <div>
            <h3>Aunt</h3>
            <section>
                <Cousin asset={asset} name={'Tom Tom'}></Cousin>
                <Cousin name={'JO JO'}></Cousin>
                <button onClick={()=>{setMoney(money + 5000)}}>Add 5000 tk</button>
            </section>

        </div>
    );
};

export default Aunt;