'use client'
import React from "react";
import FirstSetOfButtons from "./components/FirstSetOfButtons";
import { SelectedStepsToRender } from "./Utils";

export default function Home() {

  const [selectedPump , setSelectedPump] = React.useState<string>('')

  return (
    <main className=" flex w-full  px-10 justify-center pt-2">
      <>
       { !selectedPump ?  
       <section className=" rounded-lg shadow-lg p-4 flex flex-col min-w-96">
          <h1 className=" mx-auto font-bold mb-4">Choose your pump of choice</h1>
          <FirstSetOfButtons setSelectedPump={setSelectedPump}/>
      </section>
         : SelectedStepsToRender(selectedPump)}
      </>
    </main>
  );
}
