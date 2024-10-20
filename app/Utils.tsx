import BoosterSet from "./components/BoosetSet";
import Circulation from "./components/Circulation";
import FireFightingSteps from "./components/FireFightingSteps";
import SubmersibleSteps from "./components/SubmersibleSteps";
import TransferSetSteps from "./components/TransferSetSteps";

export const SelectedStepsToRender = (name : string) => {
switch (name) {
    case 'Fire Fighting':
        return <FireFightingSteps/>
    case 'Booster Set':
        return <BoosterSet/>
    case 'Submersible':
        return <SubmersibleSteps/>
    case 'Circulation':
        return <Circulation/>
    case 'Transfer Set':
        return <TransferSetSteps/>
    default:
        break;
}
}