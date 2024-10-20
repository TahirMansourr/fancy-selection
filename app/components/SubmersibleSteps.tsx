'use client'
import { Button, Group, Select, Stepper, Textarea, TextInput } from '@mantine/core';
import React, { useState } from 'react'

const SubmersibleSteps = () => {
    const [sumbersible , setSubmersible] = useState({
        fluidType : '',
        withCutter : '', 
        cutterMaterial : '',
        operationalSetup : '' ,
        pumpConfiguration : '',
        head : '',
        flowRate : '',
        headMesuringUnit : '',
        FlowRateMesuringUnit : '',
        operationMethod : '',
        withFloat : '',
        FloatNumbers : '', 
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
        pumpBrand : '',
        Accessories : '',
    })
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 12 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const fluidType = ['Sewage Water' , 'Clean Water' ,  'Dewatering']
    const withCutterOrImpeller = ['Cutter' , 'Open Impeller']
    const cutterMaterial = ['Cast Iron' , 'Stainless Steel 304' , 'Stainless Steel 306']
    const operationalSetup = ['Vertical' , 'Vertical Multi-Stage']
    const pumpConfiguration = ['simple' , 'Duplex (Duty 1 and StandBy 1)', 'Triplex']
    const withFloat = ['Floats']
    const FloatNumber = [' Standard (3 Floats)']
    const sitesVoltage = ['Single Phase 220V' , '3 Phase 220V' , '3 Phase 380V']
    const controlPanelType = ['DOL' , 'YD STAR-DELTA' , 'SOFT STARTER']
    const pipeType = ['Cast Iron' , 'Plastic' , 'Galvanized Iron' , 'Stainless Steel 304' , 'Stainless Steel 306']
    const Accessories = ['Stainless Steel Chains' , 'Galvanized Iron Chains']
    const AccessoriesForSewage = ['Stainless Steel Guide Bar' , 'Galvanized Iron Guide Bar']

  return (
    <div className='flex  w-full '>
         
      <Stepper active={active} onStepClick={setActive} orientation='vertical' className='!flex flex-grow gap-40 ' size='sm' >
        <Stepper.Step  label="Fluid Type" 
            description={`${sumbersible.fluidType ? sumbersible.fluidType : 'Choose Operational Setup' }`}
            >
        
            <ul className=' w-full'>
              {fluidType.map((item , index) => (
                <li 
                    className='first-form-button'
                    key={index} 
                    onClick={() => setSubmersible({...sumbersible , fluidType : item})}>
                  {item}
                </li>
              ))}
            </ul>
          
        </Stepper.Step>
       { sumbersible.fluidType === 'Sewage Water' ? 
       <Stepper.Step  label={`
        ${sumbersible.withCutter === 'Cutter' ? 'Cutter' :  sumbersible.withCutter === 'Open Impeller' ? 'Open Impeller' : 'Cutter Or Impeller?' }`}
       description={`${sumbersible.withCutter ? sumbersible.withCutter : 'Would you like a cutter?' }`}>
         <ul className=' w-full'>
            {withCutterOrImpeller.map((item, index) => (
                <li
                    className='first-form-button'
                    key={index}
                    onClick={() => setSubmersible({...sumbersible, withCutter : item})}>
                  {item}
                </li>
              ))}
            </ul>
          </Stepper.Step> : null}
          
          <Stepper.Step  label={`${sumbersible.withCutter === 'Cutter' ? 'Cutter Material' : 
               sumbersible.withCutter === 'Open Impeller' ? 'Impeller Material' : 'Choose Cutter Material' }`}
            description={`${sumbersible.cutterMaterial ? sumbersible.cutterMaterial : 'Choose material'}`}
            >

            <ul className=' w-full'>
              {cutterMaterial.map((item, index) => (
                <li
                    className='first-form-button'
                    key={index}
                    onClick={() => setSubmersible({...sumbersible, cutterMaterial : item})}>
                  {item}
                </li>
              ))}
            </ul>

        </Stepper.Step> 
        <Stepper.Step label="Pump Configuration" description={`${sumbersible.pumpConfiguration ? sumbersible.pumpConfiguration : 'Choose Pump Configuration' }`}>
         <ul className=' w-full'>
            {
                pumpConfiguration.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setSubmersible({...sumbersible, pumpConfiguration : item})}>{item}</li>
                    )
                })
            }
            </ul>
        </Stepper.Step>

        <Stepper.Step label="Would You Like A Float Switch?" 
        description={`${sumbersible.FloatNumbers ? sumbersible.FloatNumbers : 'Choose Pump Configuration' }`}>
         <ul className=' w-full'>
            {
                withFloat.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setSubmersible({...sumbersible, withFloat : item})}>{item}</li>
                    )
                })
            }
            <TextInput label = 'Other' onChange={(e) => setSubmersible({...sumbersible , withFloat : e.target.value})}/>
            </ul>
        </Stepper.Step>

       {sumbersible.withFloat === 'Floats' ?  <Stepper.Step label={sumbersible.withFloat}
        description={`${sumbersible.FloatNumbers ? sumbersible.FloatNumbers : 'Choose Float Numbers' }`}>
         <ul className=' w-full'>
            {
                FloatNumber.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setSubmersible({...sumbersible, FloatNumbers : item})}>{item}</li>
                    )
                })
            }
            <TextInput label = 'Other' onChange={(e) => setSubmersible({...sumbersible , FloatNumbers : e.target.value})}/>
            </ul>
        </Stepper.Step>
        :  null}
       
        
        <Stepper.Step  label="Accessories" 
            description={`${sumbersible.Accessories ? sumbersible.Accessories : 'Choose Operational Setup' }`}
            >
        
            <ul className=' w-full'>
              {sumbersible.fluidType != 'Sewage Water' ? Accessories.map((item , index) => (
                <li 
                    className='first-form-button'
                    key={index} 
                    onClick={() => setSubmersible({...sumbersible , Accessories : item})}>
                  {item}
                </li>
              )) : AccessoriesForSewage.map((item, index) => (
                <li
                    className='first-form-button'
                    key={index}
                    onClick={() => setSubmersible({...sumbersible, Accessories : item})}>
                  {item}
                </li>
              ))}
            </ul>
        </Stepper.Step>














        
        <Stepper.Step label="Select Head And Flow Rate" description={`Head : ${sumbersible.head ? sumbersible.head : '0' } ${sumbersible.headMesuringUnit} | Flow Rate : ${sumbersible.flowRate ? sumbersible.flowRate : '0' } ${sumbersible.FlowRateMesuringUnit} `}>
          <Group justify='center' flex= 'col'>
          <TextInput
                    label='Head'
                    onChange={(e) =>
                        setSubmersible({
                        ...sumbersible,
                        head: e.target.value,
                        })
                    }
                    w={'100%'}
                    value={sumbersible.head}
                    rightSection={
                        <Select
                        data={[
                            { value: 'Meters', label: 'Meters' },
                            { value: 'Yards', label: 'Yards' },
                        ]}
                        defaultSearchValue='Meters'
                        value={sumbersible.headMesuringUnit ? sumbersible.headMesuringUnit : 'Meters'}
                        onChange={(value, option) => setSubmersible({ ...sumbersible, headMesuringUnit: option.label })}
                        />
                    }
                    rightSectionWidth={'fit'}
                    />

                    <TextInput
                    label='Flow Rate'
                    value={sumbersible.flowRate}
                    onChange={(e) =>
                        setSubmersible({
                        ...sumbersible,
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
                        value={sumbersible.FlowRateMesuringUnit ? sumbersible.FlowRateMesuringUnit : 'GPM'}
                        onChange={(_value, option) => setSubmersible({ ...sumbersible, FlowRateMesuringUnit: option.label })}
                        />
                    }
                    />

          </Group>
        </Stepper.Step>


        <Stepper.Step label="Sites Voltage" description={`${sumbersible.SitesVoltage ? sumbersible.SitesVoltage : 'Choose Sites Voltage' }`}>
         <ul className=' w-fit mx-auto'>
            {
                sitesVoltage.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setSubmersible({...sumbersible, SitesVoltage : item})}>{item}</li>
                    )
                })
               
            }
             <TextInput label = 'Other' onChange={(e) => setSubmersible({...sumbersible , SitesVoltage : e.target.value})}/>
        </ul>
        </Stepper.Step>
        <Stepper.Step label="Control Panel Type" description={`${sumbersible.ControlPanelType ? sumbersible.ControlPanelType : 'Choose Control Panel Type' }`}>
         <ul className=' w-fit mx-auto'>
            {
                controlPanelType.map((item, index) => {
                    return(
                        <li
                            className='first-form-button'
                            key={index}
                            onClick={() => setSubmersible({...sumbersible, ControlPanelType : item})}>{item}</li>
                    )
                })
               
            }
             <TextInput label = 'Other' onChange={(e) => setSubmersible({...sumbersible , SitesVoltage : e.target.value})}/>
            </ul>
        </Stepper.Step>
        <Stepper.Step label="Pump Brand" description={` ${sumbersible.pumpBrand}`}>
         <ul className=' w-fit mx-auto'>
            <div className='flex gap-5'>
                <div className='flex-col'>
                    <div>
                        <h1>Pump Brand</h1>
                         <div className='first-form-button'  onClick={() =>setSubmersible({...sumbersible , pumpBrand : 'Standard'})}>Standard </div>
                        <TextInput label = 'Other' onChange={(e) => setSubmersible({...sumbersible , pumpBrand : e.target.value})}/>
                    </div>
                </div>
            </div>
             
            </ul>
        </Stepper.Step> 
        <Stepper.Step label="Additional Requirements" >
         <div className=' flex flex-grow w-full mx-auto '>
             <Textarea label = 'Any Additional Requirements?' onChange={(e) => setSubmersible({...sumbersible , AdditionalRequirements : e.target.value})}/>
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

export default SubmersibleSteps