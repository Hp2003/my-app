import React, { useState } from 'react'

function BackgroundColorPicker(props) {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const changehandlerRed = (e) => {
        setRed(e.target.value)
        changeBacgroundColor();
    }
    const changehandlerGreen = (e) => {
        setGreen(e.target.value)
        changeBacgroundColor();

    }
    const changehandlerBlue = (e) => {
        setBlue(e.target.value)
        changeBacgroundColor();

    }

    const changeBacgroundColor = () => {
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    }

    return (
        <>
            <div className="container">
                red {red}
                <input type="range" name="" id="" min={0} max={255} value={red} onChange={changehandlerRed} />
                green {green}
                <input type="range" name="" id="" min={0} max={255} value={green} onChange={changehandlerGreen} />
                blue {blue}
                <input type="range" name="" id="" min={0} max={255} value={blue} onChange={changehandlerBlue} />
            </div>

        </>
    )
}

export default BackgroundColorPicker