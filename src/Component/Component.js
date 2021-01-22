import React from 'react';

const Component = () => {
    const [number, increment] = React.useState(0)
    return <div>
        <h1>Counter App</h1>
        <p>nilai counter saat ini : {number}</p>
        <button onClick={() => {increment(number + 1)}}>Tambah</button>
    </div>
}

export default Component;