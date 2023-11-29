import React, { useState, useCallback, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

function PasswordGenerator() {
    const [charLength, setLength] = useState(5);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
    const passwordReference = useRef(null);

    const generatePassword = useCallback(()=>{
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const numbers = '1234567890';
        const splChar = '?@#$%_';
        let mixPassword = characters;
        let storeChars = '';
        let finalString = '';
        if (numberAllowed){
            mixPassword += numbers
        };
        if (charAllowed) {
            mixPassword += splChar
        };

        for (let i = 0; i < charLength; i++) {
            storeChars = Math.floor(Math.random() * mixPassword.length + 1)
            finalString += mixPassword.charAt(storeChars)
        }
        setPassword(finalString);
    }, [charLength, numberAllowed, charAllowed, setPassword]);

    const handleLengthChange = (event) => {
        const newLength = parseInt(event.target.value, 10);
        setLength(isNaN(newLength) ? 5 : newLength);
    };
    const handleHover = () => {
        document.getElementById('rangeValue').classList.remove('d-none')
    };
    const handleOut = () => {
        document.getElementById('rangeValue').classList.add('d-none')
    };
    
    const copyToClipBoard = useCallback(() => {
        passwordReference.current.select();
        window.navigator.clipboard.writeText(password);
    }, [password]);
    
    useEffect(() => {generatePassword()}, [charLength, numberAllowed, charAllowed, generatePassword])
    
    return(
        <div className='container mt-5 p-5 d-flex justify-content-center align-items-center flex-column' style={{background: "aquamarine"}}>
            <h1 className='text-certer'>Password Generator</h1>
            <div className='card w-50 mt-3'>
                <div className="input-group p-3">
                    <input type="text" className="form-control" placeholder="Password" aria-label="Recipient's Password" aria-describedby="button-addon2"
                    value={password} ref={passwordReference} readOnly
                    />
                    <button className="btn btn-outline-secondary" type="button" id="copyPassword" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy to clipboard" 
                    onClick={copyToClipBoard}><FontAwesomeIcon icon={faCopy}/></button>
                </div>
                <div className="col-sm-12 d-flex align-items-end justify-content-center" style={{gap: "10px"}}>
                    <div className="col-sm-12 col-md-1 text-right">
                        <span className='d-none' id='rangeValue'>{charLength}</span>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <div className="form-range d-flex justify-content-center align-items-center" style={{gap: "10px"}}>
                            <input type="range" className="form-range" id="customRange" min="5" max="15" step="1"
                            onMouseOver={handleHover} onMouseOut={handleOut}
                            value={isNaN(charLength) ? '' : charLength}
                            onChange={handleLengthChange}
                            />
                            <label htmlFor="customRange" className="form-label">Length</label>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="numberMixed"
                            defaultChecked={numberAllowed} onChange={()=> setNumberAllowed((prev)=> !prev)}
                            />
                            <label className="form-check-label" htmlFor="numberMixed">
                                Numbers
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="characterMixed"
                            defaultChecked={charAllowed} onChange={()=> setCharAllowed((prev)=> !prev)}
                            />
                            <label className="form-check-label" htmlFor="characterMixed">
                                Characters
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordGenerator