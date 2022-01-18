import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'antd';
import { useNavigate } from 'react-router';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { cleartoken, label, labelCase, nextCase } from '../utils/api';
import './Case.css';

function Case() {
    const [currentCase, setCurrentCase] = useState();
    const [labels, setLabels] = useState([]);
    const [selectedLabel, setSelectedLabel] = useState([]);
    const [startTime, setStartTime] = useState();
    const navigate = useNavigate();

    const handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setSelectedLabel(value);
    };

    useEffect(() => {
        getNextCase();
    }, [])

    useEffect(() => {
        label().then(data => {
            setLabels(data);
        })
    }, [])

    const getNextCase = () => {
        nextCase().then(data => {
            setCurrentCase(data);
            setStartTime(Date.now());
        });
    }

    const saveCase = () => {
        const labelId = selectedLabel;
        const caseId = currentCase._id;
        const labelTime = Date.now() - startTime;
        labelCase(labelId, caseId, labelTime).then(() => {
            getNextCase();
        })
    }

    const logout = () => {
        cleartoken();
        navigate('/');
    }

    return (
        <>
            <header>
                <span className="case_user">{`Logged in as: ${localStorage.getItem('login')}`}</span>
                <a onClick={logout} className="case_logout">Log Out</a>
            </header>
            {currentCase ? <div className="case_details">
                <Row>
                    <Col span={14} >
                        Please Review This Case:
                        <div className="case_description">
                            {currentCase?.description}
                        </div>
                    </Col>
                    <Col span={10} >
                        <FormControl sx={{ m: 1, minWidth: 550, maxWidth: 600 }}>
                            <InputLabel shrink htmlFor="select-multiple-native">
                                Select Condition
                            </InputLabel>
                            <Select
                                multiple
                                native
                                value={selectedLabel}
                                onChange={handleChangeMultiple}
                                inputProps={{
                                    id: 'select-multiple-native',
                                }}
                            >
                                {labels.map((label) => (
                                    <option key={label._id} value={label._id}>
                                        {`${label.name} (${label.code})`}
                                    </option>
                                )
                                )}
                            </Select>
                        </FormControl>

                        <Row className="case_form_action">
                            <Button onClick={saveCase} type="primary">
                                Next
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </div> : <div>You are done.</div>
            }
        </>
    )
}

export default Case
