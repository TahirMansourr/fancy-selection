'use client'
import { Button, Group, Select, Stepper, Textarea, TextInput } from '@mantine/core';
import React, { useState } from 'react'

const Circulation = () => {
    const [circulation , setCirculation] = useState({
        operationalSetup : '' ,
        pumpConfiguration : '',
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
        AdditionalRequirements : '',
        dragLineMeasurment : '',
        expulsionLineMeasurment : '',
        pumpBrand : ''
    })
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 12 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const operationalSetup = ['Vertical' , 'Vertical Multi-Stage']
    const pumpConfiguration = ['simple' , 'Duplex (Duty 1 and StandBy 1)', 'Other']
    const operationMethods = ['Standard - with a timer']
    const sitesVoltage = ['Single Phase 220V' , '3 Phase 220V' , '3 Phase 380V']
    const controlPanelType = ['DOL' , 'YD STAR-DELTA' , 'SOFT STARTER']
    const pipeType = ['Cast Iron' , 'Plastic' , 'Galvanized Iron' , 'Stainless Steel 304' , 'Stainless Steel 306']

  return (
    <div className='flex  w-full '>
         
      <Stepper active={active} onStepClick={setActive} orientation='vertical' className='!flex flex-grow gap-40 ' size='sm' >
        <Stepper.Step  label="Operational Setup" 
            description={`${circulation.operationalSetup ? circulation.operationalSetup : 'Choose Operational Setup' }`}
            >
        
            <ul className=' w-full'>
              {operationalSetup.map((item , index) => (
                <li 
                    className='first-form-button'
                    key={index} 
                    onClick={() => setCirculation({...circulation , operationalSetup : item})}>
                  {item}
                </li>
              ))}
            </ul>
          
        </Stepper.Step>
        <Stepper.Step label="Pump Configuration" description={`${circulation.pumpConfiguration ? circulation.pumpConfiguration : 'Choose Pump Configuration' }`}>
         <ul className=' w-full'>
            {
                pumpConfiguration.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setCirculation({...circulation, pumpConfiguration : item})}>{item}</li>
                    )
                })
            }
            </ul>
        </Stepper.Step>
        <Stepper.Step label="Operational Method" description={`${circulation.pumpConfiguration ? circulation.operationMethod : 'Choose Pump Configuration' }`}>
         <ul className=' w-full'>
            {
                operationMethods.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setCirculation({...circulation, operationMethod : item})}>{item}</li>
                    )
                })
            }
            <TextInput label = 'Other' onChange={(e) => setCirculation({...circulation , operationMethod : e.target.value})}/>
            </ul>
        </Stepper.Step>
        {circulation.operationalSetup === 'Vertical Multi-Stage' ?<Stepper.Step label="Pipe Material" description={`${circulation.PipeType ? circulation.PipeType : 'Choose Pipe Material' }`}>
         <ul className=' w-fit mx-auto'>
            {
                pipeType.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setCirculation({...circulation, PipeType : item})}>{item}</li>
                    )
                })
               
            }
             <TextInput label = 'Other' onChange={(e) => setCirculation({...circulation , PipeType : e.target.value})}/>
            </ul>
        </Stepper.Step> : null}
        <Stepper.Step label="Drag and Expulsion Measurments" description={` Drag Line : ${circulation.dragLineMeasurment} | Expulsion Line : ${circulation.expulsionLineMeasurment}`}>
         <ul className=' w-fit mx-auto'>
            <div className='flex gap-5'>
                <div className='flex-col'>
                    <div>
                        <h1>Drag Line Measurments</h1>
                         <div className='first-form-button'  onClick={() =>setCirculation({...circulation , dragLineMeasurment : 'Standard'})}>Standard </div>
                        <TextInput label = 'Other' onChange={(e) => setCirculation({...circulation , dragLineMeasurment : e.target.value})}/>
                    </div>
                </div>
                <div className='flex-col'>
                    <div>
                        <h1>Expulsion Line Measurments</h1>
                         <div className='first-form-button' onClick={() =>setCirculation({...circulation , expulsionLineMeasurment : 'Standard'})}>Standard </div>
                        <TextInput label = 'Other' onChange={(e) => setCirculation({...circulation , expulsionLineMeasurment : e.target.value})}/>
                    </div>
                </div>
            </div>
             
            </ul>
        </Stepper.Step> 
        <Stepper.Step label="Select Head And Flow Rate" description={`Head : ${circulation.head ? circulation.head : '0' } ${circulation.headMesuringUnit} | Flow Rate : ${circulation.flowRate ? circulation.flowRate : '0' } ${circulation.FlowRateMesuringUnit} `}>
          <Group justify='center' flex= 'col'>
          <TextInput
                    label='Head'
                    onChange={(e) =>
                        setCirculation({
                        ...circulation,
                        head: e.target.value,
                        })
                    }
                    w={'100%'}
                    value={circulation.head}
                    rightSection={
                        <Select
                        data={[
                            { value: 'Meters', label: 'Meters' },
                            { value: 'Yards', label: 'Yards' },
                        ]}
                        defaultSearchValue='Meters'
                        value={circulation.headMesuringUnit ? circulation.headMesuringUnit : 'Meters'}
                        onChange={(value, option) => setCirculation({ ...circulation, headMesuringUnit: option.label })}
                        />
                    }
                    rightSectionWidth={'fit'}
                    />

                    <TextInput
                    label='Flow Rate'
                    value={circulation.flowRate}
                    onChange={(e) =>
                        setCirculation({
                        ...circulation,
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
                        value={circulation.FlowRateMesuringUnit ? circulation.FlowRateMesuringUnit : 'GPM'}
                        onChange={(_value, option) => setCirculation({ ...circulation, FlowRateMesuringUnit: option.label })}
                        />
                    }
                    />

          </Group>
        </Stepper.Step>
        <Stepper.Step label="Pump Brand" description={` ${circulation.pumpBrand}`}>
         <ul className=' w-fit mx-auto'>
            <div className='flex gap-5'>
                <div className='flex-col'>
                    <div>
                        <h1>Pump Brand</h1>
                         <div className='first-form-button'  onClick={() =>setCirculation({...circulation , pumpBrand : 'Standard'})}>Standard </div>
                        <TextInput label = 'Other' onChange={(e) => setCirculation({...circulation , pumpBrand : e.target.value})}/>
                    </div>
                </div>
            </div>
             
            </ul>
        </Stepper.Step> 

        <Stepper.Step label="Sites Voltage" description={`${circulation.SitesVoltage ? circulation.SitesVoltage : 'Choose Sites Voltage' }`}>
         <ul className=' w-fit mx-auto'>
            {
                sitesVoltage.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setCirculation({...circulation, SitesVoltage : item})}>{item}</li>
                    )
                })
               
            }
             <TextInput label = 'Other' onChange={(e) => setCirculation({...circulation , SitesVoltage : e.target.value})}/>
        </ul>
        </Stepper.Step>
        <Stepper.Step label="Control Panel Type" description={`${circulation.ControlPanelType ? circulation.ControlPanelType : 'Choose Control Panel Type' }`}>
         <ul className=' w-fit mx-auto'>
            {
                controlPanelType.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setCirculation({...circulation, ControlPanelType : item})}>{item}</li>
                    )
                })
               
            }
             <TextInput label = 'Other' onChange={(e) => setCirculation({...circulation , SitesVoltage : e.target.value})}/>
            </ul>
        </Stepper.Step>
        <Stepper.Step label="Additional Requirements" >
         <div className=' flex flex-grow w-full mx-auto '>
             <Textarea label = 'Any Additional Requirements?' onChange={(e) => setCirculation({...circulation , AdditionalRequirements : e.target.value})}/>
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

export default Circulation