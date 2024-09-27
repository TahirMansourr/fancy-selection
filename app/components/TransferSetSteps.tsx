'use client'
import { Button, Group, Select, Stepper, Textarea, TextInput } from '@mantine/core';
import React, { useState } from 'react'

const TransferSetSteps = () => {
    const [TransferSetState , setTransferSetState] = useState({
        mountingType : '' ,
        transferStages : '',
        head : 0,
        flowRate : 0,
        headMesuringUnit : '',
        FlowRateMesuringUnit : '',
        operationMethod : '',
        FloatSwtich : '',
        FloatSwitchType : '',
        SitesVoltage : '',
        ControlPanelType : '',
        DischargePipeSize : '',
        SuctionPipeSize : '',
        PipeType : '',
        AdditionalRequirements : ''
    })
    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 12 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const mountingType = ['vertical' , 'horizontal' , 'submersible']
    const transferStages = ['simple' , 'Duplex (Duty 1 and StandBy 1)' , 'Triplex (Duty 1 and StandBy 2)' , 'Other']
    const operationMethods = ['Selenoid Valves' , 'Float Switch']
    const floatSwitch = ['Yes' , 'No']
    const sitesVoltage = ['Single Phase 220V' , '3 Phase 220V' , '3 Phase 380V']
    const controlPanelType = ['DOL' , 'YD STAR-DELTA' , 'SOFT STARTER']
    const pipeType = ['Cast Iron' , 'Plastic' , 'Galvanized Iron' , 'Stainless Steel 304' , 'Stainless Steel 306']
  return (
    <div className='flex  w-full '>
         
      <Stepper active={active} onStepClick={setActive} orientation='vertical' className='!flex flex-grow gap-36 ' size='sm'>
        <Stepper.Step 
        label="Mounting Type" 
        description={`${TransferSetState.mountingType ? TransferSetState.mountingType : 'Choose mounting type' }`}
        
        >
         <ul className=' w-full '>
            {
                mountingType.map((item , index) => {
                    return(
                        <li 
                            className='first-form-button'
                            key={index} 
                            onClick={() => setTransferSetState({...TransferSetState , mountingType : item})}>{item}</li>
                    )
                })
            }
         </ul>
        </Stepper.Step>
        <Stepper.Step label="Second step" description={`${TransferSetState.transferStages ? TransferSetState.transferStages : 'Choose Stages' }`}>
         <ul className=' w-full'>
            {
                transferStages.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setTransferSetState({...TransferSetState, transferStages : item})}>{item}</li>
                    )
                })
            }
            </ul>
        </Stepper.Step>
        <Stepper.Step label="Select Head And Flow Rate" description={`Head :${TransferSetState.head ? TransferSetState.head : '0' } | Flow Rate : ${TransferSetState.flowRate ? TransferSetState.flowRate : '0' } `}>
          <Group justify='center' flex= 'col'>
            <TextInput
                label = 'Head'
                rightSection = {
                    <Select
                        data={[{value : 'Meters' , label : 'Meters'} ,{value : 'Yards' , label : 'Yards'} ]}
                        defaultSearchValue='Meters'
                        value={TransferSetState.headMesuringUnit ? TransferSetState.headMesuringUnit : 'Meters'}
                        onChange={(value , option) => setTransferSetState({...TransferSetState , headMesuringUnit :  option.value})}
                    />
                }
                />
            <TextInput
                label = 'Flow Rate'
                rightSection = {
                    <Select
                        data={[{value : 'GPM' , label : 'GPM'} , {value : 'LPM' , label : 'LPM'} , {value : 'LPS' , label : 'LPS'} ]}
                        defaultSearchValue='GPM'
                        value={TransferSetState.FlowRateMesuringUnit ? TransferSetState.FlowRateMesuringUnit : 'GPM'}
                        onChange={(_value , option) => setTransferSetState({...TransferSetState , FlowRateMesuringUnit :  option.value})}
                    />
                }
            />
          </Group>
        </Stepper.Step>
        <Stepper.Step label="Operation Method" description={`${TransferSetState.operationMethod ? TransferSetState.operationMethod : 'Choose Operation Method' }`}>
         <ul className=' w-fit mx-auto'>
            {
                operationMethods.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setTransferSetState({...TransferSetState, operationMethod : item})}>{item}</li>
                    )
                })
            }
            </ul>
        </Stepper.Step>
        <Stepper.Step label="Float Switch" description={`${TransferSetState.FloatSwtich ? TransferSetState.FloatSwtich : 'Choose Operation Method' }`}>
         <ul className=' w-fit mx-auto'>
            {
                floatSwitch.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setTransferSetState({...TransferSetState, FloatSwtich : item})}>{item}</li>
                    )
                })
            }
            </ul>
        </Stepper.Step>
        { TransferSetState.FloatSwtich === 'Yes' ?<Stepper.Step label="Float Switch type" description={`${TransferSetState.FloatSwitchType ? TransferSetState.FloatSwitchType : 'Choose Float Switch Type' }`}>
         <ul className=' w-fit mx-auto'>
            <div className='first-form-button' onClick={() => setTransferSetState({...TransferSetState , FloatSwitchType : 'Selonoid Valve'})}> selonoid valve</div>    
            <TextInput label = 'Other' onChange={(e) => setTransferSetState({...TransferSetState , FloatSwitchType : e.target.value})}/>
        </ul>
        </Stepper.Step> : null}
        <Stepper.Step label="Sites Voltage" description={`${TransferSetState.SitesVoltage ? TransferSetState.SitesVoltage : 'Choose Sites Voltage' }`}>
         <ul className=' w-fit mx-auto'>
            {
                sitesVoltage.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setTransferSetState({...TransferSetState, FloatSwtich : item})}>{item}</li>
                    )
                })
               
            }
             <TextInput label = 'Other' onChange={(e) => setTransferSetState({...TransferSetState , SitesVoltage : e.target.value})}/>
            </ul>
        </Stepper.Step>
        <Stepper.Step label="Control Panel Type" description={`${TransferSetState.ControlPanelType ? TransferSetState.ControlPanelType : 'Choose Control Panel Type' }`}>
         <ul className=' w-fit mx-auto'>
            {
                controlPanelType.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setTransferSetState({...TransferSetState, ControlPanelType : item})}>{item}</li>
                    )
                })
               
            }
             <TextInput label = 'Other' onChange={(e) => setTransferSetState({...TransferSetState , SitesVoltage : e.target.value})}/>
            </ul>
        </Stepper.Step>
        <Stepper.Step label="Pipe Sizes" description={` Discharge ${TransferSetState.DischargePipeSize ? TransferSetState.DischargePipeSize : 'Choose size' } Suction : ${TransferSetState.SuctionPipeSize ? TransferSetState.SuctionPipeSize : 'Choose Size'}`}>
         <ul className=' w-fit mx-auto'>
            <Group>
             <TextInput label = 'Suction Pipe Size' onChange={(e) => setTransferSetState({...TransferSetState , SuctionPipeSize : e.target.value})}/>
             <TextInput label = 'Discharge Pipe Size' onChange={(e) => setTransferSetState({...TransferSetState , DischargePipeSize : e.target.value})}/>
            </Group>
            </ul>
        </Stepper.Step>
        <Stepper.Step label="Pipe Material" description={`${TransferSetState.PipeType ? TransferSetState.PipeType : 'Choose Pipe Material' }`}>
         <ul className=' w-fit mx-auto'>
            {
                pipeType.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setTransferSetState({...TransferSetState, PipeType : item})}>{item}</li>
                    )
                })
               
            }
             <TextInput label = 'Other' onChange={(e) => setTransferSetState({...TransferSetState , SitesVoltage : e.target.value})}/>
            </ul>
        </Stepper.Step>
        <Stepper.Step label="Additional Requirements" >
         <div className=' flex flex-grow w-full mx-auto '>
             <Textarea label = 'Any Additional Requirements?' onChange={(e) => setTransferSetState({...TransferSetState , AdditionalRequirements : e.target.value})}/>
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

export default TransferSetSteps