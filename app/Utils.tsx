import BoosterSet from "./components/BoosetSet";
import FireFightingSteps from "./components/FireFightingSteps";
import TransferSetSteps from "./components/TransferSetSteps";

export const SelectedStepsToRender = (name : string) => {
switch (name) {
    case 'Fire Fighting':
        return <FireFightingSteps/>
    case 'Booster Set':
        return <BoosterSet/>
    case 'Submersible':
        return <BoosterSet/>
    case 'Domestic':
        return <TransferSetSteps/>
    case 'Pool':
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