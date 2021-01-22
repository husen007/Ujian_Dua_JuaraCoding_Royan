import React, { useState } from 'react';

const CounterDua = ({text}) => {

    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(tambah)
    }

    const tambah = function(counter) {
        return counter + 1;
    }

    return <button onClick={handleClick}>
        {text} {counter}
    </button>
}

export default CounterDua;