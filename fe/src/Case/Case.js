import React, { useEffect, useState } from 'react'
import { label, nextCase } from '../utils/api';

function Case() {
    const [currentCase, setCurrentCase] = useState({});
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        nextCase().then(data => {
            setCurrentCase(data);
        })
    },[])

    useEffect(()=>{
        label().then(data => {
            setLabels(data);
        })
    },[])
    
    return (
        <div>
            {currentCase?.description}
            {JSON.stringify(labels)}
        </div>
    )
}

export default Case
