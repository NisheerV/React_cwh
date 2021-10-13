import React,{useState} from 'react'


export default function Textform(props) {

    const [text,setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        // props.showAlert('Converted to Uppercase', 'success');
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        // props.showAlert('Converted to Lowercase', 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#2d1a3f':'white',
            color: props.mode==='dark'?'white':'black'}} id="myBox" rows="12"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in the textbox above to preview it.'}</p>
        </div>
        </>
    )
}
