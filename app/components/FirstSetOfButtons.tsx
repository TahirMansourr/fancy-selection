'use client'
import React, { Dispatch, SetStateAction } from 'react'

const PumpTypes = ['Fire Fighting' , 'Booster Set' , 'Circulation' ,  'Submersible' ,  'Transfer Set']

const FirstSetOfButtons = ({setSelectedPump} : {setSelectedPump : Dispatch<SetStateAction<string>>}) => {
  return (
    <ul>
        {
            PumpTypes.map((pump) => {
                return <li 
                        className="first-form-button" 
                        key={pump}
                        onClick={() => setSelectedPump(pump)}
                        >
                            {pump}
                        </li>
            })
        }
    </ul>
  )
}

export default FirstSetOfButtons