'use client'
import { Button, Group, Select, Stepper, Textarea, TextInput } from '@mantine/core';
import React, { useState } from 'react'

const FireFightingSetSteps = () => {
    const [FireFightingSetState , setFireFightingSetState] = useState({
        operationalSetup : '' ,
        pumpConfiguration : '',
        pumpMotor : '',
        head : 0,
        flowRate : 0,
        headMesuringUnit : '',
        FlowRateMesuringUnit : '',
        WithControlPanel : '',
        ControlPanel : '',
        withHeaders : '',
        Headers : '',
        DischargePipeSize : '',
        SuctionPipeSize : '',
        PipeType : '',
        AdditionalRequirements : ''
    })
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 12 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const operationalSetup = ['Single Pump' , 'Duplex Pump' , 'Triplex Pump']
    const pumpConfiguration = ['End Suction' , 'Split Case' , 'Vertical']
    const withControlPanel = ['YES' , 'NO'] 
    const controlPanel = ['DOL (220/380V)' , 'Y.D (220/380V)' , 'VFD (220/380V)' , 'Soft Starter (220/380V)' , ]
    const pipeType = ['Cast Iron' , 'Plastic' , 'Galvanized Iron' , 'Stainless Steel 304' , 'Stainless Steel 306']
    const pumpMotor = ['Diesel' , 'Electric']
  return (
    <div className='flex  w-full '>
         
      <Stepper active={active} onStepClick={setActive} orientation='vertical' className='!flex flex-grow gap-40 ' size='sm' >
        <Stepper.Step 
            label="Operational Setup" 
            description={`${FireFightingSetState.operationalSetup ? FireFightingSetState.operationalSetup : 'Choose Operational Setup' }`}
            >
        
            <ul className=' w-full'>
              {operationalSetup.map((item , index) => (
                <li 
                    className='first-form-button'
                    key={index} 
                    onClick={() => setFireFightingSetState({...FireFightingSetState , operationalSetup : item})}>
                  {item}
                </li>
              ))}
            </ul>
          
        </Stepper.Step>
        <Stepper.Step label="Pump Configuration" description={`${FireFightingSetState.pumpConfiguration ? FireFightingSetState.pumpConfiguration : 'Choose Pump Configuration' }`}>
         <ul className=' w-full'>
            {
                pumpConfiguration.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setFireFightingSetState({...FireFightingSetState, pumpConfiguration : item})}>{item}</li>
                    )
                })
            }
            </ul>
        </Stepper.Step>
        {
          FireFightingSetState.pumpConfiguration === "End Suction" || FireFightingSetState.pumpConfiguration === 'Split Case' ? 
          <Stepper.Step label="Motor Type" description={`${FireFightingSetState.pumpMotor ? FireFightingSetState.pumpMotor : 'Choose Motor Type' }`}>
          <ul className=' w-full'>
             {
                 pumpMotor.map((item, index) => {
                     return(
                         <li
                             className='first-form-button'
                             key={index}
                             onClick={() => setFireFightingSetState({...FireFightingSetState, pumpMotor : item})}>{item}</li>
                     )
                 })
             }
             </ul>
         </Stepper.Step>
          : null
        }
        <Stepper.Step label="Select Head And Flow Rate" description={`Head :${FireFightingSetState.head ? FireFightingSetState.head : '0' } | Flow Rate : ${FireFightingSetState.flowRate ? FireFightingSetState.flowRate : '0' } `}>
          <Group justify='center' flex= 'col'>
            <TextInput
                label = 'Head'
                rightSection = {
                    <Select
                        data={[{value : 'Meters' , label : 'Meters'} ,{value : 'Yards' , label : 'Yards'} ]}
                        defaultSearchValue='Meters'
                        value={FireFightingSetState.headMesuringUnit ? FireFightingSetState.headMesuringUnit : 'Meters'}
                        onChange={(value , option) => setFireFightingSetState({...FireFightingSetState , headMesuringUnit :  option.value})}
                    />
                }
                />
            <TextInput
                label = 'Flow Rate'
                rightSection = {
                    <Select
                        data={[{value : 'GPM' , label : 'GPM'} , {value : 'LPM' , label : 'LPM'} , {value : 'LPS' , label : 'LPS'} ]}
                        defaultSearchValue='GPM'
                        value={FireFightingSetState.FlowRateMesuringUnit ? FireFightingSetState.FlowRateMesuringUnit : 'GPM'}
                        onChange={(_value , option) => setFireFightingSetState({...FireFightingSetState , FlowRateMesuringUnit :  option.value})}
                    />
                }
            />
          </Group>
        </Stepper.Step>
       
        <Stepper.Step label="Would You like a Control Panel ?" description={`${FireFightingSetState.WithControlPanel ? FireFightingSetState.WithControlPanel : 'Choose Sites Voltage' }`}>
         <ul className=' w-fit mx-auto'>
            {
                withControlPanel.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setFireFightingSetState({...FireFightingSetState, WithControlPanel : item})}>{item}</li>
                    )
                })  
            }
        </ul>
        </Stepper.Step>
        {
          FireFightingSetState.WithControlPanel === 'YES' ?
          <Stepper.Step label="Control Panel" description={`${FireFightingSetState.ControlPanel ? FireFightingSetState.ControlPanel : 'Choose Sites Voltage' }`}>
         <ul className=' w-fit mx-auto'>
            {
                controlPanel.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setFireFightingSetState({...FireFightingSetState, ControlPanel : item})}>{item}</li>
                    )
                })
            }
             <TextInput label = 'Other' onChange={(e) => setFireFightingSetState({...FireFightingSetState , ControlPanel : e.target.value})}/>
        </ul>
        </Stepper.Step> : null}
        <Stepper.Step label="Would You Like Headers ?" description={`${FireFightingSetState.withHeaders ? FireFightingSetState.withHeaders : 'Choose Headers' }`}>
         <ul className=' w-fit mx-auto'>
            {
                withControlPanel.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setFireFightingSetState({...FireFightingSetState, withHeaders : item})}>{item}</li>
                    )
                })
               
            }
        </ul>
        </Stepper.Step>
       {FireFightingSetState.withHeaders === 'YES' ? <Stepper.Step label="Pipe Sizes" description={` Discharge ${FireFightingSetState.DischargePipeSize ? FireFightingSetState.DischargePipeSize : 'Choose size' } Suction : ${FireFightingSetState.SuctionPipeSize ? FireFightingSetState.SuctionPipeSize : 'Choose Size'}`}>
         <ul className=' w-fit mx-auto'>
            <Group>
             <TextInput label = 'Suction Pipe Size' onChange={(e) => setFireFightingSetState({...FireFightingSetState , SuctionPipeSize : e.target.value})}/>
             <TextInput label = 'Discharge Pipe Size' onChange={(e) => setFireFightingSetState({...FireFightingSetState , DischargePipeSize : e.target.value})}/>
            </Group>
            </ul>
        </Stepper.Step> : null}
       {FireFightingSetState.withHeaders === 'YES' ? <Stepper.Step label="Pipe Material" description={`${FireFightingSetState.PipeType ? FireFightingSetState.PipeType : 'Choose Pipe Material' }`}>
         <ul className=' w-fit mx-auto'>
            {
                pipeType.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setFireFightingSetState({...FireFightingSetState, PipeType : item})}>{item}</li>
                    )
                })
               
            }            </ul>
        </Stepper.Step>: null}
        <Stepper.Step label="Additional Requirements" >
         <div className=' flex flex-grow w-full mx-auto '>
             <Textarea label = 'Any Additional Requirements?' onChange={(e) => setFireFightingSetState({...FireFightingSetState , AdditionalRequirements : e.target.value})}/>
        </div>
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>
            
      <Group justify="center" mt="xl" className='fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4'>
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    
    </div>
  )
}

export default FireFightingSetSteps