import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [wordCount, setwordCount] = useState(0)
    const [isNewWord, setIsNewWord] = useState(false)
    const handlerChange = (e) =>{
        setText(e.target.value)

    }
    const increaseWord = (e) =>{
        // console.log(e.keyCode)
        if(e.keyCode === 32){
            setIsNewWord(true);
            if(isNewWord && e.keyCode !== 32){
                setIsNewWord(false);
                setwordCount(wordCount+ 1);
            }
            if(e.keyCode == 8){
                
            }
        }
    }
    const setUpperCase = () =>{
        setText(text.toUpperCase())
        
        props.showAlert('success', 'Converted to upper case');

    }
    const setLowerCase = () =>{
        setText(text.toLowerCase())
        props.showAlert('success', 'Converted to lower case');

    }
    return (
        <>
            <div className='container'>

                <div className="mb-3">
                    <h3 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Enter Text: </h3>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={10}
                        value={text}
                        placeholder='Enter Text Here...'
                        onKeyDown={increaseWord}
                        onInput={handlerChange}
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#212529' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black',
                            
                        }}
                    />
                </div>
            </div>
            <div className="container">
                <button className={`btn btn-${props.mode === 'dark'? 'light' : 'dark'} mx-3`} onClick={setUpperCase}>Upper Case</button>
                <button className={`btn btn-${props.mode === 'dark'? 'light' : 'dark'} `} onClick={setLowerCase}>Lower Case</button>
            </div>
            <div className="container">
                <h1>
                    Word Count : {wordCount}
                </h1>
                <h1>
                    Character Count : {text.split(' ').join('').length}
                </h1>
            </div>

        </>
    )
}
