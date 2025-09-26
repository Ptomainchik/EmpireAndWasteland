import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StartPage } from './Components/StartPage/StartPage';
import { NoPage } from './Components/NoPage/NoPage';
import { EmpireMarahPage } from './Components/EmpireMarah/EmpireMarahPage';
import { AngalsWastelandPage } from './Components/AngalsWastelands/AngalsWastelandPage';
import { HistoryEmpireMarah } from './Components/EmpireMarah/History/HistoryEmpireMarah';
import { HistoryAngalsWasteland } from './Components/AngalsWastelands/History/HistoryAngalsWasteland';
import { StructureEmpireMarah } from './Components/EmpireMarah/Structure/StructureEmpireMarah';
import { StructureAngalsWasteland } from './Components/AngalsWastelands/Structure/StructureAngalsWasteland';
import { GameEmpire } from './Components/EmpireMarah/Game/GameEmpire';
import { GameWastelandLvl1 } from './Components/AngalsWastelands/Game/GameWastelandLvl1';
import { GameWastelandLvl2 } from './Components/AngalsWastelands/Game/GameWastelandLvl2';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage/>}/>
      <Route path="empire" element={<EmpireMarahPage/>}/>
      <Route path="wasteland" element={<AngalsWastelandPage/>}/>
      <Route path="historyemp" element={<HistoryEmpireMarah/>}/>
      <Route path="historywas" element={<HistoryAngalsWasteland/>}/>
      <Route path="structureemp" element={<StructureEmpireMarah/>}/>
      <Route path="structurewas" element={<StructureAngalsWasteland/>}/>
      <Route path="gameemp" element={<GameEmpire/>}/>
      <Route path="gamewaslvl1" element={<GameWastelandLvl1/>}/>
      <Route path="gamewaslvl2" element={<GameWastelandLvl2/>}/>
      <Route path="*" element={<NoPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
