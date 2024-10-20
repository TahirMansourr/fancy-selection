'use client'
import { Button, Group, Select, Stepper, Textarea, TextInput } from '@mantine/core';
import React, { useState } from 'react'

const BoosterSet = () => {
    const [BoosterSet , setBoosterState] = useState({
        mountingType : '' ,
        transferStages : '',
        head : '',
        flowRate : '',
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
    const [active, setActive] = useState(0);
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
         
      <Stepper active={active} onStepClick={setActive} orientation='vertical' className='!flex flex-grow gap-40 ' size='sm' >
        <Stepper.Step 
            label="Operational Setup" 
            description={`${BoosterSet.mountingType ? BoosterSet.mountingType : 'Choose Operational Setup' }`}
            >
        
            <ul className=' w-full'>
              {mountingType.map((item , index) => (
                <li 
                    className='first-form-button'
                    key={index} 
                    onClick={() => setBoosterState({...BoosterSet , mountingType : item})}>
                  {item}
                </li>
              ))}
            </ul>
          
        </Stepper.Step>
        <Stepper.Step label="Pump Configuration" description={`${BoosterSet.transferStages ? BoosterSet.transferStages : 'Choose Pump Configuration' }`}>
         <ul className=' w-full'>
            {
                transferStages.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setBoosterState({...BoosterSet, transferStages : item})}>{item}</li>
                    )
                })
            }
            </ul>
        </Stepper.Step>
        <Stepper.Step label="Select Head And Flow Rate" description={`Head : ${BoosterSet.head ? BoosterSet.head : '0' } ${BoosterSet.headMesuringUnit} | Flow Rate : ${BoosterSet.flowRate ? BoosterSet.flowRate : '0' } ${BoosterSet.FlowRateMesuringUnit} `}>
          <Group justify='center' flex= 'col'>
          <TextInput
                    label='Head'
                    onChange={(e) =>
                        setBoosterState({
                        ...BoosterSet,
                        head: e.target.value,
                        })
                    }
                    w={'100%'}
                    value={BoosterSet.head}
                    rightSection={
                        <Select
                        data={[
                            { value: 'Meters', label: 'Meters' },
                            { value: 'Yards', label: 'Yards' },
                        ]}
                        defaultSearchValue='Meters'
                        value={BoosterSet.headMesuringUnit ? BoosterSet.headMesuringUnit : 'Meters'}
                        onChange={(value, option) => setBoosterState({ ...BoosterSet, headMesuringUnit: option.label })}
                        />
                    }
                    rightSectionWidth={'fit'}
                    />

                    <TextInput
                    label='Flow Rate'
                    value={BoosterSet.flowRate}
                    onChange={(e) =>
                        setBoosterState({
                        ...BoosterSet,
                        flowRate: e.target.value,
                        })
                    }
                    w={'100%'}
                    rightSectionWidth={'fit'}
                    rightSection={
                        <Select
                        data={[
                            { value: 'GPM', label: 'GPM' },
                            { value: 'LPM', label: 'LPM' },
                            { value: 'LPS', label: 'LPS' },
                        ]}
                        defaultSearchValue='GPM'
                        value={BoosterSet.FlowRateMesuringUnit ? BoosterSet.FlowRateMesuringUnit : 'GPM'}
                        onChange={(_value, option) => setBoosterState({ ...BoosterSet, FlowRateMesuringUnit: option.label })}
                        />
                    }
                    />

          </Group>
        </Stepper.Step>
       {/* {BoosterSet.mountingType  === 'submersible'? 
       null
       : 
       
       <Stepper.Step 
        label="Operation Method" 
        description={`${BoosterSet.operationMethod ? BoosterSet.operationMethod : 'Choose Operation Method' }`}
        >
         <ul className=' w-fit mx-auto'>
            {
                operationMethods.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setBoosterState({...BoosterSet, operationMethod : item})}>{item}</li>
                    )
                })
            }
            </ul>
        </Stepper.Step>
} */}
{/* {BoosterSet.mountingType  === 'submersible'? 
       null
       : 
       
        <Stepper.Step label="Float Switch" description={`${BoosterSet.FloatSwtich ? BoosterSet.FloatSwtich : 'Choose Operation Method' }`}>
         <ul className=' w-fit mx-auto'>
            {
                floatSwitch.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setBoosterState({...BoosterSet, FloatSwtich : item})}>{item}</li>
                    )
                })
            }
            </ul>
        </Stepper.Step>
} */}
        { BoosterSet.FloatSwtich === 'Yes' ?
        <Stepper.Step label="Float Switch type" description={`${BoosterSet.FloatSwitchType ? BoosterSet.FloatSwitchType : 'Choose Float Switch Type' }`}>
         <ul className=' w-fit mx-auto'>
            <div className='first-form-button' onClick={() => setBoosterState({...BoosterSet , FloatSwitchType : 'Selonoid Valve'})}> selonoid valve</div>    
            <TextInput label = 'Other' onChange={(e) => setBoosterState({...BoosterSet , FloatSwitchType : e.target.value})}/>
        </ul>
        </Stepper.Step> : null 
       
       }
        <Stepper.Step label="Sites Voltage" description={`${BoosterSet.SitesVoltage ? BoosterSet.SitesVoltage : 'Choose Sites Voltage' }`}>
         <ul className=' w-fit mx-auto'>
            {
                sitesVoltage.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setBoosterState({...BoosterSet, SitesVoltage : item})}>{item}</li>
                    )
                })
               
            }
             <TextInput label = 'Other' onChange={(e) => setBoosterState({...BoosterSet , SitesVoltage : e.target.value})}/>
        </ul>
        </Stepper.Step>
        <Stepper.Step label="Control Panel Type" description={`${BoosterSet.ControlPanelType ? BoosterSet.ControlPanelType : 'Choose Control Panel Type' }`}>
         <ul className=' w-fit mx-auto'>
            {
                controlPanelType.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setBoosterState({...BoosterSet, ControlPanelType : item})}>{item}</li>
                    )
                })
               
            }
             <TextInput label = 'Other' onChange={(e) => setBoosterState({...BoosterSet , SitesVoltage : e.target.value})}/>
            </ul>
        </Stepper.Step>
      { BoosterSet.mountingType != 'submersible' ? <Stepper.Step label="Pipe Sizes" description={` Discharge ${BoosterSet.DischargePipeSize ? BoosterSet.DischargePipeSize : 'Choose size' } Suction : ${BoosterSet.SuctionPipeSize ? BoosterSet.SuctionPipeSize : 'Choose Size'}`}>
         <ul className=' w-fit mx-auto'>
            <Group>
             <TextInput label = 'Suction Pipe Size' onChange={(e) => setBoosterState({...BoosterSet , SuctionPipeSize : e.target.value})}/>
             <TextInput label = 'Discharge Pipe Size' onChange={(e) => setBoosterState({...BoosterSet , DischargePipeSize : e.target.value})}/>
            </Group>
            </ul>
        </Stepper.Step> : null}
        <Stepper.Step label="Pipe Material" description={`${BoosterSet.PipeType ? BoosterSet.PipeType : 'Choose Pipe Material' }`}>
         <ul className=' w-fit mx-auto'>
            {
                pipeType.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setBoosterState({...BoosterSet, PipeType : item})}>{item}</li>
                    )
                })
               
            }
             <TextInput label = 'Other' onChange={(e) => setBoosterState({...BoosterSet , PipeType : e.target.value})}/>
            </ul>
        </Stepper.Step>
        <Stepper.Step label="Additional Requirements" >
         <div className=' flex flex-grow w-full mx-auto '>
             <Textarea label = 'Any Additional Requirements?' onChange={(e) => setBoosterState({...BoosterSet , AdditionalRequirements : e.target.value})}/>
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

export default BoosterSet