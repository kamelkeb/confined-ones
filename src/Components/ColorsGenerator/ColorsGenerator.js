import React, { useState } from 'react';
import MyButton from '../MyButton/MyButton';

const ColorsGenerator = (props) => {
    const [ myColor, setMyColor ] = useState([]);
    const couleurRandom = () => {
        return '#' + ((Math.random() * 0xffffff) << 0).toString(16);
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <MyButton titre="Generer une div" myHandler={() => setMyColor([ ...myColor, couleurRandom() ])} />
            {myColor.map((item) => {
                return <div style={{ width: '200px', height: '200px', fontSize: 38, backgroundColor: item }} />;
            })}
        </div>
    );
};

export default ColorsGenerator;
