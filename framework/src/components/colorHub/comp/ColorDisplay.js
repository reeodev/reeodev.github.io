import React from 'react';
import { CirclePicker } from 'react-color';
import { successCopySwal } from '../utilis/swalPopUtilis';

function copyLeftColorToClipboard(content){
    try{

        navigator.clipboard.writeText(content);

        successCopySwal(true);
        return true

    }
    catch(err){
        successCopySwal(false);
    }
}

function ColorDisplay({ colorArr, insideText, setPickedcolorArr }){
    return(
        <>
        {insideText && <h3> {insideText} </h3>}
        <CirclePicker
            colors={colorArr ? colorArr : []} 
            circleSize={48}
            circleSpacing={16}
            width={"100%"}
            onChangeComplete={ (color) => {
                let success = copyLeftColorToClipboard(color.hex);
                success && setPickedcolorArr(color.hex);
            }}
        />
        </>
    )
}

export default ColorDisplay