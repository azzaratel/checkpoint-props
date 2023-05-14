import React from 'react'
import Pic from './Pic'

function Profil({ name, bio, prof, handleName }) {
    return (
        <div>
            <h1 style={{
                textAlign: "center", color: "red", fontFamily: "cursive",
            }}> {name}</h1>
            <h1 style={{ textAlign: "center", }}> {bio}</h1>
            <h1 style={{ textAlign: "center", }}> {prof} </h1>
            <button style={{ border: "none", position:"absolute", 
                        top :"172%", left: "27%"
        }} onClick={() => handleName(name)}> Click here to show Name</button>

            <Pic  >
                <img  style={ { marginLeft: "27%", width:"50%"}}  
 src='https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS4WH3Cpe1X75X4LhbHdyJo3vPEs0ufiHQhHjkqEnMjbPqViSEVI-nqF0NpeLscSR-7' />
            </Pic>
        </div>
    )
}

export default Profil