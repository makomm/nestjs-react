import React, { useEffect, useState } from 'react'
import { nextCase } from '../utils/api';

function Case() {
    const [currentCase, setCurrentCase] = useState({});
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        nextCase().then(data => {
            setCurrentCase(data);
        })
    },[])

    useEffect(()=>{

    },[])
    
    return (
        <div>
            {currentCase?.description}
        </div>
    )
}

export default Case
