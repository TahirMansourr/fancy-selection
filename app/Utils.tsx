import CommercialSteps from "./components/CommercialSteps";
import FireFightingSteps from "./components/FireFightingSteps";
import TransferSetSteps from "./components/TransferSetSteps";

export const SelectedStepsToRender = (name : string) => {
switch (name) {
    case 'Fire Fighting':
        return <FireFightingSteps/>
    case 'Commercial':
        return <CommercialSteps/>
    case 'Submersible':
        return <CommercialSteps/>
    case 'Domestic':
        return <TransferSetSteps/>
    case 'Pool':
        return <TransferSetSteps/>
    case 'Submersible':
        return <TransferSetSteps/>
    case 'Bore Hole':
        return <TransferSetSteps/>
    case 'Industrial':
        return <TransferSetSteps/>
    case 'Transfer Set':
        return <TransferSetSteps/>
    default:
        break;
}
}