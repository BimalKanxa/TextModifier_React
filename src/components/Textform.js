import React, { useState } from 'react'

export default function Textform(props) {

    const [text, setText] = useState("");
    const [isbold, setisBold] = useState(false)

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        // console.log("uppercase was clicked")
    }
    const handleOnChange = (event) => {
        // console.log("OnChanged Function Triggered")
        setText(event.target.value)
    }

    const handleOnFocus = () => {
        if (text === "enter text here") {
            setText("");
        }
    };
    const handleDownClick = () => {
        const newtext = text.toLowerCase()
        setText(newtext)
    }

    const handleClearClick = () =>{
        setText("")
    }
    const handleBold = () =>{
        setisBold(!isbold)
    }
    const countWord = (text) =>{
        const words = text.trim().split(/\s+/);
        const filterWords = words.filter(word => word !== '')
        return filterWords.length
    }

    return (
        <>
            <div className='container'  style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>
                    {props.heading}
                </h1>
                <div className="mb-3">
                    {/* <label for="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="10" onFocus={handleOnFocus} style={{backgroundColor:props.mode==='dark'?'#341a1a':'white',color:props.mode==='dark'?'white':'black', fontWeight: isbold ? 'bold' : 'normal' }}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className='btn btn-secondary mx-2 my-1' onClick={handleDownClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className='btn btn-dark mx-2 my-1' onClick={handleBold}>Convert to Bold</button>
                <button disabled={text.length===0} className='btn btn-danger mx-2 my-1' onClick={handleClearClick}>Clear</button>
            </div>

            <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{countWord(text)} words and {text.length} characters</p>
                <p>{0.008 * countWord(text)} Minutes read</p>

                <h3>Preview</h3>
                <p>{text.length>0?text:"nothing to preview"}</p>
            </div>

        </>
    )
}
