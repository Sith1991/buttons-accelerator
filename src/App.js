import React, {useState} from 'react';

import './App.css';

export const App = () => {

    const [visibleTwo, setVisibleTwo] = useState(false);
    const [visibleThree, setVisibleThree] = useState(false);
    const [value, setValue] = useState(1);

    const handleVisible = (num) => {
        switch (num) {
            case 1:
                setVisibleTwo(true)
                setVisibleThree(true);
                break;
            case 2:
                setVisibleTwo((prev) => !prev);
                break;
            case 3:
                setVisibleThree((prev) => !prev);
                break;
            default: return
        }
    };

    const handleClick = (num) => {
        handleVisible(num);
        setValue(num);
    };

    return (
        <div className="App">
            <button className={'first-button'} type={'button'} onClick={() => handleClick(1)}>{value}</button>
            {visibleTwo && <button type={'button'} onClick={() => handleClick(2)}>2</button>}
            {visibleThree && <button type={'button'} onClick={() => handleClick(3)}>3</button>}
        </div>
    );
}