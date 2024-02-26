import React, {useState,useEffect} from 'react';



export default function RandomColor(){
    
const [typeofColor, setTypeOfColor] = useState('hex');
const [color, setColor] = useState('#000000');




useEffect(()=> {
        if (typeofColor === "rgb")handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    }, [typeofColor])
function RandomColorUtility(length){
    return Math.floor(Math.random()*length)

}

function handleCreateRandomHexColor (){
    const hex = [1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for( let i = 0 ; i < 6 ; i++){
        hexColor += hex[RandomColorUtility(hex.length)]
    }
    setColor(hexColor)

}
function handleCreateRandomRgbColor (){

    const r = RandomColorUtility(256);
    const g = RandomColorUtility(256);
    const b = RandomColorUtility(256);
    
    // setColor('rgb('+r+','+g+','+b+')');
    setColor(`rgb(${r},${g},${b})`);

}

return(
    <div style ={{
        width: '100vw',
        height: '100vh',
        backgroundColor: color,
    }}>
        <button onClick={()=> setTypeOfColor('hex')}>Generate HEX Color</button>
        <button onClick={()=> setTypeOfColor('rgb')}>Generate RGB Color</button>
        <button 
        onClick={ typeofColor === 'hex' ?
         handleCreateRandomHexColor: 
         handleCreateRandomRgbColor }>
        Generate Random Color
        </button>
        <div style = {{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '64px',
            marginTop: '50px',
            flexDirection: 'column',
            gap: '20px'

        }}>
         <h3>{typeofColor === "rgb"? "RGB Color" : "HEX Color"}</h3> 
            <h1>{color}</h1>  
        </div>


    </div>
)
}